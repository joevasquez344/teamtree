import {
  doc,
  getDoc,
  collection,
  getDocs,
  addDoc,
  setDoc,
  writeBatch,
  query,
  where,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db, auth } from "../../firebase/config";
import { fetchTeamChat, createTeamChat } from "./chat";
import { isTeamMember } from "./helpers";
import { sendTeamInvites } from "./invites";

const createTeam = async (authUser, teamName, authRole, inviteList) => {
  const userRef = doc(db, `users/${authUser.id}`);

  const createdTeam = await addDoc(collection(db, "teams"), {
    creator: userRef,
    creatorId: authUser.id,
    name: teamName,
  });

  await setDoc(doc(db, `teams/${createdTeam.id}/users/${authUser.id}`), {
    role: authRole,
    username: authUser.username,
    joined: serverTimestamp(),
  });
  await setDoc(doc(db, `users/${authUser.id}/teams/${createdTeam.id}`), {
    role: authRole,
  });

  await createTeamChat(createdTeam.id, authUser.id);

  await sendTeamInvites(
    inviteList,
    {
      id: createdTeam.id,
      name: teamName,
    },
    authUser.id
  );

  return {
    id: createdTeam.id,
    name: teamName,
  };

  // batch.set(doc(db, `teams/${createdTeam.id}/users/${authUser.id}`), {
  //   role: authRole,
  // });
  // batch.set(doc(db, `users/${authUser.id}/teams/${createdTeam.id}`));
};

const teamExists = async (teamId) => {
  const ref = doc(db, `teams/${teamId}`);
  const snapshot = await getDoc(ref);

  if (snapshot.exists() && snapshot._document !== null) {
    return true;
  } else {
    return false;
  }
};

// getTeamMessages is not longer in use, same with getGroupMessages, instead look down below
const getTeamById = async (id, authId) => {
  const ref = doc(db, `teams/${id}`);
  const snapshot = await getDoc(ref);
  console.log("Snapyyy: ", snapshot.exists());
  if (snapshot.exists()) {
    const isMember = await isTeamMember(id, authId);

    if (!isMember) return false;

    let arr = [1];
    let team = { id: snapshot.id, ...snapshot.data() };

    team = await Promise.all(
      arr.map(async (item) => ({
        id: snapshot.id,
        ...snapshot.data(),
        members: await getTeamMembers(snapshot.id, authId),
        // ------------ Here --------------
        // chat: await fetchTeamChat(snapshot.id),
      }))
    );

    return team[0];
  } else {
    return false;
  }
};

const getAuthsTeams = async (authId) => {
  const teamDocs = collection(db, `users/${authId}/teams`);
  const teamSnapshot = await getDocs(teamDocs);
  const teamIds = teamSnapshot.docs.map((d) => d.id);

  console.log("Ids: ", teamIds);

  // if (teamIds.length === 0) {
  //   return false;
  // }

  let teams = await Promise.all(
    teamIds.map(async (id) => await getDoc(doc(db, `teams/${id}`)))
  );

  console.log("Teams Before spread: ", teams);

  teams = teams?.map((team) => ({ id: team.id, ...team.data() }));
  console.log("Teams After spread: ", teams);

  return teams;
};

const addTeamMember = async (userId, teamId, authId) => {
  const batch = writeBatch(db);

  const userRef = doc(db, `users/${userId}`);
  const teamRef = doc(db, `teams/${teamId}`);
  const teamUserRef = doc(db, `teams/${teamId}/users/${userId}`);
  const userTeamRef = doc(db, `users/${userId}/teams/${teamId}`);

  const userDoc = await getDoc(userRef);
  const teamDoc = await getDoc(teamRef);

  const teamSnapshot = teamDoc.data();
  const creatorId = teamSnapshot.creatorId;

  if (userDoc.exists() && teamDoc.exists() && creatorId === authId) {
    batch.set(teamUserRef);
    batch.set(userTeamRef);
  } else {
    return alert("Team or User does not exist");
  }
};
const removeTeamMember = async (userId, teamId, authId) => {
  const batch = writeBatch(db);

  const userRef = doc(db, `users/${userId}`);
  const teamRef = doc(db, `teams/${teamId}`);
  const teamUserRef = doc(db, `teams/${teamId}/users/${userId}`);
  const userTeamRef = doc(db, `users/${userId}/teams/${teamId}`);

  const userDoc = await getDoc(userRef);
  const teamDoc = await getDoc(teamRef);

  const teamSnapshot = teamDoc.data();
  const creatorId = teamSnapshot.creatorId;

  if (userDoc.exists() && teamDoc.exists() && creatorId === authId) {
    batch.delete(teamUserRef);
    batch.delete(userTeamRef);

    await batch.commit();

    removeUsersTasks(userId, teamId);
  } else {
    return alert("Team or User does not exist");
  }
};

const removeUsersTasks = async (userId, teamId) => {
  const tasksRef = collection(db, "tasks");
  const teamRef = doc(db, `teams/${teamId}`);
  const tasksQuery = query(tasksRef, where("teamRef", "==", teamRef));
  const tasksSnapshot = await getDocs(tasksQuery);
  const taskIds = tasksSnapshot.docs.map((d) => d.id);

  await Promise.all(
    taskIds.map(
      async (id) => await deleteDoc(doc(db, `users/${userId}/tasks/${id}`))
    )
  );
  await Promise.all(
    taskIds.map(
      async (id) => await deleteDoc(doc(db, `tasks/${id}/users/${userId}`))
    )
  );
};

const getGroupQuantity = async (teamId) => {
  const ref = collection(db, `groups`);
  const filter = query(ref, where("team", "==", teamId));
  const snapshot = await getDocs(filter);
  const groups = snapshot.docs.map((group) => group.id);

  return groups.length;
};

const getTeamMembersQuantity = async (teamId) => {
  const ref = collection(db, `teams/${teamId}/users`);
  const snapshot = await getDocs(ref);
  const users = snapshot.docs.map((user) => user.id);

  return users.length;
};
const getTeamMembers = async (teamId) => {
  const ref = collection(db, `teams/${teamId}/users`);
  const snapshot = await getDocs(ref);
  const members = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  let users = await Promise.all(
    members.map(async (member) => ({
      joined: member.joined,
      role: member.role,
      info: await getDoc(doc(db, `users/${member.id}`)),
    }))
  );
  users = users.map((user) => ({
    id: user.info.id,
    ...user.info.data(),
    joined: user.joined,
  }));

  console.log("Users: ", users);
  return users;
};

export {
  createTeam,
  getAuthsTeams,
  getTeamById,
  getGroupQuantity,
  getTeamMembersQuantity,
  addTeamMember,
  removeTeamMember,
  getTeamMembers,
  teamExists
};

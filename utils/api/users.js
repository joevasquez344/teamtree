import {
  doc,
  getDoc,
  collection,
  getDocs,
  addDoc,
  setDoc,
  writeBatch,
  serverTimestamp,
  query,
  where,
} from "firebase/firestore";
import { db, auth } from "../../firebase/config";
import moment from "moment";
import { getTeamMembers } from "./teams";

const getAppUsers = async () => {
  const ref = collection(db, "users");
  const snapshot = await getDocs(ref);
  const users = snapshot.docs.map((user) => ({ id: user.id, ...user.data() }));

  return users;
};

const fetchUsersWorkedWith = async (teamId, authId) => {
  const teamsRef = collection(db, "teams");
  const teamsQuery = query(teamsRef, "");
  const usersTeamsRef = collection(db, `users/${authId}/teams`);
  const usersTeamsSnapshot = await getDocs(usersTeamsRef);
  const usersTeamsIds = usersTeamsSnapshot.docs.map((doc) => doc.id);
  const members = await getTeamMembers(teamId);

  const userDocs = await Promise.all(
    usersTeamsIds.map(
      async (id) => await getDocs(collection(db, `teams/${id}/users`))
    )
  );

  const userIds = [];

   userDocs.forEach((arr) => {
    arr.docs.forEach((user) => {
      userIds.push(user.id);
    });
  });

  let users = await Promise.all(
    userIds.map(async (id) => await getDoc(doc(db, `users/${id}`)))
  );

  users = users.map((user) => ({ id: user.id, ...user.data() }));

  // let usersArr = [];

  // userDocs.forEach((arr) => {
  //   arr.docs.forEach((user) => {
  //     usersArr.push({ id: user.id, ...user.data() });
  //   });
  // });

  users = users.filter((user) => {
    const isAlreadyMember = members.find((member) => member.id === user.id);

    if (!isAlreadyMember) {
      return user;
    }
  });

  // usersArr = usersArr.filter((user) => user.id !== authId);
  users = users.filter((user) => user.id !== authId);

console.log('USERS: ', users);
  return users;
};

const getUserById = async (userId) => {
  const ref = doc(db, `users/${userId}`);
  const snapshot = await getDoc(ref);
  const user = { id: snapshot.id, ...snapshot.data() };

  return user;
};
const getUserByEmail = async (email) => {
  const ref = collection(db, "users");
  const filter = query(ref, where("email", "==", email));
  const snapshot = await getDocs(filter);

  if (snapshot.empty) {
    return {
      error: true,
      errorCode: 1001,
      payload: "User does not exist",
    };
  }

  const user = { id: snapshot.docs[0], ...snapshot.docs[0].data() };
  return {
    error: false,
    payload: user,
  };
};

const getUserByUsername = async (username) => {
  const ref = collection(db, "users");
  const filter = query(ref, where("username", "==", username));
  const snapshot = await getDocs(filter);

  const user = {
    id: snapshot.docs[0].id,
    ...snapshot.docs[0].data(),
    createdAt: snapshot?.docs[0].data()?.createdAt?.toString(),
  };

  return user;
};

const getUsersByPosition = async (position) => {
  const ref = collection(db, "users");
  const filter = query(ref, where("position", "==", position));
  const snapshot = await getDocs(filter);
  const users = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  return users;
};

const createUser = async (user) => {
  await setDoc(doc(db, "users", user.id), {
    id: user.id,
    email: user.email,
    name: user.name,
    avatar: null,
    username: user.username,
    position: user.position,
    clockedIn: false,
    onlineStatus: "offline",
    onlineHistory: [],
    createdAt: serverTimestamp(),
  });
};

const clockIn = async (authId) => {
  const batch = writeBatch(db);
  const userRef = doc(db, `users/${authId}`);
  const snapshot = await getDoc(doc(db, `users/${authId}`));
  const data = snapshot.data();
  console.log("Data: ", data);

  const onlineHistory = data?.onlineHistory;

  let time = moment().format("MMMM Do YYYY, h:mm:ss a").split(",")[1];
  const timeOfDay = time.split(" ")[2];
  const hour = time.split(":")[0];
  const minute = time.split(":")[1];

  time = `${hour}:${minute} ${timeOfDay}`;

  console.log("Time: ", time);

  batch.update(userRef, {
    onlineStatus: "online",
    onlineHistory: [...onlineHistory, time],
  });

  await batch.commit();

  return time;
};

const clockOut = async (authId) => {
  const batch = writeBatch(db);
  const userRef = doc(db, `users/${authId}`);
  const snapshot = await getDoc(doc(db, `users/${authId}`));
  const data = snapshot.data();
  console.log("Data: ", data);
  const onlineHistory = data?.onlineHistory;

  let time = moment().format("MMMM Do YYYY, h:mm:ss a").split(",")[1];
  const timeOfDay = time.split(" ")[2];
  const hour = time.split(":")[0];
  const minute = time.split(":")[1];

  time = `${hour}:${minute} ${timeOfDay}`;

  batch.update(userRef, {
    onlineStatus: "offline",
    onlineHistory: [...onlineHistory, time],
  });

  await batch.commit();

  return time;
};

export {
  getAppUsers,
  getUserById,
  getUserByUsername,
  getUsersByPosition,
  getUserByEmail,
  createUser,
  clockIn,
  clockOut,
  fetchUsersWorkedWith,
};

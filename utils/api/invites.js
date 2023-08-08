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
  orderBy,
  updateDoc,
  serverTimestamp,
  deleteDoc,
} from "firebase/firestore";
import { db, auth } from "../../firebase/config";

export const sendTeamInvites = async (inviteList, team, authId) => {
  // await Promise.all(
  //   inviteList.map(
  //     async (user) =>
  //       await addDoc(collection(db, "invites"), {
  //         from: authId,
  //         to: user.id,
  //         status: "pending",
  //         target: "team",
  //         team,
  //       })
  //   )
  // );
  // await Promise.all(
  //   inviteList.map(
  //     async (user) =>
  //       await addDoc(collection(db, `users/${user.id}/invites`), {
  //         from: authId,
  //         to: user.id,
  //         status: "pending",
  //         target: "team",
  //         team,
  //       })
  //   )
  // );

  const sentInvites = await Promise.all(
    inviteList.map(async (user) => {
      const { id } = await addDoc(collection(db, "notifications"), {
        type: "invite",
        from: authId,
        to: user.id,
        status: "pending",
        target: "team",
        team,
        new: true,
      });

      return {
        inviteId: id,
        to: user.id,
      };
    })
  );

  console.log("Sent Invite: ", sentInvites);

  await Promise.all(
    sentInvites.map(
      async (invite) =>
        await setDoc(
          doc(db, `users/${invite.to}/notifications/${invite.inviteId}`),
          {
            // type: "invite",
            // from: authId,
            // to: user.id,
            // status: "pending",
            // target: "team",
            // team,
          }
        )
    )
  );
};

export const acceptTeamInvite = async (notificationId, authUser, teamId) => {
  // await updateDoc(doc(db, `invites/${inviteId}`), {
  //   status: "accepted",
  // });
  // await updateDoc(doc(db, `users/${authId}/invites/${inviteId}`), {
  //   status: "accepted",
  // });

  await updateDoc(doc(db, `notifications/${notificationId}`), {
    status: "accepted",
    new: false
  });
  await updateDoc(
    doc(db, `users/${authUser.id}/notifications/${notificationId}`),
    {
      status: "accepted",
      new: false
    }
  );

  await setDoc(doc(db, `users/${authUser.id}/teams/${teamId}`), {});
  await setDoc(doc(db, `teams/${teamId}/users/${authUser.id}`), {
    role: null,
    username: authUser.username,
    joined: serverTimestamp(),
  });
};
export const declineTeamInvite = async (inviteId, authId) => {
  await updateDoc(doc(db, `invites/${inviteId}`), {
    status: "declined",
  });
  await updateDoc(doc(db, `users/${authId}/invites/${inviteId}`), {
    status: "declined",
  });
};

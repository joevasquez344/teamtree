import {
  doc,
  getDoc,
  collection,
  getDocs,
  addDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
  writeBatch,
  query,
  where,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase/config";
import { getTeamById } from "./teams";
import { getUserById } from "./users";
import { notification } from "antd";

const getTaskDetails = async (taskId, userId) => {
  const taskRef = doc(db, `tasks/${taskId}`);
  const taskSnapshot = await getDoc(taskRef);
  return { id: taskSnapshot.id, ...taskSnapshot.data() };
};
const getUsersTask = async (userId) => {
  try {
    const ref = collection(db, `users/${userId}/tasks`);
    const snapshot = await getDocs(ref);

    let tasks = await Promise.all(
      snapshot.docs.map(
        async (task) => await getDoc(doc(db, `tasks/${task.id}`))
      )
    );

    tasks = tasks.map((task) => ({ id: task.id, ...task.data() }));
    // const tasksRef = collection(db, "tasks");
    // const tasksQuery = query(tasksRef, where("user" == userRef));
    // const tasksSnapshot = await getDocs(tasksQuery);
    // let tasks = tasksSnapshot.docs.map((doc) => ({
    //   id: doc.id,
    //   ...doc.data(),
    // }));
    console.log("Tasks: ", tasks);

    return tasks;
  } catch (error) {
    console.log("Error: ", error);
  }
};

const getUsersTasks = async (userId) => {
  const taskIds = collection(db, `users/${userId}/tasks`);
  const tasks = await Promise.all(
    taskIds.map(async (d) => await getDoc(doc(db, `tasks/${d.id}`)))
  );

  return tasks.map((task) => ({ id: task.id, ...task.data() }));
};

const fetchTaskedUsers = async (task) => {
  const ref = collection(db, `tasks/${task.id}/users`);
  const snapshot = await getDocs(ref);

  let users = await Promise.all(
    snapshot.docs.map(async (user) => await getUserById(user.id))
  );

  return users;
};

const fetchTasksByTeam = async (teamId, authId) => {
  const team = await getTeamById(teamId, authId);
  console.log("Team is: ", team);
  if (!team) {
    return {
      error: true,
    };
  }
  const teamRef = doc(db, `teams/${teamId}`);
  const tasksRef = collection(db, "tasks");
  const tasksQuery = query(tasksRef, where("teamRef", "==", teamRef));

  if (team) {
    let tasks = await getDocs(tasksQuery);

    tasks = await Promise.all(
      tasks.docs.map(async (task) => ({
        id: task.id,
        ...task.data(),
        user: await getUserById(task.data().userRef.id),
        assigned: (
          await fetchTaskedUsers(task)
        ).filter((user) => user.username),
      }))
    );

    return {
      team,
      tasks,
    };
  }
};

const fetchTasksByGroup = async (groupId) => {
  const taskIds = collection(db, `groups/${groupId}/tasks`);
  const tasks = await Promise.all(
    taskIds.map(async (d) => await getDoc(doc(db, `tasks/${d.id}`)))
  );
  return tasks.map((task) => ({ id: task.id, ...task.data() }));
};

const createTask = async (authUser, team, group, taskText, taskName, users) => {
  const batch = writeBatch(db);

  const userRef = doc(db, `users/${authUser.id}`);
  const teamRef = doc(db, `teams/${team.id}`);

  const docRef = await addDoc(collection(db, "tasks"), {
    userRef,
    teamRef,
    taskText,
    taskName,
    edited: false,
    status: "tasked",
    createdAt: serverTimestamp(),
  });

  const taskRef = doc(db, `tasks/${docRef.id}`);
  let task = await getDoc(taskRef);
  let user = await getDoc(userRef);
  user = { id: user.id, ...user.data() };
  task = { id: task.id, ...task.data(), user };

  // Assigning task to selected users
  await Promise.all(
    users.map(
      async (user) =>
        await setDoc(doc(db, `users/${user.id}/tasks/${task.id}`), {})
    )
  );

  await Promise.all(
    users.map(
      async (user) =>
        await setDoc(doc(db, `tasks/${task.id}/users/${user.id}`), {})
    )
  );

  task = { ...task, assigned: users };

  // Assigning task to team
  batch.set(doc(db, `teams/${team.id}/tasks/${docRef.id}`), {});
  // batch.set(doc(db, `users/${authUser.id}/tasks/${docRef.id}`), {});

  if (group) {
    // Attach task to group
    batch.set(doc(db, `groups/${group.id}/tasks/${docRef.id}`), {});

    await batch.commit();
  }

  await batch.commit();

  // Notifying selected users of task
  // Note Below
  const sentNotifications = await Promise.all(
    users
      .filter((user) => user.id !== authUser.id)
      .map(async (user) => {
        console.log("Team Num", team);
        const { id } = await addDoc(collection(db, "notifications"), {
          type: "task",
          from: authUser.id,
          to: user.id,
          status: "accepted",
          target: "team",
          teamName: team.name,
          taskName: task.taskName,
          new: true,
          // task,
        });

        console.log("Notification ID: ", id);

        return {
          notificationId: id,
          to: user.id,
        };
      })
  );
  // ==> Note: Whenever a document is added into the Users subcollection: Notifications (users/:userId/notifications), as shown down below, the Navbar
  //       is equipped with a snapshot listener that will listen to this subcollection live and update the Navbar Bell state accordingly
  await Promise.all(
    sentNotifications
      .filter((notification) => notification.to !== authUser.id)
      .map(
        async (notification) =>
          await setDoc(
            doc(
              db,
              `users/${notification.to}/notifications/${notification.notificationId}`
            ),
            {}
          )
      )
  );

  return task;
};

const markNotificationsAsOld = async (notificationList) => {
  await Promise.all(
    notificationList.map(
      async (notification) =>
        await updateDoc(doc(db, `notifications/${notification.id}`), {
          new: false,
        })
    )
  );
};

const deleteTask = async (team, group, task) => {
  const batch = writeBatch(db);

  batch.delete(doc(db, `tasks/${task.id}`));

  if (team && !group) {
    batch.delete(doc(db, `teams/${team.id}/tasks/${task.id}`));

    removeTaskFromUsers(task, task.assigned);
  }

  if (team && group) {
    // Attach task to group
    batch.delete(doc(db, `groups/${team.id}/tasks/${task.id}`));

    removeTaskFromUsers(task, task.assigned);
  }

  await batch.commit();
};

// Create & Send notification to users that get unassigned??
const editTask = async (taskName, taskText, task, assignedUsers) => {
  const batch = writeBatch(db);

  batch.update(doc(db, `tasks/${task.id}`), {
    taskText,
    taskName,
    edited: true,
    status: "tasked",
  });

  await batch.commit();

  const oldAssigned = task.assigned;

  const unchangedUsers = assignedUsers.filter((user) => {
    const match = oldAssigned.find((u) => u.id === user.id);
    if (match) {
      return user;
    }
  });

  const addedUsers = assignedUsers.filter((user) => {
    const match = oldAssigned.find((u) => u.id === user.id);
    if (!match) {
      return user;
    }
  });

  const removedUsers = oldAssigned.filter((user) => {
    const match = assignedUsers.find((u) => u.id === user.id);
    if (!match) {
      return user;
    }
  });

  addTaskToUsers(task, addedUsers);

  removeTaskFromUsers(task, removedUsers);

  return {
    id: task.id,
    userRef: task.userRef,
    teamRef: task.teamRef,
    taskText,
    taskName,
    edited: true,
    status: "tasked",
    assigned: [...addedUsers, ...unchangedUsers],
  };
};

const addTaskToUsers = async (task, users) => {
  await Promise.all(
    users.map(async (user) => {
      await setDoc(doc(db, `tasks/${task.id}/users/${user.id}`), {});

      return user;
    })
  );
  await Promise.all(
    users.map(async (user) => {
      await setDoc(doc(db, `users/${user.id}/tasks/${task.id}`), {});
      return user;
    })
  );
};

const removeTaskFromUsers = async (task, users) => {
  if (users.length > 0) {
    await Promise.all(
      users.map(async (user) => {
        await deleteDoc(doc(db, `tasks/${task.id}/users/${user.id}`), {});
        return user;
      })
    );
    await Promise.all(
      users.map(async (user) => {
        await deleteDoc(doc(db, `users/${user.id}/tasks/${task.id}`), {});
        return user;
      })
    );
  }
};

const completeTask = async (taskId) => {
  const taskRef = doc(db, `tasks/${taskId}`);
  const completed = await updateDoc(taskRef, { status: "complete" });
  console.log("Completed: ", completed);
};

export {
  createTask,
  deleteTask,
  editTask,
  completeTask,
  getUsersTasks,
  fetchTasksByTeam,
  fetchTasksByGroup,
  getTaskDetails,
  getUsersTask,
  markNotificationsAsOld,
};

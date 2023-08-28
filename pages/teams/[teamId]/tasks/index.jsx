import React, { useEffect, useState } from "react";
import { useAuth } from "../../../../context/auth/AuthContext";
import { useTeams } from "../../../../context/TeamsContext";
import Skeleton from "react-loading-skeleton";
import Members from "../../../../components/users/Members";
import {
  completeTask,
  createTask,
  deleteTask,
  editTask,
  fetchTasksByTeam,
} from "../../../../utils/api/tasks";
import { Editor, EditorState, getDefaultKeyBinding, RichUtils } from "draft-js";

import { useRouter } from "next/router";
import TextEditor from "../../../../components/TextEditor/TextEditor";
import { Feed, FeedItem } from "../../../../components/Feed";
import useOverlay from "../../../../hooks/useOverlay";
import Overlay from "../../../../components/Overlay";
import usePopup from "../../../../hooks/usePopup";
import Popup from "../../../../components/MyPopup";
import DeleteTaskPopup from "../../../../components/popups/DeleteTaskPopup";
import AssignUsersDropdown from "../../../../components/dropdowns/AssignUsersDropdown";
import TopAlert from "../../../../components/TopAlert";
import { useEditAlert } from "../../../../hooks/alerts/useEditAlert";
import { removeTeamMember } from "../../../../utils/api/teams";
import useTabs from "../../../../hooks/useTabs";
import Task from "../../../../components/tasks/Task";

// Page Tasks
// 1. On hover of task, slide out a view assigned users button
// 2. Edit Task Feature
// 3. Implement popup for Delete, Edit, and More icon, just as in Message component, when hovering on item
// 4. Progress for each task listing if it's either complete, in progress, incomplete
// 5. Delete multiple tasks simultaneously with smooth slide animation for custom checkbox inputs (left side of task)

const Tasks = ({ mobileSidebarState }) => {
  const router = useRouter();
  const { tabs, tabClick } = useTabs(["All", "Assigned", "Completed"]);
  const [tasks, setTasks] = useState(null);
  const [team, setTeam] = useState(null);
  const [loading, setLoading] = useState(true);
  const [taskInput, setTaskInput] = useState("");
  const [taskNameInput, setTaskNameInput] = useState("");
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [assignUsersPopup, setAssignUsersPopup] = useState(false);
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [createTaskPopup, setCreateTaskPopup] = useState(false);
  const [deleteTaskPopup, setDeleteTaskPopup] = useState(false);
  const [editorText, setEditorText] = useState("");
  const [inputEl, setInputEl] = useState(-1);
  const [hover, setHover] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertType, setAlertType] = useState(null);
  const [assignMembersError, setAssignMembersError] = useState(null);
  const [taskInputError, setTaskInputError] = useState(null);
  const [taskNameInputError, setTaskNameInputError] = useState(null);
  const [headerTabs, setHeaderTabs] = useState();
  const [membersMobile, setMembersMobile] = useState(false);
  // const [membersVisible, setMembersVisible] = useState()

  const { setAuthLayout, authUser, logout } = useAuth();
  const { teams, removeTeam } = useTeams();

  const showMore = (id) => {
    if (inputEl === id) return;
    setHover(id);
  };
  const hideMore = (id) => {
    if (inputEl === id) return;
    setHover(-1);
  };

  const handleTaskInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleTaskNameInputChange = (e) => {
    setTaskNameInput(e.target.value);
  };

  const handleCreateTask = async (e) => {
    e.preventDefault();

    if (
      taskNameInput.length === 0 ||
      taskInput.length === 0 ||
      assignedUsers.length === 0
    ) {
      if (taskNameInput.length === 0)
        setTaskNameInputError("Task name cannot be blank.");
      else setTaskNameInputError(null);

      if (taskInput.length === 0) setTaskInputError("Task cannot be blank");
      else setTaskInputError(null);

      if (assignedUsers.length === 0)
        setAssignMembersError(
          "You must assign at least 1 member to this task."
        );
      else setAssignMembersError(null);

      return;
    }

    setCreateTaskPopup(false);
    setAssignUsersPopup(false);

    const group = null;

    const task = await createTask(
      authUser,
      team,
      group,
      taskInput,
      taskNameInput,
      assignedUsers
    );

    console.log("Taskk: ", task);
    setTasks([...tasks, task]);

    setAssignedUsers([]);
    setTaskNameInput("");
    setTaskInput("");
  };

  const handleDeleteTask = async () => {
    closeDeleteTaskPopup();

    const group = null;

    await deleteTask(team, group, taskToDelete);

    setTasks(tasks.filter((item) => item.id !== taskToDelete.id));

    setAlert(true);
    setAlertType("delete");
    setAlertMessage("Task Successfully Deleted");
  };

  const handleEditTask = async (e) => {
    e.preventDefault();

    if (
      taskNameInput.length === 0 ||
      taskInput.length === 0 ||
      assignedUsers.length === 0
    ) {
      if (taskNameInput.length === 0)
        setTaskNameInputError("Task name cannot be blank.");
      else setTaskNameInputError(null);

      if (taskInput.length === 0) setTaskInputError("Task cannot be blank");
      else setTaskInputError(null);

      if (assignedUsers.length === 0)
        setAssignMembersError(
          "You must assign at least 1 member to this task."
        );
      else setAssignMembersError(null);

      return;
    }

    handleCloseCreateTaskPopup();

    const task = await editTask(
      taskNameInput,
      taskInput,
      taskToEdit,
      assignedUsers
    );

    const updatedTasks = tasks.map((t) => {
      if (t.id === task.id) {
        t = task;
      }

      return t;
    });

    setTasks(updatedTasks);

    setAlert(true);
    setAlertType("edit");
    setAlertMessage("Task Successfully Updated");
  };

  console.log("Tasks: ", tasks);

  const openDeleteTaskPopup = (task) => {
    setAlert(false);
    setDeleteTaskPopup(true);
    setTaskToDelete(task);
  };

  const closeDeleteTaskPopup = () => {
    setDeleteTaskPopup(false);
    setTaskToDelete(null);
  };

  const assignUser = (user) => {
    setAssignedUsers([...assignedUsers, user]);
  };

  const unassignUser = (user) => {
    setAssignedUsers(assignedUsers.filter((item) => item.id !== user.id));
  };

  const handleEditorChange = (e) => setEditorText(e.target.value);

  const getTeamTasks = async () => {
    const response = await fetchTasksByTeam(router.query.teamId, authUser.id);

    if (response.error) {
      console.log("Error: ", response.error);

      if (teams.length > 0) {
        router.push(`/teams/${teams[0].id}/tasks`);
        return;
      } else {
        router.push("/createteam");
        return;
      }

      // router.push("/login");
    }

    setTeam(response.team);
    setTasks(response.tasks);
    setLoading(false);
  };

  const handleOpenAssignUsers = () => {
    setAssignUsersPopup(true);
  };

  const handleOpenEditTask = (task) => {
    setAlert(false);
    setCreateTaskPopup(true);
    setAssignUsersPopup(true);
    setTaskToEdit(task);
    setTaskNameInput(task.taskName);
    setTaskInput(task.taskText);
    setAssignedUsers(task.assigned);
  };

  const handleOpenCreateTask = () => {
    setCreateTaskPopup(true);
    setTaskInput("");
    setTaskNameInput("");
    setAssignUsersPopup(true);
    setAssignedUsers([]);
    setAssignMembersError(null);
    setTaskToEdit(null);
  };

  const handleCloseCreateTaskPopup = () => {
    setCreateTaskPopup(false);
    setTaskToEdit(null);
    setAssignedUsers([]);
  };

  const handleCompleteTask = async (taskId) => {
    await completeTask(taskId);

    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        task.status = "complete";
      }

      return task;
    });

    setTasks(updatedTasks);
  };

  useEffect(() => {
    getTeamTasks();
    setAuthLayout(true);
  }, [router.query.teamId]);

  const handleRemoveMember = (memberId) => {
    removeTeamMember(memberId, team.id, authUser.id);
    const updatedTeam = {
      ...team,
      members: team.members.filter((user) => user.id !== memberId),
    };

    if (memberId === authUser.id) {
      removeTeam(team.id);
    }
    setTeam(updatedTeam);
  };

  console.log("Teams from Tasks: ", teams);

  if (loading) {
    return <div className="bg-gray-700 h-screen">Loading </div>;
  }

  console.log("TABS: ", tabs);

  const activeTab = tabs.find((tab) => tab.active);
  const myTasks = tasks.filter((task) => {
    const match = task.assigned?.find((member) => member.id === authUser?.id);
    if (match) {
      return task;
    }
  });

  const completedTasks = tasks.filter((task) => task.status === "complete");

  console.log("My Tasks: ", myTasks);

  return (
    <div>
      {alert && <TopAlert alertType={alertType}>{alertMessage}</TopAlert>}
      {/* <Feed>
        {tasks.map((task) => (
          <FeedItem>
            {taskToDelete && (
              <DeleteTaskPopup
                close={closeDeleteTaskPopup}
                deleteTask={handleDeleteTask}
                teak={task}
              />
            )}
          </FeedItem>
        ))}
      </Feed> */}

      <div className="grid grid-cols-12 w-full bg-gray-800">
        <div
          className={` ${
            membersMobile
              ? "-translate-x-[90%]   left-0 rounded-tr-xl"
              : "left-0"
          }  ${
            mobileSidebarState
              ? "md:translate-x-[60%]  translate-x-[90%]  right-0 rounded-tl-xl"
              : "right-0"
          }  z-40  border-l-gray-600 w-screen  transition ease-in-out cursor-pointer duration-300 h-12  col-span-12 md:col-span-10  flex items-center text-gray-200 bg-gray-700 text-lg`}
        >
          <div className="w-full relative h-full flex shadow-lg items-center col-span-12 md:col-span-10 md:pl-5 md:pr-8">
            <div className="hidden md:block border-r font-semibold border-r-gray-500 pr-4">
              {team?.name} Tasks
            </div>
            <div
              className="flex items-center space-x-3 px-4 py-1 mx-4 text-white bg-gray-800 group  rounded hover:bg-gray-900 transition ease-in-out cursor-pointer duration-200"
              onClick={handleOpenCreateTask}
            >
              <div className="rounded-full w-7 h-7  group-hover:bg-gray-800 transition ease-in-out duration-200 bg-gray-900 flex items-center justify-center ">
                <AddIcon />
              </div>
              <div className="hidden md:text-sm">Create Task</div>
            </div>

            {tabs.map((tab) => (
              <div
                key={tab.id}
                onClick={() => tabClick(tab)}
                className={`text-sm cursor-pointer py-2 px-3 hover:bg-gray-900 transition ease-in-out duration-200 rounded mr-2 ${
                  tab.active && "bg-gray-900  "
                }`}
              >
                {tab.label}
              </div>
            ))}
            <div className="absolute right-5 md:hidden">
              <svg
                onClick={() => setMembersMobile(true)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div
          className={`bg-gray-700 col-span-12 md:col-span-10 overflow-y-scroll no-scrollbar h-screen relative ${
            membersMobile ? "-translate-x-[90%]  left-0" : "left-0"
          } ${
            mobileSidebarState ? "translate-x-[90%]  right-0" : "right-0"
          }  col-span-12 md:col-span-8 lg:col-span-8 xl:col-span-9 2xl:col-span-10  border-l-gray-600 h-screen transition ease-in-out cursor-pointer duration-300`}
        >
          {createTaskPopup && (
            <form className="relative p-5 bg-gray-800 border-l border-l-gray-700">
              <div
                onClick={handleCloseCreateTaskPopup}
                className="absolute right-5 top-5 mb-5 flex justify-end text-gray-200 bg-gray-900 p-2 rounded-full hover:text-green-500 transition ease-in-out cursor-pointer duration-200"
              >
                <XIcon />
              </div>
              <div className="flex flex-col space-y-5">
                <div>
                  <input
                    value={taskNameInput}
                    onChange={handleTaskNameInputChange}
                    placeholder="Task Name"
                    className="w-1/3 py-2 px-3 bg-gray-700 text-gray-200 rounded-lg outline-none"
                    type="text"
                  />
                  {taskNameInputError && (
                    <div className="text-red-500">{taskNameInputError}</div>
                  )}
                </div>
                <div>
                  <textarea
                    className="p-3 w-full bg-gray-700 text-gray-200  rounded-lg outline-none"
                    placeholder="What task needs to be worked on?"
                    value={taskInput}
                    onChange={handleTaskInputChange}
                    type="text"
                  />
                  {taskInputError && (
                    <div className="text-red-500">{taskInputError}</div>
                  )}
                </div>

                <div className="w-full rounded-lg border border-gray-700">
                  <div
                    onClick={() => setAssignUsersPopup(true)}
                    className="py-2 px-4 text-gray-200 flex items-center space-x-3 cursor-pointer"
                  >
                    <div>
                      <UsersIcon />
                    </div>{" "}
                    <div>Assign Members</div>
                    <div className="flex items-center space-x-2">
                      <AvatarIcon />
                      <AvatarIcon />
                      <AvatarIcon />
                      <AvatarIcon />
                    </div>
                  </div>
                  {assignUsersPopup && (
                    <AssignUsersDropdown
                      members={team.members}
                      assignedUsers={assignedUsers}
                      unassignUser={unassignUser}
                      assignUser={assignUser}
                      error={assignMembersError}
                    />
                  )}
                </div>

                <button
                  className="py-2 bg-green-700 text-gray-200 rounded-lg hover:bg-green-800 transition ease-in-out cursor-pointer duration-200"
                  onClick={taskToEdit ? handleEditTask : handleCreateTask}
                >
                  {taskToEdit ? "Finish" : "Create Task"}
                </button>
              </div>
            </form>
          )}
          {deleteTaskPopup && (
            <DeleteTaskPopup
              close={closeDeleteTaskPopup}
              deleteTask={handleDeleteTask}
              task={taskToDelete}
            />
          )}
          <div>
            {tasks.length === 0 ? (
              <div className="flex mt-64 justify-center h-screen">
                <div className="flex flex-col space-y-6">
                  <div className="text-3xl text-white">
                    Create a task and assign Team Members
                  </div>
                  <div
                    onClick={handleOpenCreateTask}
                    className="flex items-center justify-center py-2 text-white border border-gray-600 cursor-pointer"
                  >
                    Create Task
                  </div>
                </div>
              </div>
            ) : activeTab && activeTab.label === "All" ? (
              tasks.map((task) => (
                <Task
                  key={task.id}
                  task={task}
                  hover={hover}
                  hideMore={hideMore}
                  showMore={showMore}
                  inputEl={inputEl}
                  variation="all"
                  completeTask={handleCompleteTask}
                  openEditTask={handleOpenEditTask}
                  openDeleteTask={openDeleteTaskPopup}
                />
              ))
            ) : activeTab && activeTab.label === "Assigned" ? (
              myTasks.map((task) => (
                <Task
                  key={task.id}
                  task={task}
                  hover={hover}
                  hideMore={hideMore}
                  showMore={showMore}
                  inputEl={inputEl}
                  variation="assigned"
                  completeTask={handleCompleteTask}
                  openEditTask={handleOpenEditTask}
                  openDeleteTask={openDeleteTaskPopup}
                />
              ))
            ) : (
              completedTasks.map((task) => (
                <Task
                  key={task.id}
                  task={task}
                  hover={hover}
                  hideMore={hideMore}
                  showMore={showMore}
                  inputEl={inputEl}
                  variation="completed"
                  completeTask={handleCompleteTask}
                  openEditTask={handleOpenEditTask}
                  openDeleteTask={openDeleteTaskPopup}
                />
              ))
            )}
          </div>
        </div>
        <div
          className={`hidden border-l border-l-gray-600 h-screen md:block md:col-span-4 lg:col-span-4 xl:col-span-3 2xl:col-span-2 transition ease-in-out  duration-300 ${
            mobileSidebarState ? "translate-x-[90%]  right-0 " : "right-0"
          } `}
        >
          <Members team={team} removeMember={handleRemoveMember} type="chat" />
        </div>

        <div
          className={` md:hidden  absolute ${
            !membersMobile ? "translate-x-[100%] w-[90%] right-0" : "right-0"
          }  w-[90%] z-40  h-[calc(100%-64px)] transition  ease-in-out cursor-pointer duration-300 `}
        >
          <div className=" ml-3 h-full ">
            <Members
              team={team}
              removeMember={handleRemoveMember}
              type="chat"
              hideMembers={() => setMembersMobile(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const MoreIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5  text-gray-400"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
      />
    </svg>
  );
};

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const EditIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4  text-gray-400"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
      />
    </svg>
  );
};

const TrashIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4  text-gray-400"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
      />
    </svg>
  );
};
const UsersIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
      />
    </svg>
  );
};

const AvatarIcon = () => {
  return (
    <div
      className={`rounded-full w-4 h-4 flex-shrink-0 flex items-center justify-center bg-red-500`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={"w-3 h-3 text-white"}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    </div>
  );
};

const AddIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
};

const CheckIcon = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={`w-5 h-5 text-${color ? color : "gray"}-400`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 12.75l6 6 9-13.5"
    />
  </svg>
);

export default Tasks;

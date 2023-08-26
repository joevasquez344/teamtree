import React from "react";

const Task = ({ task, hover, hideMore, showMore, inputEl, variation, completeTask, openEditTask, openDeleteTask }) => {
  return (
    <div
      key={task.id}
      onMouseOver={() => showMore(task.id)}
      onMouseLeave={hideMore}
      className={`relative hover:bg-gray-900 text-gray-200 p-5 flex items-center space-between border-b border-b-gray-600 transition ease-in-out cursor-pointer duration-200 ${
        inputEl === task.id && "bg-gray-900"
      } `}
    >
      <div className="w-full">
        <div className="flex items-center space-x-3 mb-1">
          <div className="font-semibold text-lg text-gray-200">
            {task.taskName}
          </div>
          <div className="flex items-center space-x-2">
            <AvatarIcon />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-gray-300">{task.taskText}</div>
          <div
            className={`${
              task.status === "tasked"
                ? "hidden"
                : task.status === "in progress"
                ? "text-yellow-500"
                : task.status === "complete"
                ? "text-green-500"
                : "text-gray-200"
            } font-semibold cursor-pointer`}
          >
            {task.status === "complete" && variation !== "completed" && (
              <div>
                <CheckIcon color="green" size="9" />
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className={`${
          hover !== task.id && "hidden"
        } flex items-center  rounded-md  absolute right-3 top-1  border border-black border-opacity-30 bg-gray-800 shadow-md  transition ease-in-out duration-200`}
      >
        <div
          onClick={() => completeTask(task.id)}
          className={`${
            task.status === "complete"
              ? "hidden"
              : "hover:bg-gray-700 h-6 flex items-center justify-center  rounded-tl-md rounded-bl-md  px-2 py-4 transition ease-in-out duration-200 cursor-pointer"
          }`}
        >
          <CheckIcon />
        </div>
        <div
          onClick={() => openEditTask(task)}
          className={`${
            task.status === "complete"
              ? "hidden"
              : "hover:bg-gray-700 h-6 flex items-center justify-center  rounded-tl-md rounded-bl-md  px-2 py-4 transition ease-in-out duration-200 cursor-pointer"
          }`}
        >
          <EditIcon />
        </div>
        <div
          onClick={() => openDeleteTask(task)}
          className="hover:bg-gray-700 transition ease-in-out px-1 py-2 duration-200 cursor-pointer "
        >
          <TrashIcon />
        </div>
        <div className="hover:bg-gray-700 transition ease-in-out px-1 py-2 duration-200 cursor-pointer rounded-tr-md rounded-br-md">
          <MoreIcon />
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

export default Task;

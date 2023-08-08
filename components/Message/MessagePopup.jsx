import React from "react";
import { useAuth } from "../../context/auth/AuthContext";

const MessagePopup = ({
  message,
  hover,
  reply,
  handleFocusInput,
  handleOpenDeletePrompt,
}) => {
  const { authUser } = useAuth();

  if (message.user.id === authUser.id) {
    return (
      <div
        className={`${
          hover !== message.id && "hidden"
        } flex items-center  rounded-md  absolute -right-3 -top-6  border border-black border-opacity-30 bg-gray-800 shadow-md   transition ease-in-out duration-200`}
      >
        <div
          onClick={() => reply(message)}
          className="hover:bg-gray-700 h-6 flex items-center justify-center rounded-tl-md rounded-bl-md px-2 py-4 transition ease-in-out duration-200 cursor-pointer"
        >
          <ReplyIcon />
        </div>
        <div
          onClick={() => handleFocusInput(message.id, message)}
          className="hover:bg-gray-700 h-6 flex items-center justify-center  px-2 py-4 transition ease-in-out duration-200 cursor-pointer"
        >
          <EditIcon />
        </div>
        <div
          onClick={() => handleOpenDeletePrompt(message)}
          className="hover:bg-gray-700 transition ease-in-out px-1 py-2 duration-200 cursor-pointer rounded-tr-md rounded-br-md"
        >
          <TrashIcon />
        </div>
      </div>
    );
  } else {
    return (
      <div
      className={`${
        hover !== message.id && "hidden"
      } flex items-center  rounded-md  absolute -right-3 -top-6  border border-black border-opacity-30 bg-gray-800 shadow-md   transition ease-in-out duration-200`}
      >
        <div
          onClick={() => reply(message)}
          className="hover:bg-gray-700 h-6 flex items-center justify-center rounded-tl-md rounded-bl-md px-2 py-5 transition ease-in-out duration-200 cursor-pointer"
        >
          <ReplyIcon />
        </div>
     
        <div
          // onClick={() => handleOpenDeletePrompt(message.id)}
          className="hover:bg-gray-700 transition ease-in-out px-1 py-2 duration-200 cursor-pointer rounded-tr-md rounded-br-md"
        >
          <MoreIcon />
        </div>
      </div>
    );
  }
};

const MoreIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6  text-gray-400"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
      />
    </svg>
  );
};

const ReplyIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4 text-gray-400"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
      />
    </svg>
  );
};

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

export default MessagePopup;

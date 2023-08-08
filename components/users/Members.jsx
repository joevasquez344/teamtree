import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import usePopupList from "../../hooks/usePopupList";
import Popup from "../Popup";
import { useAuth } from "../../context/auth/AuthContext";
import { Tooltip } from "@material-tailwind/react";

const Members = ({ team, type, removeMember, hideMembers }) => {
  const router = useRouter();
  const { authUser } = useAuth();
  const { popup, openPopup, closePopup, inputEl } = usePopupList();
  // const [inputEl, setInputEl] = useState(-1);
  console.log("Team: ", team);
  const handleChat = (username) => {
    if (type && type === "chat") {
      router.push(`/teams/${router.query.teamId}/chat/${username}`);

      return;
    }

    router.push(`/teams/${router.query.teamId}/members/${username}`);
  };

  const produceDate = (member) => {
    if (member === null) {
      return "";
    } else {
      return new Date(member?.joined?.seconds * 1000)
        .toString()
        .split(" ")
        .filter((item, idx) => idx < 4 && idx > 0)
        .map((item, idx) => (idx === 0 ? item + " " : item + ", "))
        .join("")
        .split(",")
        .map((item, idx) => (idx === 0 ? item + "," : item))
        .join("");
    }
  };

  return (
    <div className="h-full rounded-tl-xl bg-gray-700 py-7">
      <div className="flex items-center justify-between  px-4 ">
        <div className="flex items-center text-xs text-gray-300  space-x-2">
          <div>MEMBERS</div> <div>-</div> <div>{team.members?.length}</div>
        </div>
        <div className="md:hidden">
          <svg
            onClick={hideMembers}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      {team.members?.map((member) => (
        <div
          key={member.id}
          // onClick={() => handleChat(member.username)}
          className="relative flex items-center justify-between py-2 text-sm px-4 hover:bg-gray-700 transition ease-in-out cursor-pointer duration-200"
        >
          {member.id === inputEl && (
            <Popup
              closePopup={closePopup}
              popup={popup}
              styles="-left-96 bg-gray-800 rounded-lg w-96 shadow-lg"
            >
              <div className="relative">
                <div className="absolute right-5 -bottom-11 flex items-center space-x-3">
                  {authUser.id !== member.id && (
                    <Tooltip
                      placement="top"
                      content="Direct Message"
                      animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0, y: 1 },
                      }}
                      className="hidden sm:flex bg-gray-900 rounded  px-2 py-1 text-xs text-white  z-50"
                    >
                      <div className=" p-2 rounded-full bg-gray-900 cursor-pointer">
                        <div className="text-gray-300">
                          <ChatIcon />
                        </div>
                      </div>
                    </Tooltip>
                  )}
                  {authUser.id === team.creatorId && (
                    <Tooltip
                      placement="top"
                      content={
                        authUser.id === member.id
                          ? "Leave Team"
                          : `Remove ${member.name} from Team`
                      }
                      animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0, y: 1 },
                      }}
                      className="hidden sm:flex bg-gray-900 rounded  px-2 py-1 text-xs text-white  z-50"
                    >
                      <div
                        onClick={() => removeMember(member.id)}
                        className="p-2 rounded-full bg-gray-900 cursor-pointer"
                      >
                        <div className="text-red-500">
                          <RemoveUserIcon />
                        </div>
                      </div>
                    </Tooltip>
                  )}
                </div>
                <div className="h-14 bg-blue-400 rounded-tl-lg rounded-tr-lg"></div>
                <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gray-800 absolute left-3 top-3">
                  {/* <div className="w-20 h-20 rounded-full bg-blue-400 z-40"></div> */}
                  <img
                    className="h-20 w-20 rounded-full "
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
              </div>
              <div className="bg-gray-800 mt-16 px-5 pb-5  rounded-bl-lg rounded-br-lg">
                <div className="bg-gray-900 rounded-lg p-3">
                  <div className="border-b border-b-gray-700 pb-3">
                    <div className="text-white text-lg font-bold">
                      {member.name}
                    </div>
                    <div className="text-white font-semibold">
                      @{member.username}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-white uppercase text-xs py-3 font-bold">
                      Member Since
                    </div>
                    <div className="text-white">-</div>
                    <div className="text-white">{produceDate(member)}</div>
                  </div>
                  {authUser.id !== member.id && (
                    <form>
                      <input
                        className="bg-gray-900 text-white border border-gray-700 rounded w-full p-2 mt-8 outline-none"
                        type="text"
                        placeholder={`Message @${member.username}`}
                      />
                    </form>
                  )}
                </div>
              </div>
              {/* <div className="flex flex-col space-y-4 text-white">
                {authUser.id !== member.id && <div>Chat</div>}
                {authUser.id === team.creatorId &&
                  authUser.id !== member.id && (
                    <div onClick={() => removeMember(member.id)}>
                      Remove Member
                    </div>
                  )}{" "}
              </div> */}
            </Popup>
          )}

          <div
            className="flex items-center w-full hover:bg-gray-600  text-gray-400"
            onClick={() => openPopup(member.id)}
          >
            <img
              className="h-8 w-8 rounded-full mr-3"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="flex flex-col">
              <div className="group-hover:text-blue-400 font-bold mr-1">
                {member.name}
              </div>
              <div className="group-hover:text-blue-400">
                @{member.username}
              </div>
            </div>
          </div>
          {/* <div onClick={() => openPopup(member.id)}>
            <MoreIcon />
          </div> */}
        </div>
      ))}
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

const ChatIcon = () => (
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
      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
    />
  </svg>
);

const RemoveUserIcon = () => (
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
      d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
    />
  </svg>
);

export default Members;

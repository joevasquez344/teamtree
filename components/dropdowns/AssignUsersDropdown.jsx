import React from "react";
import CheckIcon from "../icons/CheckIcon";

const AssignUsersDropdown = ({
  members,
  assignedUsers,
  unassignUser,
  assignUser,
  error,
}) => {
  const borderBottom = members.length > 1 && "border-b border-b-gray-800";
  return (
    <div className="bg-gray-900 px-8 py-4 rounded-br-lg rounded-bl-lg  border-t-gray-600">
      {members
        .filter((user) => user.username)
        .map((member, idx) => (
          <div
            onClick={
              assignedUsers.find((user) => user.id === member.id)
                ? () => unassignUser(member)
                : () => assignUser(member)
            }
            key={member.id}
            className={`py-2 px-5 text-sm flex items-center justify-between bg-gray-900 ${borderBottom} ${
              members.length === idx + 1 && "border-none"
            }   hover:bg-black transition ease-in-out cursor-pointer duration-200`}
          >
            <div className="flex items-center text-gray-400">
              <img
                className=" mr-3 h-6 w-6rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div className="mr-1 font-semibold group-hover:text-blue-400">
                {member.name}
              </div>
              <div className="group-hover:text-blue-400">{member.username}</div>
            </div>
            {assignedUsers.find((user) => user.id === member.id) && (
              <CheckIcon />
            )}
          </div>
        ))}
      {error && assignedUsers.length === 0 ? (
        <div className="text-red-500">{error}</div>
      ) : null}
    </div>
  );
};

export default AssignUsersDropdown;

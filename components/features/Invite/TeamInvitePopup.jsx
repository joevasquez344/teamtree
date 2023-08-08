import React, { useState, useEffect } from "react";
import { getTeamMembers } from "../../../utils/api/teams";
import AddButton from "../../buttons/AddButton";
import Button from "../../buttons/Button";
import {
  fetchUsersWorkedWith,
  getAppUsers,
  getUserByEmail,
} from "../../../utils/api/users";
import { useAuth } from "../../../context/auth/AuthContext";
import AddUserIcon from "../../icons/AddUserIcon";
import { sendTeamInvites } from "../../../utils/api/invites";

const TeamInvitePopup = ({ team, openPopup, closePopup, popup }) => {
  const [members, setMembers] = useState([]);
  const [usersWorkedWith, setUsersWorkedWith] = useState([]);
  const [inviteList, setInviteList] = useState([]);
  const { authUser } = useAuth();
  const [sentInvites, setSentInvites] = useState([]);
  const [searchedUser, setSearchedUser] = useState(null);
  const [searchedUserError, setSearchedUserError] = useState(null);

  const [searchInput, setSearchInput] = useState("");

  const getUsersWorkedWith = async () => {
    const users = await fetchUsersWorkedWith(team.id, authUser.id);

    setUsersWorkedWith(users);
  };

  const handleAddUser = (user) => {
    setInviteList([...inviteList, user]);
  };

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.currentTarget.name.toLowerCase()]: e.currentTarget.value,
    });
  };

  const validateForm = () => {
    if (form.name.length === 0) {
      return false;
    } else {
      if (form.role === "Create Role" && form.custom.length === 0) {
        return false;
      }
    }

    return true;
  };

  const searchUser = async (email) => {
    const inInviteList = inviteList.find((user) => user.email === email);
    const isAuthEmail = email === authUser.email;
    if (inInviteList) {
      setSearchedUserError("User already in invite list.");
      return;
    }

    if (isAuthEmail) {
      setSearchedUserError("Cannot search your own email.");
      return;
    }

    const response = await getUserByEmail(email);

    if (response.error === true && response.errorCode === 1001) {
      setSearchedUserError(response.payload);
    }
    if (response.error === false) {
      const isTeamMember = team.members.find(
        (member) => member.id === response.payload.id
      );
      if (isTeamMember) {
        setSearchedUserError("User is already a member of this Team.");
        return;
      }
      setInviteList([response.payload, ...inviteList]);
      setSearchInput("");
      setSearchedUserError(null);
    }
  };

  const removeUserFromInviteList = (user) => {
    setInviteList(inviteList.filter((u) => u.id !== user.id));
  };

  // const fetchUsersByPosition = async (position) => {
  //   const users = await getUsersByPosition(position);
  //   setSuggestedUsers(users);

  //   return users;
  // };

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
    // const searchResults = allUsers.filter(
    //   (user) =>
    //     user.username.toLowerCase().match(e.target.value.toLowerCase()) ||
    //     user.username.toUpperCase().match(e.target.value.toUpperCase()) ||
    //     user.name.toUpperCase().match(e.target.value.toUpperCase()) ||
    //     user.name.toUpperCase().match(e.target.value.toUpperCase())
    // );

    // setSearchedUsers(searchResults);
  };
  const sendInvites = async () => {
    if(inviteList.length === 0) {
      alert("No users in invite list")
      return
    }
    await sendTeamInvites(inviteList, team, authUser.id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendInvites();
  };

  useEffect(() => {
    getUsersWorkedWith();
  }, []);
  return (
    <>
      <div
        onClick={closePopup}
        className="fixed top-0 right-0 left-0 bottom-0 opacity-0 z-50 bg-black cursor-default"
      />

      <div className="absolute w-[500px] z-50 shadow-lg p-3 bg-gray-800 left-[425px]">
        <div className="flex items-center justify-center mb-6 space-x-3">
          <div className="w-7 h-7 text-white bg-gray-900 flex items-center justify-center rounded-full ">
            <AddUserIcon />
          </div>
          <div className="text-gray-200  text-lg ">Add Team Members</div>{" "}
        </div>

        <div className="mb-8">
          <div className="relative">
            <input
              value={searchInput}
              onChange={handleSearchInput}
              className="bg-gray-700 rounded py-1 px-3 w-full outline-none"
              type="text"
              placeholder="Find User By Email"
            />
            <div
              onClick={() => searchUser(searchInput)}
              className="absolute right-0 top-0 bg-green-500 text-white font-semibold h-full flex items-center justify-center px-3 cursor-pointer"
            >
              Find
            </div>
          </div>
          <div className="text-red-500 mt-2"> {searchedUserError}</div>

          {/* <CreateTeamForm /> */}
          <div className="text-gray-200 mt-5 mb-2">
            People previously worked with
          </div>
          {usersWorkedWith.map((member) => (
            <div onClick={() => handleAddUser(member)} key={member.id}>
              <div className="flex items-center justify-between rounded group p-2 hover:bg-gray-700 transition ease-in-out cursor-pointer duration-200">
                <div className="flex items-center space-x-1 text-gray-300">
                  <img
                    className="h-6 w-6 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="font-semibold">{member.name}</div>
                  <div className="">@{member.username}</div>
                </div>
              </div>
              {/* <Button text={members.name} theme="blue" /> */}
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 bg-gray-700 pb-3 mb-3">
          <div className="text-gray-200  ">Invite List</div>
          {inviteList.map((user) => (
            <div className="flex items-center justify-between rounded  p-2">
              <div className="flex items-center space-x-1 text-gray-400">
                <img
                  className="h-6 w-6 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div className="group-hover:text-blue-400 font-semibold">
                  {user.name}
                </div>
                <div className="group-hover:text-blue-400">
                  @{user.username}
                </div>
              </div>
              <div
                onClick={() => removeUserFromInviteList(user)}
                className="w-8 h-8 flex items-center justify-center group bg-gray-800 rounded-full transition ease-in-out cursor-pointer duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </div>

              {/* <div className="text-sm bg-gray-100 text-gray-400 py-1 px-3">
                     Connect
                    </div> */}
            </div>
          ))}
          <div className="flex flex-col space-y-4 mt-10 mb-2">
            <button
              onClick={handleSubmit}
              className="bg-green-500 text-white rounded font-bold py-2 px-4 p-2 hover:bg-green-600 transition ease-in-out cursor-pointer duration-200"
              type="button"
            >
              {inviteList.length === 0 ? "Send Invite" : "Send Invites"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamInvitePopup;

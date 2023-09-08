import React, { useEffect, useState } from "react";
import { useTeams } from "../../../context/TeamsContext";
import TeamInvitePopup from "../../features/Invite/TeamInvitePopup";
import { useRouter } from "next/router";

const MobileSidebar = ({ closeSidebar }) => {
  const router = useRouter();
  const { teamLoading, team, teams, groups, setTeamsLoading } = useTeams();

  const [inviteMembersPopup, setInviteMembersPopup] = useState(false);

  const [teamTabs, setTeamTabs] = useState([
    {
      id: 1,
      name: "Tasks",
      active: true,
      route: `/teams/${team?.id}/tasks`,
      IconComponent: TaskIcon,
    },
    {
      id: 2,
      name: "Chat",
      active: false,
      route: `/teams/${team?.id}/chat`,
      IconComponent: ChatIcon,
    },
  ]);

  // const getTeam = async () => {
  //   setCreateGroupPopup(false);
  //   const payload = await getTeamById(router.query.teamId, authUser.id);

  //   console.log("Team uhhh: ", payload);
  //   if (payload === false) {
  //     setGroupsLoading(false);
  //     setTeam(null);
  //     setTeamHeader("Select Team");
  //     setTeamLoading(false);
  //     return;
  //   }
  //   getGroups();
  //   setTeam(payload);
  //   setTeamHeader(payload.name);
  //   setTeamLoading(false);
  // };

  // const getGroups = async () => {
  //   const groups = await getTeamGroups(router.query.teamId);

  //   setGroups(groups);
  //   setGroupsLoading(false);
  // };

  const openInvitePopup = () => setInviteMembersPopup(true);
  const closeInvitePopup = () => setInviteMembersPopup(false);

  const handleSelectTeam = (teamId) => {
    router.push(`/teams/${teamId}/chat`);
    closeSidebar();
  };

  const handleTabClick = (tabClicked) => {
    const activeTab = teamTabs.find((tab) => tab.active);
    const updatedTabs = teamTabs.map((tab) => {
      if (tab.id === activeTab?.id) {
        tab.active = false;
      }
      if (tab.id === tabClicked.id) {
        tab.active = true;
        if (tab.route) {
          router.push(
            `/teams/${team?.id}/${
              tabClicked.name === "Tasks" ? "tasks" : "chat"
            }`
          );
        }
      }

      return tab;
    });
    setTeamTabs(updatedTabs);
    closeSidebar();
  };

  const handleCreateTeamRoute = () => router.push("/createteam");

  useEffect(() => {
    const activeTab = teamTabs.find((tab) => tab.active);
    const updatedTabs = teamTabs.map((tab) => {
      if (tab.id === activeTab?.id) {
        tab.active = false;
      }
      if (router.route.split("/")[3] === "tasks") {
        if (tab.id === 1) {
          tab.active = true;
        }
      }
      if (router.route.split("/")[3] === "chat") {
        if (tab.id === 2) {
          tab.active = true;
        }
      }

      return tab;
    });
    setTeamTabs(updatedTabs);
  }, [router.query]);

  return (
    <div className="bg-gray-800 pr-3">
      <div className="flex bg-gray-800 pl-4">
        {/* <div className="flex bg-gray-800 flex-col px-3 ">
          {" "}
          <div
            onClick={handleCreateTeamRoute}
            className="w-10 h-10 mb-3 flex items-center justify-center rounded-full bg-gray-800 border border-gray-700"
          >
            <PlusIcon />
          </div>
          {teams?.map((team) => (
            // <Tooltip
            //   placement="right"
            //   content={team.name}
            //   animate={{
            //     mount: { scale: 1, y: 0 },
            //     unmount: { scale: 0, y: 1 },
            //   }}
            //   className="hidden sm:flex px-3 py-2  rounded-md text-xs text-blue-400 font-bold bg-white z-50"
            // >
            <div
              // onClick={() => router.push(`/teams/${team.id}`)}
              key={team.id}
              className="w-full mb-3"
            >
              {team.avatar ? (
                <img
                  onClick={() => handleSelectTeam(team.id)}
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              ) : (
                <div
                  onClick={() => handleSelectTeam(team.id)}
                  className="bg-blue-400 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer"
                >
                  <div className="text-white font-bold text-lg">
                    {team.name.split("")[0].toUpperCase()}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div> */}
        <div className=" relative bg-gray-700 w-full  flex flex-col  h-[calc(100vh-180px)] rounded-xl text-gray-200  ">
          <div className=" flex items-center justify-between py-2 px-3">
            <div className="font-semibold"> {team?.name}</div>
            <div
              className="bg-gray-800 rounded-full w-7 h-7 flex items-center justify-center"
              onClick={openInvitePopup}
            >
              <AddUserIcon />
            </div>
            {inviteMembersPopup && (
              <TeamInvitePopup
                team={team}
                openPopup={openInvitePopup}
                closePopup={closeInvitePopup}
                inviteMembersPopup={inviteMembersPopup}
              />
            )}
          </div>
    

          <div className="absolute bottom-0 w-full flex flex-col space-y-3 mb-3">
            <div className="text-sm  mx-3 rounded-lg p-3 mb-3">
              <div className="uppercase text-xs mb-2">Direct Messages</div>
              <div className=" flex flex-col s max-h-64 space-y-1  overflow-y-scroll ">
                {team?.members?.map((member) => (
                  <div className="flex items-center py-1 space-x-2" key={member.id}>
                    {" "}
                    <img
                      className="h-6 w-6 rounded-full "
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <div className="flex items-center space-x-1">
                      <div className="text-sm font-semibold">{member.name}</div>
                      <div className="text-xs text-gray-400">
                        @{member.username}
                      </div>
                    </div>
                  </div>
                ))}
                {team?.members?.map((member) => (
                  <div className="flex items-center py-1 space-x-2" key={member.id}>
                    {" "}
                    <img
                      className="h-6 w-6 rounded-full "
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <div className="flex items-center space-x-1">
                      <div className="text-sm font-semibold">{member.name}</div>
                      <div className="text-xs text-gray-400">
                        @{member.username}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {teamTabs.map((tab) => (
              <div
                key={tab.id}
                onClick={() => handleTabClick(tab)}
                className="py-2 px-4 mx-2 flex items-center justify-between bg-gray-900 rounded-full hover:bg-black transition ease-in-out cursor-pointer duration-200"
              >
                {" "}
                <div className="flex items-center space-x-3">
                  <tab.IconComponent />
                  <div>{tab.name}</div>{" "}
                </div>
                {tab.active && (
                  <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* <div className=" relative flex flex-col h-screen">
        {teams.map((team) => (
          <div
            key={team.id}
            className="flex items-center space-x-3 py-3 border-b border-b-gray-700"
          >
            <div className="bg-green-500 h-8 w-8 flex items-center justify-center text-white font-bold rounded-full">
              {team?.name?.split("")[0].toUpperCase()}
            </div>
            <div className="text-gray-300">{team.name}</div>
          </div>
        ))}

        <div className="flex items-center  border-t border-t-gray-600 left-0 right-0 pt-3 px-3 space-x-3 absolute bottom-3">
          <div className="bg-gray-700 h-6 w-6 flex items-center justify-center text-white font-bold rounded-full">
            <PlusIcon />
          </div>
          <div className="text-gray-300">Create Team</div>
        </div>
      </div> */}
      </div>
    </div>
  );
};

const TaskIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4 "
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
      />
    </svg>
  );
};

const ChatIcon = () => {
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
        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
      />
    </svg>
  );
};

const AddUserIcon = () => (
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
      d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
    />
  </svg>
);

const PlusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
};

export default MobileSidebar;

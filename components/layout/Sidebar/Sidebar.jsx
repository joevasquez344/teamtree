import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/auth/AuthContext";
import AddButton from "../../buttons/AddButton";
import CreateTeamForm from "../../../components/forms/CreateTeamForm";
import Groups from "./Groups";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Button from "../../buttons/Button";
import AddUserIcon from "../../icons/AddUserIcon";
import CollapseButton from "../../buttons/CollapseButton.tsx";
import ExpandButton from "../../buttons/ExpandButton";
import ProtectedComponent from "../../ProtectedComponent";
import { getTeamById } from "../../../utils/api/teams";
import { getTeamGroups } from "../../../utils/api/group";
import useCreateTeam from "../../../hooks/useCreateTeam2";
import useCreateGroup from "../../../hooks/useCreateGroup";
import CreateGroupForm from "../../forms/CreateGroupForm";
import Members from "../../users/Members";
import TrashButton from "../../buttons/TrashButton";
import TeamInvitePopup from "../../features/Invite/TeamInvitePopup";

const Sidebar = ({ teams }) => {
  // const {
  //   teams,
  //   team,
  //   groups,
  //   getTeams,
  //   getGroups,
  //   teamsLoading,
  //   groupsLoading,
  // } = useTeams();
  const router = useRouter();
  const { authUser } = useAuth();
  const [teamHeader, setTeamHeader] = useState(null);
  const [popup, setPopup] = useState(false);
  const [teamsPopup, setTeamsPopup] = useState(false);
  const [inviteMembersPopup, setInviteMembersPopup] = useState(false);
  const closeInviteMembersPopup = () => setInviteMembersPopup(false);
  const openInviteMemebersPopup = () => setInviteMembersPopup(true);

  const { createTeamPopup, setCreateTeamPopup } = useCreateTeam();
  const { groups, setGroups, createGroupPopup, setCreateGroupPopup } =
    useCreateGroup();
  const [team, setTeam] = useState({});
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

  const [teamLoading, setTeamLoading] = useState(true);
  const [groupsLoading, setGroupsLoading] = useState(true);

  const getTeam = async () => {
    setCreateGroupPopup(false);
    const payload = await getTeamById(router.query.teamId, authUser.id);

    console.log("Team uhhh: ", payload);
    if (payload === false) {
      setGroupsLoading(false);
      setTeam(null);
      setTeamHeader("Select Team");
      setTeamLoading(false);
      return;
    }
    getGroups();
    setTeam(payload);
    setTeamHeader(payload.name);
    setTeamLoading(false);
  };

  const getGroups = async () => {
    const groups = await getTeamGroups(router.query.teamId);

    setGroups(groups);
    setGroupsLoading(false);
  };

  const routeTeam = (teamId) => {
    router.push(`/teams/${teamId}/tasks`);
    setTeamsPopup(false);
  };
  const toggleTeamsDropdown = () => {
    if (teamsPopup) setTeamsPopup(false);
    else setTeamsPopup(true);
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
  };
  console.log("Router: ", router.route.split("/"));
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

  // Intended Functionality working but severly needs code rework to not keep refeching everytime the team & group Ids change
  // especially when creating a new team or group routes to the new created Id (refetches because of dependencies in useEffect)
  useEffect(() => {
    const fetchData = async () => {
      getTeam();
      setCreateTeamPopup(false);
      setTeamsPopup(false);
    };

    fetchData();
  }, [router.query.teamId, router.query.groupId]);

  return (
    <ProtectedComponent>
      <div
        //  style={{backgroundColor: "#23272a"}}
        className=" bg-gray-800 flex flex-col w-full h-screen  "
      >
        {groupsLoading ? (
          <div className="mx-5">
            {" "}
            <Skeleton
              className=" mt-3 h-6"
              baseColor="rgb(55 65 81)"
              highlightColor="rgb(55 65 81)"
              count={1}
              // height="16px"
              enableAnimation={true}
              direction="rtl"
              duration={1}
            />
          </div>
        ) : (
          // <div
          //   onClick={toggleTeamsDropdown}
          //   className="relative text-white font-semibold h-12 px-3 bg-gray-800 py-1 mb-3 shadow-md hover:bg-gray-900 flex items-center justify-between transition ease-in-out cursor-pointer duration-200"
          // >
          //   {teamHeader}
          //   <div className="w-7 h-7 bg-gray-700 flex items-center justify-center rounded-full ">
          //     <AddUserIcon />
          //   </div>

          //   {/* {teamsPopup ? (
          //       <CollapseButton height="4" width="4" />
          //     ) : (
          //       <ExpandButton height="4" width="4" />
          //     )} */}
          // </div>
          <div className="relative border-t border-t-gray-700">
            <div className="shadow-lg h-12 mb-3 flex items-center justify-between cursor-pointer pr-4 relative">
              <div
                onClick={toggleTeamsDropdown}
                className=" group h-full w-full"
              >
                <div className="font-semibold text-gray-100 flex items-center pl-3  group-hover:bg-gray-900 transition ease-in-out cursor-pointer duration-200 h-full">
                  {teamHeader}
                </div>
              </div>
              {/* <Tooltip
                  placement="left"
                  content={
                    profile.id === authUser.id
                      ? "Leave Group"
                      : `Remove ${profile.name} from group`
                  }
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 1 },
                  }}
                  className="hidden sm:flex px-3 py-2 rounded-md text-xs text-red-400 font-bold bg-transparent z-50"
                > */}
              <div className="z-40  rounded-l-full bg-gray-800 group-hover:bg-gray-900 px-3 absolute right-0 h-full flex items-center space-x-3">
                <div
                  onClick={openInviteMemebersPopup}
                  className="w-7 h-7 text-white bg-gray-900 flex items-center justify-center rounded-full "
                >
                  <AddUserIcon />
                </div>

                <div className=" h-full     flex items-center">
                  <div className="h-8 w-8 rounded-full bg-gray-900 flex justify-center items-center cursor-pointer">
                    <TrashButton />
                  </div>
                </div>
              </div>
              {/* </Tooltip> */}
            </div>
          </div>
        )}
        {inviteMembersPopup && (
          <TeamInvitePopup
            team={team}
            openPopup={openInviteMemebersPopup}
            closePopup={closeInviteMembersPopup}
            popup={inviteMembersPopup}
          />
        )}
        {teamsPopup && (
          <div className="text-sm border-b border-b-gray-600  ">
            <div className="w-full flex flex-col  px-3 pb-5">
              <div className="flex flex-col  group">
                {teams.map((team) => (
                  <div key={team.id} onClick={() => routeTeam(team.id)}>
                    <Button text={team.name} theme="blue" />
                  </div>
                ))}
              </div>
            </div>
            {createTeamPopup && (
              <div
                onClick={() => setCreateTeamPopup(false)}
                className="fixed top-0 right-0 left-0 bottom-0 opacity-0 z-40 bg-black cursor-default"
              />
            )}
            {createTeamPopup && (
              <div className="absolute z-50 shadow-lg  bg-white left-[425px]">
                <CreateTeamForm />
              </div>
            )}
            <div
              onClick={() => setCreateTeamPopup(true)}
              // onClick={handleCreateTeam}
              className="px-3 relative flex items-center group mx-3  py-2 mb-3 space-x-3  hover:bg-green-400 text-white   transition ease-in-out cursor-pointer duration-200"
            >
              <AddButton height="4" width="4" />
              <div className="text-white font-semibold w-3/4 flex justify-between items-center transition ease-in-out cursor-pointer duration-200">
                Create Team
              </div>
            </div>
          </div>
        )}

        <div className="p-3 flex flex-col space-y-3  mb-3 text-white rounded-sm">
          {teamTabs.map((tab) => (
            <div
            key={tab.id}
              onClick={() => handleTabClick(tab)}
              className="py-2 px-4 flex items-center justify-between bg-gray-900 rounded-sm hover:bg-black transition ease-in-out cursor-pointer duration-200"
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

        {team !== null && (
          <>
            {" "}
            <>
              {" "}
              <Groups
                groups={groups}
                groupsLoading={groupsLoading}
                openPopup={() => setCreateGroupPopup(true)}
                team={team}
              />
              {createGroupPopup && (
                <div
                  onClick={() => setCreateGroupPopup(false)}
                  className="fixed top-0 right-0 left-0 bottom-0 z-40"
                ></div>
              )}
              {createGroupPopup && (
                <div className="absolute -right-[500px] bg-white z-50 shadow w-[500px]">
                  <CreateGroupForm team={team} />
                </div>
              )}
            </>
            <div className="">
              <div className="flex items-center relative justify-between pl-3 pr-2 mb-2 py-1 text-white text-sm">
                <div className="font-bold">Direct Messages</div>
                <div className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <div className="px-3">
                  <Members team={team} type="chat" />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </ProtectedComponent>
  );
};

export default Sidebar;

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

import React, { useEffect, useState } from "react";
import { useTeams } from "../../context/TeamsContext";
import { useRouter } from "next/router";
import TeamsHeader from "../teams/TeamsHeader";
import Skeleton from "react-loading-skeleton";
import { TeamsContext } from "../../context/TeamsContext";

const Header = () => {
  const { teamLoading, groupLoading, group, team } = useTeams();
  const router = useRouter();
  const teamId = router.query.teamId;
  const groupId = router.query.groupId;
  const isTeamScreen = teamId && !groupId ? true : false;
  const isGroupScreen = teamId && groupId ? true : false;
console.log('Team Id: ', teamId);
  const handleTeamChatRoute = () => {
    router.push(`/teams/${teamId}/chat`);
  };
  const handleTeamNotesRoute = () => {
    router.push(`/teams/${teamId}/notes`);
  };
  const handleTeamDashboardRoute = () => {
    router.push(`/teams/${teamId}`);
  };
  const handleGroupChatRoute = () => {};
  const handleGroupNotesRoute = () => {};
  const handleGroupDashboardRoute = () => {};

  const [tabs, setTabs] = useState([
    {
      id: 1,
      name: "Dashboard",
      teamRoute: (teamId) => router.push(`/teams/${teamId}`),
      groupRoute: (teamId, groupId) =>
        router.push(`/teams/${teamId}/groups/${groupId}`),
      active: true,
    },
    {
      id: 2,
      name: "Chat",
      teamRoute: (teamId) => router.push(`/teams/${teamId}/chat`),
      groupRoute: (teamId, groupId) =>
        router.push(`/teams/${teamId}/groups/${groupId}/chat`),
      active: false,
    },
    {
      id: 3,
      name: "Notes",
      teamRoute: (teamId) => router.push(`/teams/${teamId}/notes`),
      groupRoute: (teamId, groupId) =>
        router.push(`/teams/${teamId}/groups/${groupId}/notes`),
      active: false,
    },
  ]);

  const handleTabClick = (tabClicked) => {
    const teamId = router.query.teamId;
    const groupId = router.query.groupId;
    const isTeamScreen = teamId && !groupId ? true : false;
    const activeTab = tabs.find((tab) => tab.active === true);

    const updatedTabs = tabs.map((tab) => {
      if (tab.id === activeTab.id) {
        tab.active = false;
      }
      if (tab.id === tabClicked.id) {
        tab.active = true;
      }

      return tab;
    });

    const updatedActiveTab = updatedTabs.find((tab) => tab.active);

    isTeamScreen
      ? updatedActiveTab.teamRoute(teamId)
      : updatedActiveTab.groupRoute(teamId, groupId);

    setTabs(updatedTabs);
  };

  useEffect(() => {
    const chatRoute = router.route.split("/").pop() === "chat" ? true : false;
    const notesRoute = router.route.split("/").pop() === "notes" ? true : false;
    const activeTab = tabs.find((tab) => tab.active === true);

    if (chatRoute) {
      const updatedTabs = tabs.map((tab) => {
        if (tab.id === activeTab.id) {
          tab.active = false;
        }

        if (tab.id === 2) {
          tab.active = true;
        }

        return tab;
      });

      setTabs(updatedTabs);
    }
    if (notesRoute) {
      const updatedTabs = tabs.map((tab) => {
        if (tab.id === activeTab.id) {
          tab.active = false;
        }

        if (tab.id === 3) {
          tab.active = true;
        }

        return tab;
      });

      setTabs(updatedTabs);
    }

    if (!chatRoute && !notesRoute) {
      const updatedTabs = tabs.map((tab) => {
        if (tab.id === activeTab.id) {
          tab.active = false;
        }

        if (tab.id === 1) {
          tab.active = true;
        }

        return tab;
      });
      setTabs(updatedTabs);
    }
  }, [teamId]);

  return (
    <div className=" inline-flex w-full h-12 items-center bg-gray-700 shadow-md font-semibold ">
      <div className="px-6 mx-6 font-bold text-gray-200 text-lg border-r border-r-gray-400">
        <Loader />
        {isTeamScreen ? team?.name : group?.name}
      </div>
      {tabs?.map((tab) => (
        <div
          key={tab?.id}
          onClick={() => handleTabClick(tab)}
          className={`${
            tab?.active
              ? " text-gray-200 bg-gray-900 border-b border-b-green-400"
              : " text-gray-300"
          } hover:bg-gray-900 h-full  px-7 flex items-center justify-center  transition ease-in-out cursor-pointer duration-200`}
        >
          {tab?.name}
        </div>
      ))}
    </div>
  );
};

export default Header;

const Loader = () => {
  const { teamLoading, groupLoading, group, team } = useTeams();
  const router = useRouter();

  const teamId = router.query.teamId;
  const groupId = router.query.groupId;

  const isTeamScreen = teamId && !groupId ? true : false;
  const isGroupScreen = teamId && groupId ? true : false;

  if (isTeamScreen) {
    teamLoading && (
      <Skeleton
        className="h-6"
        baseColor="rgb(31 41 55)"
        count={1}
        width="200px"
        highlightColor="rgb(55 65 81)"
        enableAnimation={true}
        direction="rtl"
        duration={1}
      />
    );
  }

  if (isGroupScreen) {
    groupLoading && (
      <Skeleton
        className="h-6"
        baseColor="rgb(31 41 55)"
        count={1}
        width="200px"
        highlightColor="rgb(55 65 81)"
        enableAnimation={true}
        direction="rtl"
        duration={1}
      />
    );
  }
};

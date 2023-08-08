import React, { useEffect } from "react";
import { useAuth } from "../../../context/auth/AuthContext";
import useCreateTeam from "../../../hooks/useCreateTeam2";
import { getAuthsTeams } from "../../../utils/api/teams";
import MobileSidebar from "./MobileSidebar";
import Sidebar from "./Sidebar";
import { useTeams } from "../../../context/TeamsContext";
import { useRouter } from "next/router";

const SidebarContainer = ({ mobileSidebar }) => {
  const { authUser, authLayout } = useAuth();
  const router = useRouter();
  const { sidebarTeams, setSidebarTeams } = useCreateTeam();
  const { teams, team, groups, getTeams, getTeam } = useTeams();

  // const getTeams = async () => {
  //   const teams = await getAuthsTeams(authUser.id);
  //   setSidebarTeams(teams);

  //   console.log("SIDEBAR - Auths Teams: ", teams);
  // };

  

  useEffect(() => {
    getTeams();
  }, [teams.length]);

  useEffect(() => {
    getTeam();
  }, [team.name, groups.length]);

  if (authUser && authLayout)
    return (
      <>
        <div className="hidden sm:block sm:col-span-3 2xl:col-span-2 ">
          {/* <Sidebar teams={sidebarTeams} /> */}
          <Sidebar teams={teams} />
        </div>

        <div
          className={`z-50 absolute top-[7.5vh] w-[90%] bottom-0  sm:hidden ${
            !mobileSidebar ? "-translate-x-[100%] left-0" : "left-0 "
          }   z-40 border-l-gray-600 h-screen transition ease-in-out cursor-pointer duration-500`}
        >
          <MobileSidebar />
        </div>
      </>
    );
};

export default SidebarContainer;

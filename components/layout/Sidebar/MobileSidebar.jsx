import React, { useEffect } from "react";
import { useTeams } from "../../../context/TeamsContext";

const MobileSidebar = () => {
  const handleSelectTeam = () => {};

  const {teamLoading, team, teams, setTeamsLoading} = useTeams();


  return (
    <div className="bg-gray-800 pr-3">
      <div className="flex bg-gray-800 h-screen ">
        <div className="flex bg-gray-800 flex-col p-3 ">
          {" "}
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
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              ) : (
                <div className="bg-blue-400 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">
                  <div className="text-white font-bold text-lg">
                    {team.name.split("")[0].toUpperCase()}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className=" bg-gray-700 w-full relative flex flex-col h-screen rounded-xl text-gray-200 font-semibold p-3">
          {team?.name}
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

const PlusIcon = () => {
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

export default MobileSidebar;

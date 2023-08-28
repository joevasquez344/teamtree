import React from "react";
import { useTeams } from "../../../context/TeamsContext";
import Skeleton from "react-loading-skeleton";

const ChatHeader = ({ setMembersMobile }) => {
  const { teamLoading, team } = useTeams();

  return (
    <div className="flex items-center w-full justify-between ">
      {teamLoading ? (
        <div className="w-full h-full p-1">
          <div className="h-8 w-64">
            <Skeleton
              className="h-full w-full"
              baseColor="rgb(31 41 55)"
              count={1}
              borderRadius="4px"
              highlightColor="rgb(55 65 81)"
              enableAnimation={true}
              direction="rtl"
              duration={1}
            />
          </div>
        </div>
      ) : (
        <div className="">{team.name} Chat</div>
      )}
      <div
        onClick={() => setMembersMobile(true)}
        className="absolute right-5 md:hidden"
      >
        <UsersIcon />
      </div>
    </div>
  );
};

const UsersIcon = () => (
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
      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
    />
  </svg>
);

export default ChatHeader;

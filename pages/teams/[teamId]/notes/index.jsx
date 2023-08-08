import React, { useEffect, useState } from "react";
import Members from "../../../../components/users/Members";
import { useTeams } from "../../../../context/TeamsContext";
import TeamsHeader from "../../../../components/teams/TeamsHeader";
import { useRouter } from "next/router";
const Notes = () => {
  const { team } = useTeams();

  return (
    <div className="bg-gray-700">
      <div className="grid grid-cols-12">
        <div className="col-span-10  overflow-y-scroll no-scrollbar relative">
          {/* <TeamsHeader tabs={tabs} tabClick={handleTabClick} /> */}
          <div className="flex space-x-6 rounded-lg m-6 p-3 bg-gray-800">
            <div className="w-16 h-16  bg-gray-900 rounded-lg p-3"></div>
            <div className="w-16 h-16  bg-gray-900 rounded-lg p-3">Box</div>
            <div className="w-16 h-16  bg-gray-900 rounded-lg p-3">Box</div>
          </div>
          <div className="m-6 p-3 h-2/3  bg-gray-800 rounded-lg"></div>
        </div>
        <div className="border-l border-l-gray-600 h-screen col-span-2">
          <Members members={team.members} type="chat" />
        </div>
      </div>
    </div>
  );
};

export default Notes;

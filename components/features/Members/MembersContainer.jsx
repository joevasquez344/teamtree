import React from "react";
import Members from "../../users/Members";
import { useTeams } from "../../../context/TeamsContext";

const MembersContainer = ({handleRemoveMember, mobileSidebarState, membersMobile, setMembersMobile}) => {
    const {team} = useTeams();
  return (
    <>
      <div
        className={`hidden border-l border-l-gray-600 h-full md:block md:col-span-4 lg:col-span-4 xl:col-span-3 2xl:col-span-2 transition ease-in-out  duration-300 ${
          mobileSidebarState ? "translate-x-[90%]  right-0 " : "right-0"
        } `}
      >
        <Members team={team} type="chat" removeMember={handleRemoveMember} />
      </div>

      <div
        className={`border md:hidden bg-gray-800 absolute top-0 ${
          !membersMobile ? "translate-x-[100%] w-[90%] right-0" : "right-0"
        }  w-[90%] z-40 h-[calc(100%-64px)]  transition ease-in-out cursor-pointer duration-300 `}
      >
        <div className="border ml-3 h-full ">
          <Members
            team={team}
            removeMember={handleRemoveMember}
            type="chat"
            hideMembers={() => setMembersMobile(false)}
          />
        </div>
      </div>
    </>
  );
};

export default MembersContainer;

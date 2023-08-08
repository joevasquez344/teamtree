import React from "react";
import { acceptTeamInvite } from "../../utils/api/invites";
import { useAuth } from "../../context/auth/AuthContext";

const TaskNotification = ({ notification }) => {
  const { authUser } = useAuth();

  if (notification.target === "team") {
    return (
      <div className="flex items-center justify-between px-5 py-2 hover:bg-gray-800 transition ease-in-out cursor-pointer duration-200 ">
        {/* <div className="text-gray-400 flex items-center space-x-3">
        <div>{teamName}</div> {groupName && <div>-</div>}{" "}
        {groupName && <div>{groupName}</div>}
      </div> */}
        <div className="text-gray-400 flex items-center">
          <div className="flex items-center space-x-1">
            <div className="text-white">{notification?.teamName}</div>{" "}
            <div> assigned you to task: <span className="text-white">{notification.taskName}</span></div>
          </div>
        </div>
      </div>
    );
  }

  if (notification.target === "group") {
    return (
      <div className="flex items-center justify-between px-5 py-2 hover:bg-gray-100 transition ease-in-out cursor-pointer duration-200 border-b">
        {/* <div className="text-gray-400 flex items-center space-x-3">
              <div>{teamName}</div> {groupName && <div>-</div>}{" "}
              {groupName && <div>{groupName}</div>}
            </div> */}
        {/* <div className="text-gray-400 flex items-center space-x-3">
          <div>{notification.team.name}</div> {groupName && <div>-</div>}{" "}
          {groupName && <div>{groupName}</div>}
        </div> */}
        <div>
          Group {notification.groupName} from {notification.teamName} assigned
          you task: {notification.taskName}.{" "}
        </div>
      </div>
    );
  }
  //   return (
  //     <div className="flex items-center justify-between px-5 py-2 hover:bg-gray-100 transition ease-in-out cursor-pointer duration-200 border-b">
  //       {/* <div className="text-gray-400 flex items-center space-x-3">
  //       <div>{teamName}</div> {groupName && <div>-</div>}{" "}
  //       {groupName && <div>{groupName}</div>}
  //     </div> */}
  //       <div className="text-gray-400 flex items-center space-x-3">
  //         <div>{teamName}</div> {groupName && <div>-</div>}{" "}
  //         {groupName && <div>{groupName}</div>}
  //       </div>
  //       <div className="bg-green-500 font-semibold px-3 py-1 text-sm text-white cursor-pointer rounded-md">
  //         Join
  //       </div>
  //     </div>
  //   );
};

export default TaskNotification;

import React from "react";
import { acceptTeamInvite } from "../../utils/api/invites";
import { useAuth } from "../../context/auth/AuthContext";
import { useTeams } from "../../context/TeamsContext";

const InviteNotification = ({ notification, decrementCount }) => {
  const { authUser } = useAuth();
  const { addTeam } = useTeams();

  const handleAcceptInvite = async () => {
    await acceptTeamInvite(notification.id, authUser, notification.team.id);
    addTeam(notification.team);
    decrementCount(1);
  };
  if (notification.target === "team") {
    return (
      <div className="flex items-center justify-between px-5 py-2 hover:bg-gray-800 transition ease-in-out cursor-pointer duration-200 ">
        {/* <div className="text-gray-400 flex items-center space-x-3">
        <div>{teamName}</div> {groupName && <div>-</div>}{" "}
        {groupName && <div>{groupName}</div>}
      </div> */}
        <div className="text-gray-400 flex items-center">
          <div className="flex items-center space-x-1">
            <div className="text-white">{notification?.team.name}</div>{" "}
            <div> sent you an invite to their team.</div>
          </div>
        </div>
        {notification.status === "pending" ? (
          <div
            onClick={handleAcceptInvite}
            className="bg-green-500 font-semibold px-3 rounded-sm text-sm text-white cursor-pointer hover:bg-green-700"
          >
            Join
          </div>
        ) : (
          <div className="text-gray-400">Joined</div>
        )}
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
          Team {notification.team.name} sent you an Invite to Group{" "}
          {notification.group.name}.
        </div>
        <div className="border border-green-500 font-semibold px-3 py-1 text-sm text-white cursor-pointer rounded-md">
          Join
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

export default InviteNotification;

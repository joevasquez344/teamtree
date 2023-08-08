import React from "react";
import InviteNotification from "./InviteNotification";
import TaskNotification from "./TaskNotification";

const NotificationItem = ({ notification, decrementCount }) => {
  if (notification.type === "invite") {
    return <InviteNotification notification={notification} decrementCount={decrementCount} />;
  } 

  if(notification.type === "task") {
    return <TaskNotification notification={notification} />
  }
  // return (
  //   <div className="flex items-center justify-between px-5 py-2 hover:bg-gray-100 transition ease-in-out cursor-pointer duration-200 border-b">
  //     {/* <div className="text-gray-400 flex items-center space-x-3">
  //       <div>{teamName}</div> {groupName && <div>-</div>}{" "}
  //       {groupName && <div>{groupName}</div>}
  //     </div> */}
  //     <div className="bg-green-500 font-semibold px-3 py-1 text-sm text-white cursor-pointer rounded-md">
  //       Join
  //     </div>
  //   </div>
  // );
};

export default NotificationItem;

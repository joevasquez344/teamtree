import React, { useEffect } from "react";
import NotificationItem from "./NotificationItem";
import { markNotificationsAsOld } from "../../utils/api/tasks";

const NotificationList = ({ notifications, decrementCount }) => {
  const teamInvites = [
    {
      id: 1,
      to: "3w43tt33",
      from: "34355w",
      type: "invite",
      status: "pending",
      target: "team",
      teamName: "Team 1",
    },
    {
      id: 2,
      to: "3w43tt33",
      from: "34355w",
      type: "invite",
      status: "pending",
      target: "team",
      teamName: "Team 1",
    },
    {
      id: 3,
      to: "3w43tt33",
      from: "34355w",
      type: "invite",
      status: "pending",
      target: "team",
      teamName: "Team 1",
    },
    {
      id: 4,
      to: "3w43tt33",
      from: "34355w",
      type: "invite",
      status: "pending",
      target: "team",
      teamName: "Team 1",
    },
  ];

  const groupInvites = [
    {
      id: 1,
      to: "3w43tt33",
      from: "34355w",
      type: "invite",
      status: "pending",
      target: "group",
      teamName: "Team 1",
      groupName: "Group 1",
    },
    {
      id: 2,
      to: "3w43tt33",
      from: "34355w",
      type: "invite",
      status: "pending",
      target: "group",
      teamName: "Team 1",
      groupName: "Group 1",
    },
    {
      id: 3,
      to: "3w43tt33",
      from: "34355w",
      type: "invite",
      status: "pending",
      target: "group",
      teamName: "Team 1",
      groupName: "Group 1",
    },
    {
      id: 4,
      to: "3w43tt33",
      from: "34355w",
      type: "invite",
      status: "pending",
      target: "group",
      teamName: "Team 1",
      groupName: "Group 1",
    },
  ];

  useEffect(() => {
    const taskAssignments = notifications.filter(
      (notification) => notification.type === "task" && notification.new
    );
    decrementCount(taskAssignments.length);

    markNotificationsAsOld(taskAssignments)

    console.log("Task Assignments: ", taskAssignments);
  }, []);
  return (
    <div className="bg-gray-900 h-96  overflow-scroll">
      <div>
        <div className="font-semibold text-gray-200 px-3 py-2">
          Notifications
        </div>
        {notifications.map((notification) => (
          <NotificationItem
          key={notification.id}
            notification={notification}
            decrementCount={decrementCount}
          />
        ))}
        {/* {teamInvites.map((notification) => (
          <NotificationItem notification={notification} />
        ))} */}
      </div>
      {/* <div>
        <div className="font-semibold text-blue-400 px-3 py-2">
          Group Invites
        </div>

        {groupInvites.map((notification) => (
          <NotificationItem notification={notification} />
        ))}

      </div> */}
    </div>
  );
};

export default NotificationList;

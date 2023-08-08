import React from "react";
import Overlay from "../Overlay";

const DeleteTaskPopup = ({ close, deleteTask, task }) => {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 flex z-50 items-center justify-center text-white">
      <Overlay />
      <div className="z-50 w-[450px] bg-gray-800 shadow-xl rounded-xl py-5 px-7 flex flex-col items-center ">
        <div className="text-xl h-12 font-bold overflow-hidden">
          {task.taskName}
        </div>
        <div className="mb-7">
          Are you sure you want to delete this task?
        </div>
        <div className="flex items-center justify-evenly w-full">
          <div
            onClick={deleteTask}
            className="bg-red-500  font-semibold py-1 px-7 cursor-pointer rounded"
          >
            Delete
          </div>
          <div
            onClick={close}
            className="bg-gray-400 font-semibold py-1 px-7 cursor-pointer rounded"
          >
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteTaskPopup;

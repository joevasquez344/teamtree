import React from "react";

const ReplyToDeleted = () => {
  return (
    <div
      className={`inline-flex ml-12 mb-3  px-1 py-2`}
    >
      <div className="flex items-center">
        <div
          className={`rounded-full w-4 h-4 flex-shrink-0 flex items-center justify-center bg-red-500 mr-2`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={"w-3 h-3 text-white"}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </div>

        <div className="text-red-500 text-sm mr-1">Message Deleted</div>
      </div>
    </div>
  );
};

export default ReplyToDeleted;

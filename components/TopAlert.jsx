import React, { useEffect, useState } from "react";

const TopAlert = ({ children, alertType }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timeId = setTimeout(() => {
      setShow(true);
    }, 200);

    setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  //   if (!alert) {
  //     return null;
  //   }

  return (
    <div
      className={` fixed flex items-center justify-center space-x-4 z-50 ${
        !show ? "-translate-y-36" : "-translate-y-7"
      } w-screen sm:left-0 transition ease-in-out duration-500 text-white font-semibold py-2 px-5`}
    >
      <div className={`flex items-center space-x-4 shadow-xl px-4 py-2 rounded-sm ${
        alertType === "delete" ? "bg-red-500" : "bg-green-500"
      }`}>
        <div> {children}</div>
        <CheckIcon />
      </div>
    </div>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
};

export default TopAlert;

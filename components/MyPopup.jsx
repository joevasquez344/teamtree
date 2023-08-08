import React from "react";
import Overlay from "./Overlay";

const Popup = ({ children, closePopup, popup }) => {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 flex z-50 items-center justify-center">
      <Overlay />
      <div className="z-50 w-[450px] bg-gray-800 shadow-xl rounded-xl py-5 px-7 flex flex-col items-center ">{children}</div>
    </div>
  );
};

export default Popup;

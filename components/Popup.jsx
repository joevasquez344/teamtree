import React from "react";
import ModalOverlay from "./layout/ModalOverlay";

const Popup = ({ children, closePopup, popup, styles, overlayStyles }) => {
  return (
    <>
      {popup && <ModalOverlay overlayStyles={overlayStyles} closeModal={closePopup} />}
      {popup && <div className={`absolute z-50 cursor-default ${styles}`}>{children}</div>}
    </>
  );
};

export default Popup;

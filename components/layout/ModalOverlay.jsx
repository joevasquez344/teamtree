import React from "react";

const ModalOverlay = ({ closeModal, overlayStyles }) => {
  return (
    <div
      onClick={closeModal}
      className={`fixed top-0 right-0 left-0 bottom-0 z-40 cursor-default ${overlayStyles}`}
    />
  );
};

export default ModalOverlay;

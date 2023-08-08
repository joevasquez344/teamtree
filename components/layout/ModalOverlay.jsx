import React from "react";

const ModalOverlay = ({ closeModal }) => {
  return (
    <div
      onClick={closeModal}
      className="fixed top-0 right-0 left-0 bottom-0 z-50 cursor-default"
    />
  );
};

export default ModalOverlay;

import React, { useState } from "react";

const usePopupList = () => {
  const [popup, setPopup] = useState(false);

  const [inputEl, setInputEl] = useState(-1);
  const openPopup = (id) => {
    setInputEl(id);
    setPopup(true);
  };

  const closePopup = () => {
    setInputEl(-1);
    setPopup(false);
  };

  return { popup, closePopup, openPopup, inputEl };
};

export default usePopupList;

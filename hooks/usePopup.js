import React, { useState } from "react";

const usePopup = () => {
  const [popup, setPopup] = useState(false);

    const openPopup = () => setPopup(true);
    const closePopup = () => setPopup(false);

    return { popup, closePopup, openPopup };

};

export default usePopup;

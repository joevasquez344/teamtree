import React from "react";

const useOverlay = () => {
  const [overlay, setOverlay] = useState(false);
  const openOverlay = setOverlay(true);
  const closeOverlay = setOverlay(false);

  return {
    overlay,
    openOverlay,
    closeOverlay,
  };
};

export default useOverlay;

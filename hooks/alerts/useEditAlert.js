import { useState, useEffect } from "react";
import copy from "copy-to-clipboard";

export const useEditAlert = () => {
  const alertText = "Task Successfully Edited";

  const [alert, setAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setAlert(true), 2000);
    setAlert(false)
    return () => clearTimeout(timer);
  }, [alert]);

  return { alertText, alert, setAlert };
};

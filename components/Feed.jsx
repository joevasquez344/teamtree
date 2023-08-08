import React, { useEffect, useRef, useState } from "react";

const Feed = ({ children }) => {
  const ref = useRef(null);
  const [inputEl, setInputEl] = useState(-1);

  return children;
};

const FeedItem = ({ children, border, overlay }) => {
  let styles = {};

  if (border) {
    styles.border = "border-b border-b-gray-600";
  } else {
    styles.border = "";
  }

  return (
    <div className={`relative ${styles.border}`}>
    
      {children}
    </div>
  );
};


export { Feed, FeedItem };

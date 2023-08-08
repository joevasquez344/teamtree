import React, { useState, useEffect } from "react";

const useTabs = (labels) => {
  const convertedTabs = labels.map((label, idx) => ({
    id: idx,
    label,
    active: false,
  }));
  const [tabs, setTabs] = useState(convertedTabs);

  const tabClick = (tabClicked) => {
    const activeTab = tabs.find((tab) => tab.active);

    const updatedTabs = tabs.map((tab) => {
      if (activeTab && activeTab.id === tab.id) {
        tab.active = false;
      }

      if (tabClicked.id === tab.id) {
        tab.active = true;
      }

      return tab;
    });

    setTabs(updatedTabs);
  };

  useEffect(() => {
    const updatedTabs = tabs.map((tab) => {
      if (tab.id === 0) {
        tab.active = true;
      }

      return tab;
    });

    setTabs(updatedTabs);
  }, []);

  return { tabs, tabClick };
};

export default useTabs;

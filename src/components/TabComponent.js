import React, { useState } from "react";
// import { Tabs, Tab } from "react-bootstrap";
import "../styles/TabComponent.css";

const TabComponent = (props) => {
  const setTab = props.setKey;
  const [activeTab, setActiveTab] = useState(props.tabDetails[0].type);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setTab(tab);
  };

  return (
    <div className="tab-container">
      {props.tabDetails.map((tab) => {
        return (
          <button
            className={`tab-button ${activeTab === tab.type && "active"}`}
            onClick={() => handleTabClick(tab.type)}
          >
            {tab.name}
          </button>
        );
      })}
    </div>
  );
};

export default TabComponent;

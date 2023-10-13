import React, { useState } from "react";
import PropertyCard from "./PropertyCard";
import TabComponent from "./TabComponent";
import "../Styles.css";

const SideCards = () => {
  const [activeTab, setActiveTab] = useState("roas");
  const tabDetails = [
    { name: "ROAS", type: "roas" },
    { name: "ACOS", type: "acos" },
  ];
  return (
    <div className="row">
      <div className=" sideCard-col shadow white-background column">
        <div className="row">
          <TabComponent tabDetails={tabDetails} setKey={setActiveTab} />
        </div>
        {activeTab === "roas" ? (
          <div>
            <div className="sidecard1 row">
              <PropertyCard />
            </div>
            <hr />
            <div className=" sidecard2 row">
              <PropertyCard />
            </div>
          </div>
        ) : (
          <div>Data Not Available</div>
        )}
      </div>
      <div className="sideCard-col column">
        <div className="sidecard3 row shadow white-background">
          <PropertyCard />
        </div>
        <div className=" sidecard4 row shadow white-background">
          <PropertyCard />
        </div>
      </div>
    </div>
  );
};

export default SideCards;

import React from "react";
import SummaryCard from "./SummaryCard";
import SideCards from "./SideCards";
import BottomCards from "./BottomCards";
import "../Styles.css";

const AppContent = (props) => {
  const data = props?.data;
  const bCards = ["cpc", "cr", "aov"];
  const sCards = ["totalRoas", "adRoas", "totalSpend", "totalTraffic"];
  let dates = [];
  let summaryData = [];
  let bottomCardData = [];
  let sideCardData = [];

  data?.data.forEach((item) => {
    dates.push(item.date);
    summaryData.push(item.summary);
    bottomCardData.push(
      item.details.filter((ele) => {
        return bCards.includes(ele.type);
      })
    );
    sideCardData.push(
      item.details.filter((ele) => {
        return sCards.includes(ele.type);
      })
    );
  });

  return (
    <div className="App-content column">
      {!data ? (
        <div className="loader">
          <p>Loading....</p>{" "}
        </div>
      ) : (
        <div>
          <div className="view-title row">
            <p>Total {data.name}'s Overview</p>
          </div>
          <div className="row second-row">
            <div className="summary shadow white-background">
              <SummaryCard data={summaryData} />
            </div>
            <div className="side-cards">
              <SideCards data={sideCardData} />
            </div>
          </div>
          <div className="row third-row">
            <BottomCards data={bottomCardData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AppContent;

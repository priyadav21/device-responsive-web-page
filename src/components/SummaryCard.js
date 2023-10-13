import React, { useState } from "react";
import PropertyCard from "./PropertyCard";
import DoughnutChart from "./DoughnutChart";
import TabComponent from "./TabComponent";
import "../Styles.css";

const SummaryCard = (props) => {
  const data = props.data;
  const dates = props.dates;
  const tabDetails = [
    { name: "Seller / Vendor", type: "sellerVendor" },
    { name: "Ad / Organic", type: "adOrganic" },
  ];
  const [activeTab, setActiveTab] = useState(tabDetails[0].type);
  const totalR = [];
  const seller = [];
  const vendor = [];
  data.forEach((item) => {
    totalR.push(item.total);
    seller.push(item.seller);
    vendor.push(item.vendor);
  });
  return (
    <div className="summary-container ">
      <div className="row">
        <TabComponent tabDetails={tabDetails} setKey={setActiveTab} />
      </div>
      {activeTab === tabDetails[0].type ? (
        <div className="tab-content column">
          <div className="row">
            <div className="column card-holder">
              <PropertyCard data={totalR} dates={dates} />
            </div>
            <div className="column chart-holder">
              <DoughnutChart />
            </div>
          </div>
          <div className="row">
            <div className="column card-holder">
              <PropertyCard data={seller} dates={dates} />
            </div>
            <div className="column card-holder">
              <PropertyCard data={vendor} dates={dates} />
            </div>
          </div>
        </div>
      ) : (
        <p>Data Not Available</p>
      )}
    </div>
  );
};

export default SummaryCard;

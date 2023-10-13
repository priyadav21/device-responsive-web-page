import React from "react";
import "../Styles.css";

const PropertyCard = (props) => {
  const data = props.data;
  let obj;
  if (data) {
    obj = {
      name: data[0].name,
      currValue: data[0].value.amount,
      prevValue: data[1].value.amount,
      currDate: "Oct 09",
      prevDate: "Oct 08",
      percent: (
        (data[0].value.amount / data[1].value.amount) * 100 -
        100
      ).toFixed(2),
    };
  }
  return (
    <div>
      <div className="property-container">
        {data ? (
          <div className="property-card">
            <div className="row card-title">{obj.name}</div>
            <div className="row card-subtitle">
              <div className="column ">{obj.currValue}</div>
              <div className="column">{obj.percent}%</div>
            </div>
            <div className="row card-text">
              {" "}
              <p>ystd: {obj.currDate}</p>
            </div>
            <div className="row card-subtext">
              prev: {obj.prevDate} : {obj.prevValue}
            </div>
          </div>
        ) : (
          <div className="property-card">
            <div className="row card-title">Property Card</div>
            <div className="row card-subtitle">
              <div className="column">1234</div>
              <div className="column">+30%</div>
            </div>
            <div className="row card-text">ystd: Oct 09</div>
            <div className="row card-subtext">Prev: Oct 08 : 949</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;

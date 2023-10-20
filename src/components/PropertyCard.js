import React from "react";
import "../Styles.css";

const PropertyCard = (props) => {
  const { data, chartProperty } = props;
  let obj;
  if (data) {
    obj = {
      name: data[0].name,
      type: data[0].value.type,
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

  function formatIndianNumber(number) {
    if (isNaN(number)) {
      return "Invalid Number";
    }

    number = number.toString();
    let parts = number.split(".");
    let integerPart = parts[0];
    let decimalPart = parts[1] || "";
    let len = integerPart.length;
    let formattedNumber;

    if (len > 3) {
      let formattedInteger = integerPart.slice(len-3);
      let i = len-3;
      while(i>0){
        formattedInteger = integerPart.slice(i-1,i+1) + "," + formattedInteger;
        i-=2;
      }
      formattedNumber = formattedInteger;
    } else {
      formattedNumber = integerPart;
    }

    if (decimalPart) {
      formattedNumber += "." + decimalPart;
    }

    return formattedNumber;
  }

  const getModifiedValue = (type, value) => {
    let modified;
    switch (type) {
      case "price":
        modified = "₹" + formatIndianNumber(value);
        break;
      case "percentage":
        modified = value + "%";
        break;
      default:
        modified = value;
        break;
    }

    return modified;
  };
  return (
    <div className="property-container">
      {data ? (
        <div className="property-card">
          <div
            className={`row card-title ${
              chartProperty && "property" + chartProperty
            }`}
          >
            {obj.name}
          </div>
          <div className="row card-subtitle">
            <div className="column ">
              {getModifiedValue(obj.type, obj.currValue)}
            </div>
            <div className="column">{`(${
              obj.percent > 0 ? "+" + obj.percent : obj.percent
            }%)`}</div>
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
  );
};

export default PropertyCard;

import React from "react";
import PropertyCard from "./PropertyCard";
import "../Styles.css";

const BottomCards = (props) => {
  const data = props.data;
  let bcards = [];
  if (data) {
    for (let i = 0; i > data[0].length; i++) {
      bcards.push([data[0][i], data[1][i]]);
    }
  }

  return (
    <div className="bottom-row">
      <div className="bottom-cards column shadow white-background">
        <PropertyCard />
      </div>
      <div className=" bottom-cards column shadow white-background">
        <PropertyCard />
      </div>
      <div className=" bottom-cards column shadow white-background">
        <PropertyCard />
      </div>
    </div>
  );
};

export default BottomCards;

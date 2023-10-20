import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);
const DoughnutChart = () => {
  //   const { labels, value } = props.data;
  const data = {
    labels: ["Seller", "Vendor"],
    datasets: [
      {
        data: [2890, 37277],
        backgroundColor: ["#5b58e7", "#2db6f5"],
      },
    ],
  };

  return (
    <div>
      <Doughnut data={data} />
    </div>
  );
};

export default DoughnutChart;

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);
const DoughnutChart = () => {
  //   const { labels, value } = props.data;
  const data = {
    labels: ["Vendor", "Seller"],
    datasets: [
      {
        data: [300, 50],
        backgroundColor: ["#2db6f5", "#5b58e7"],
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

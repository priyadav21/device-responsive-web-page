import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);
const DoughnutChart = () => {
  //   const { labels, value } = props.data;
  const data = {
    labels: ["Red", "Blue"],
    datasets: [
      {
        data: [300, 50],
        backgroundColor: ["#FF6384", "#36A2EB"],
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

import React from "react";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
const MyChart = () => {
  const subjects = useSelector((state) => state.subjects.subjects);

  const chartData = {
    labels: subjects.map((subjects) => subjects.name),
    datasets: [
      {
        label: "Subjects Dataset",
        data: subjects.map((subjects) => subjects.grade),
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 5,
      },
    ],
  };

  return <Chart type="doughnut" data={chartData} />;
};

export default MyChart;

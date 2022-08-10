import React from "react";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { useSelector } from "react-redux";
import DisplayGpa from "./DisplayGpa.js";
const MyChart = () => {
  const subjects = useSelector((state) => state.subjects.subjects);
  const labels = subjects.map((subjects) => subjects.name);
  const chartData = {
    labels: labels,
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

  return labels.length > 0 ? (
    <>
      <Chart type="doughnut" data={chartData} />
      <DisplayGpa />
    </>
  ) : (
    <div id="pre-chart">
      <h1>Add a subject</h1>
    </div>
  );
};

export default MyChart;

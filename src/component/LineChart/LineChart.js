import { LineChart } from "@mui/x-charts";
import React from "react";

const DashboardLineChart = () => {
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const xLabels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  return (
    <LineChart
      width={800}
      height={300}
      series={[{ data: pData }, { data: uData }]}
      xAxis={[{ scaleType: "point", data: xLabels }]}
    />
  );
};

export default DashboardLineChart;

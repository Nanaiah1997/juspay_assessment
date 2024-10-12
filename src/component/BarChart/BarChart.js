import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Box } from "@mui/material";
import { theme } from "../../themes/theme";

const DashboardBarChart = () => {
  const monthlyData = [4, 3, 5, 6, 7, 2, 5]; // Example data in millions
  const formattedData = monthlyData.map((value) => value * 1000000);
  return (
    <BarChart
      xAxis={[
        {
          scaleType: "band",
          data: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ],
        },
      ]}
      series={[
        {
          data: [14, 23, 25, 36, 47, 22, 75],
          color: theme.palette.secondary.main,
        },
      ]}
      width={600}
      height={350}
      borderRadius={10}
    />
  );
};

export default DashboardBarChart;

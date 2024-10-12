import React from "react";
import { useSelector } from "react-redux";
import AppLayout from "../component/AppLayout/AppLayout";
import { Box } from "@mui/material";
import DashboardDefault from "../component/dashboardContent/DashboardDefault";
import { useParams } from "react-router-dom";
import DashboardOrder from "../component/dashboardContent/DashboardOrder";

const Dashboard = () => {
  const { text } = useSelector((s) => s.dashboardSlice);
  const { view } = useParams();
  console.log(text, "testing");

  const renderContent = (view) => {
    switch (view) {
      case "default":
        return <DashboardDefault />;
      case "order":
        return <DashboardOrder />;
      default:
        return <></>;
    }
  };
  return (
    <AppLayout>
      <Box
        sx={{
          margin: "2rem",
          height: ` calc(100vh - 10rem)`,
          overflow: "auto",
        }}
      >
        {renderContent(view)}
      </Box>
    </AppLayout>
  );
};

export default Dashboard;

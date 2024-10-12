import { Box, Typography } from "@mui/material";
import React from "react";
import Card from "../card/Card";
import { useSelector } from "react-redux";
import DashboardBarChart from "../BarChart/BarChart";
import { theme } from "../../themes/theme";
import DashboardLineChart from "../LineChart/LineChart";
import Table from "../Table/Table";
import DashboardTable from "../Table/Table";

const DashboardDefault = () => {
  const { ecommercedata, showNotificationBar } = useSelector(
    (s) => s.dashboardSlice
  );
  return (
    <Box>
      <Box>
        <Typography variant="body2" fontWeight={"600"}>
          eCommerce
        </Typography>
      </Box>
      <Box>
        <Box
          sx={{
            width: "100%",
            height: "34rem",
            display: "flex",
            marginTop: "2rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "4rem",
              width: "50%",
              flexWrap: "wrap",
              justifyContent: "flex-start",
            }}
          >
            {ecommercedata.map((item, i) => (
              <Card
                key={item.category}
                index={i}
                category={item.category}
                totalCount={item.totalCount}
                totalAmount={item.totalAmount}
                changeRatePercentage={item.changeRatePercentage}
                showNotificationBar={showNotificationBar}
              />
            ))}
          </Box>
          <Box
            sx={{
              background: `${theme.palette.secondary.main}40`,
              borderRadius: "1rem",
              width: "50%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <DashboardBarChart />
          </Box>
        </Box>
        <Box sx={{ marginTop: "4rem" }}>
          <Box
            sx={{
              background: `${theme.palette.secondary.main}40`,
              borderRadius: "1rem",
              width: "70%",
              marginTop: "1rem",
            }}
          >
            <DashboardLineChart />
          </Box>
        </Box>
        <Box sx={{ marginTop: "4rem" }}>
          <Box
            sx={{
              background: `${theme.palette.secondary.main}40`,
              borderRadius: "1rem",
              width: "70%",
              marginTop: "1rem",
            }}
          >
            <DashboardTable />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardDefault;

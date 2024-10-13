import { Box, Typography } from "@mui/material";
import React from "react";
import Card from "../card/Card";
import { useSelector } from "react-redux";
import DashboardBarChart from "../BarChart/BarChart";
import { makeStyles } from "@mui/styles";
import { theme } from "../../themes/theme";
import DashboardLineChart from "../LineChart/LineChart";
import DashboardTable from "../Table/Table";

const useStyles = makeStyles(() => ({
  container: {
    marginTop: "2rem",
  },
  ecomHeader: {
    fontWeight: "600",
  },
  cardsContainer: {
    width: "100%",
    height: "34rem",
    display: "flex",
  },
  cardsWrapper: {
    display: "flex",
    gap: "4rem",
    width: "50%",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  chartContainer: {
    background: `${theme.palette.secondary.main}40`,
    borderRadius: "1rem",
    width: "50%",
    display: "flex",
    alignItems: "center",
  },
  lineChartContainer: {
    background: `${theme.palette.secondary.main}40`,
    borderRadius: "1rem",
    width: "70%",
    marginTop: "1rem",
    overflow: "hidden",
  },
  tableContainer: {
    background: `${theme.palette.secondary.main}40`,
    borderRadius: "1rem",
    width: "70%",
    marginTop: "1rem",
  },
  empty: {
    background: `${theme.palette.secondary.main}40`,
    borderRadius: "1rem",
    width: "30%",
    marginTop: "1rem",
    padding: "2rem ",
    overflow: "hidden",
    textAlign: "center",
  },
  wrapper: {
    display: "flex",
    gap: "1rem",
  },
}));

const DashboardDefault = () => {
  const classes = useStyles();
  const { ecommercedata, showNotificationBar } = useSelector(
    (s) => s.dashboardSlice
  );

  return (
    <Box>
      <Box>
        <Typography variant="body2" className={classes.ecomHeader}>
          eCommerce
        </Typography>
      </Box>
      <Box className={classes.container}>
        <Box className={classes.cardsContainer}>
          <Box className={classes.cardsWrapper}>
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
          <Box className={classes.chartContainer}>
            <DashboardBarChart />
          </Box>
        </Box>
        <Box className={classes.wrapper}>
          <Box className={classes.lineChartContainer}>
            <DashboardLineChart />
          </Box>
          <Box className={classes.empty}> worldMap here</Box>
        </Box>
        <Box className={classes.wrapper}>
          <Box className={classes.tableContainer}>
            <DashboardTable />
          </Box>
          <Box className={classes.empty}> Donut here</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardDefault;

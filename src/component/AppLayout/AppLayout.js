import { Box } from "@mui/material";
import React from "react";
import SideBar from "../sideBar/SideBar";
import { useSelector } from "react-redux";
import Notification from "../notification/Notification";
import useStyles from "./AppLayout.styles";
import cx from "clsx";
import DashboardHeader from "../header/DashboardHeader";

const AppLayout = ({ children }) => {
  const classes = useStyles();

  const { showNotificationBar } = useSelector((s) => s.dashboardSlice);
  return (
    <Box className={classes.container}>
      <Box
        className={cx(classes.sidebar, {
          [classes.sidebarContent]: showNotificationBar,
        })}
      >
        <SideBar />
      </Box>
      <Box
        className={cx(classes.mainContent, {
          [classes.mainContentNotifiy]: showNotificationBar,
        })}
      >
        <DashboardHeader />
        <>{children}</>
      </Box>
      <Box
        className={cx(classes.notificationBar, {
          [classes.hidden]: !showNotificationBar,
        })}
      >
        <Notification />
      </Box>
    </Box>
  );
};

export default AppLayout;

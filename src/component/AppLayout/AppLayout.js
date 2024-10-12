import { Box, Typography } from "@mui/material";
import React from "react";
import SideBar from "../sideBar/SideBar";
import StarTwoToneIcon from "@mui/icons-material/StarTwoTone";
import { SearchBox } from "../searchBox/SearchBox";
import NotificationsNoneTwoToneIcon from "@mui/icons-material/NotificationsNoneTwoTone";
import { useDispatch, useSelector } from "react-redux";
import { setShowNotificationBar } from "../../redux/slices/slice";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import { useThemeContext } from "../../themes/ThemeProviderWrapper";
import Notification from "../notification/Notification";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import { useParams } from "react-router-dom";
import { theme } from "../../themes/theme";
import { makeStyles } from "@mui/styles";

const AppLayout = ({ children }) => {
  const dispatch = useDispatch();
  const { view } = useParams();

  const { toggleTheme, isLight } = useThemeContext();

  const { showNotificationBar } = useSelector((s) => s.dashboardSlice);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: showNotificationBar ? "15%" : "17%",
          overflow: "auto",
          borderRight: ` 1px solid ${theme.palette.text.primary}4f`,
        }}
      >
        <SideBar />
      </Box>
      <Box
        sx={{
          width: showNotificationBar ? "70%" : "100%",
          transition: "width 0.3s ease",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "7rem",
            borderBottom: `1px solid ${theme.palette.text.primary}4f`,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "50%",
              paddingLeft: "3rem",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "1rem",
                "& svg": {
                  width: "3rem",
                  height: "3rem",
                  "& path": {
                    fill: theme.palette.text.primary,
                  },
                },
              }}
            >
              <FeaturedPlayListOutlinedIcon />
              <StarTwoToneIcon />
            </Box>
            <Box sx={{ textTransform: "capitalize", marginLeft: "1rem" }}>
              <Typography variant="h6">
                <span style={{ opacity: 0.5 }}>Dashboard / </span>
                {view}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: "50%",
              paddingRight: "3rem",
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "15rem", padding: "1rem" }}>
              <SearchBox />
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: "1rem",
                "& svg": {
                  width: "3.5rem",
                  height: "3.5rem",
                  "& path": {
                    fill: theme.palette.text.primary,
                  },
                },
              }}
            >
              <LightModeTwoToneIcon onClick={() => toggleTheme()} />
              <NotificationsNoneTwoToneIcon
                onClick={() => dispatch(setShowNotificationBar())}
              />
            </Box>
          </Box>
        </Box>
        <Box>{children}</Box>
      </Box>
      <Box
        sx={{
          width: showNotificationBar ? "17%" : "0",
          borderLeft: showNotificationBar
            ? `1px solid ${theme.palette.text.primary}4f`
            : "none",
          overflow: "hidden",
          transition: "width 0.3s ease, opacity 0.3s ease",
          opacity: showNotificationBar ? 1 : 0,
          visibility: showNotificationBar ? "visible" : "hidden",
          padding: showNotificationBar && "2.5rem 3rem 1rem 2rem",
          overflow: "auto",
        }}
      >
        <Notification />
      </Box>
    </Box>
  );
};

export default AppLayout;

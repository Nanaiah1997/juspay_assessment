import { Box, Typography } from "@mui/material";
import React from "react";
import SearchBox from "../searchBox/SearchBox";
import { setShowNotificationBar } from "../../redux/slices/slice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useThemeContext } from "../../themes/ThemeProviderWrapper";
import { theme } from "../../themes/theme";
import NotificationsNoneTwoToneIcon from "@mui/icons-material/NotificationsNoneTwoTone";
import StarTwoToneIcon from "@mui/icons-material/StarTwoTone";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import useStyles from "./DashboardHeader.styles";

const DashboardHeader = () => {
  const dispatch = useDispatch();
  const { view } = useParams();
  const classes = useStyles();
  const { toggleTheme, isLight } = useThemeContext();
  return (
    <Box className={classes.header}>
      <Box className={classes.leftHeader}>
        <Box className={classes.iconContainer}>
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
      <Box className={classes.rightHeader}>
        <Box className={classes.searchBox}>
          <SearchBox />
        </Box>

        <Box className={classes.iconContainer}>
          <LightModeTwoToneIcon onClick={() => toggleTheme()} />
          <NotificationsNoneTwoToneIcon
            onClick={() => dispatch(setShowNotificationBar())}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardHeader;

import React from "react";
import OrderListTable from "../Table/OrderListTable";
import { Box, Typography } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import ImportExportOutlinedIcon from "@mui/icons-material/ImportExportOutlined";
import SearchBox from "../searchBox/SearchBox";
import { makeStyles } from "@mui/styles";
import { theme } from "../../themes/theme";

const useStyles = makeStyles(() => ({
  container: {
    margin: "2rem 0rem",
  },
  header: {
    fontWeight: "600",
  },
  actionContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: `${theme.palette.secondary.main}40`,
    padding: ".8rem",
    borderRadius: "1rem",
    margin: "1.5rem 0rem",
  },
  iconContainer: {
    display: "flex",
    gap: "2rem",
    padding: "1rem",
    "& svg": {
      width: "2.5rem",
      height: "2.5rem",
      "& path": {
        fill: theme.palette.text.primary,
      },
      "&:hover": {
        background: theme.palette.secondary.main,
        borderRadius: ".5rem",
      },
    },
  },
}));

const DashboardOrder = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box>
        <Typography variant="body2" className={classes.header}>
          Order List
        </Typography>
      </Box>
      <Box className={classes.actionContainer}>
        <Box className={classes.iconContainer}>
          <AddOutlinedIcon />
          <FilterListOutlinedIcon />
          <ImportExportOutlinedIcon />
        </Box>
        <Box>
          <SearchBox showEndAdornment={false} />
        </Box>
      </Box>
      <OrderListTable />
    </Box>
  );
};

export default DashboardOrder;

import React from "react";
import OrderListTable from "../Table/OrderListTable";
import { Box, Typography } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import ImportExportOutlinedIcon from "@mui/icons-material/ImportExportOutlined";
import SearchBox from "../searchBox/SearchBox";
import { theme } from "../../themes/theme";

const DashboardOrder = () => {
  return (
    <Box>
      <Box>
        <Typography variant="body2" fontWeight={"600"}>
          Order List
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: `${theme.palette.secondary.main}40`,
          padding: "1rem",
          borderRadius: "1rem",
          margin: "2rem 0rem",
        }}
      >
        <Box
          sx={{
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
          }}
        >
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

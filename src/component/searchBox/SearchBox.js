// src/SearchBox.js

import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardCommandKeyRoundedIcon from "@mui/icons-material/KeyboardCommandKeyRounded";
import { Box, InputBase, Typography } from "@mui/material";
import useStyles from "./SearchBox.styles";
import { useTheme } from "@mui/styles";

export function SearchBox({
  className = "",
  onChange,
  value,
  placeholder = "Search...",
  fullWidth = true,
  backgroundColor = "",
  sx = {},
  onFocus,
  disabled = false,
  showEndAdornment = true,
}) {
  const theme = useTheme();
  const classes = useStyles();
  console.log(theme, "useTheme");
  return (
    <InputBase
      className={`${classes.searchBox} ${className}`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      startAdornment={
        <SearchIcon
          style={{ marginRight: "10px", width: "2rem", height: "2rem" }}
        />
      }
      endAdornment={
        showEndAdornment && (
          <Box sx={{ display: "flex" }}>
            <KeyboardCommandKeyRoundedIcon
              style={{ marginLeft: "1rem", width: "2rem", height: "2rem" }}
            />
            <Typography variant="h5">/</Typography>
          </Box>
        )
      }
      fullWidth={fullWidth}
      sx={{ backgroundColor: backgroundColor, ...sx }}
      onFocus={onFocus}
      disabled={disabled}
    />
  );
}
export default SearchBox;

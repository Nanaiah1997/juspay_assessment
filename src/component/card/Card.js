import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { theme } from "../../themes/theme";
import CallMadeOutlinedIcon from "@mui/icons-material/CallMadeOutlined";
import CallReceivedOutlinedIcon from "@mui/icons-material/CallReceivedOutlined";

const Card = ({
  index,
  category,
  totalCount = 0,
  totalAmount = 0,
  changeRatePercentage = 0,
  showNotificationBar,
}) => {
  const [shuffle, setShuffle] = useState(false);
  const displayCount = totalCount || totalAmount;

  return (
    <Box
      sx={{
        background:
          index === 0
            ? theme.palette.primary.main
            : index === 3
            ? theme.palette.secondary.main
            : `${theme.palette.secondary.main}40`,
        width: showNotificationBar ? "15rem" : "22rem",
        padding: "3rem 2rem",
        borderRadius: "1rem",
        height: "8.5rem",
      }}
    >
      <Typography variant="h6" fontWeight={600}>
        {category}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "1rem",
          "&:hover": {
            background: `${theme.palette.secondary.main}5c`,
            borderRadius: ".5rem",
            padding: "0rem 1rem",
          },
        }}
        onMouseEnter={() => setShuffle(true)}
        onMouseLeave={() => setShuffle(false)}
      >
        {!shuffle ? (
          <>
            <Typography className="count" variant="h2" fontWeight={600}>
              {displayCount}
            </Typography>
            <Typography className="change-rate">
              {changeRatePercentage.toFixed(2)}%
              {changeRatePercentage >= 0 ? (
                <CallMadeOutlinedIcon />
              ) : (
                <CallReceivedOutlinedIcon />
              )}
            </Typography>
          </>
        ) : (
          <>
            <Typography className="change-rate">
              {changeRatePercentage.toFixed(2)}%
              {changeRatePercentage >= 0 ? (
                <CallMadeOutlinedIcon />
              ) : (
                <CallReceivedOutlinedIcon />
              )}
            </Typography>
            <Typography className="count" variant="h2" fontWeight={600}>
              {displayCount}
            </Typography>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Card;

import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { getColor, getNofiticationIcon } from "../../utils/utils-constant";
import { theme } from "../../themes/theme";

const Notification = () => {
  const { notifications, activities, contacts } = useSelector(
    (s) => s.dashboardSlice
  );
  return (
    <Box>
      <ActiveNotifications mainTitle={"Notifications"} items={notifications} />
      <ActiveNotifications
        mainTitle={"Activities"}
        items={activities}
        showProfileImage
      />
      <ActiveNotifications
        mainTitle={"Contacts"}
        items={contacts}
        showProfileImage
      />
    </Box>
  );
};

export default Notification;

const ActiveNotifications = ({
  mainTitle,
  items,
  showProfileImage = false,
}) => {
  return (
    <Box>
      <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
        {mainTitle}
      </Typography>
      <Box>
        {items.map((item) => (
          <Box key={item.id} sx={{ display: "flex", marginBottom: "1rem" }}>
            {showProfileImage ? (
              <Avatar
                src={item?.profile_image}
                sx={{ width: 24, height: 24, marginRight: "1rem" }}
              />
            ) : (
              <Box
                sx={{
                  padding: ".1rem",
                  background: getColor(item?.type),
                  height: "2rem",
                  marginRight: "1rem",
                  borderRadius: ".8rem",
                  "& svg": {
                    width: "2rem",
                    height: "2rem",
                  },
                }}
              >
                {getNofiticationIcon(item?.type)}
              </Box>
            )}
            <Box>
              <Typography
                sx={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 1,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "break-space",
                }}
              >
                {item?.title || item?.name}
              </Typography>
              <Typography sx={{ opacity: 0.5 }}>{item?.time}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

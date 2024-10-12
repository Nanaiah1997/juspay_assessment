import {
  Avatar,
  Box,
  Typography,
  Collapse,
  Divider,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate, useParams } from "react-router-dom";
import { theme } from "../../themes/theme";

const profile = {
  name: "John Doe",
  imageUrl: "/static/images/avatar/1.jpg",
};

const SideBar = () => {
  const { sidebar } = useSelector((s) => s.dashboardSlice);
  const { view } = useParams();
  return (
    <Box sx={{ padding: ".5rem" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          gap: "1rem",

          margin: "2rem 0rem 2rem 1rem ",
        }}
      >
        <Avatar
          alt={profile?.name}
          src={profile?.imageUrl}
          sx={{ width: 24, height: 24 }}
        />
        <Typography>{profile?.name}</Typography>
      </Box>
      {Object.entries(sidebar).map(([section, items], index) => (
        <Box key={section} sx={{ marginBottom: "4rem" }}>
          <Typography
            variant="body2"
            sx={{
              padding: ".2rem 1rem",
              backgroundColor: theme.palette.background.main,
              borderRadius: ".5rem",
              opacity: 0.5,
              "&:hover": {
                background: theme.palette.secondary.main,
              },
            }}
          >
            {section}
          </Typography>
          {items.map((item, i) => (
            <SidebarItem key={item.id} item={item} view={view} index={index} />
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default SideBar;

const SidebarItem = ({ item, view, index }) => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const navigate = useNavigate();

  const handleToggleSubmenu = (item) => {
    if (item.submenu) {
      setShowSubmenu((prev) => !prev);
    } else if (item?.url) {
      navigate(item?.url);
    }
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: ".2rem 1rem",
          cursor: "pointer",
          marginBottom: ".2rem",
          backgroundColor:
            view === item.key
              ? `${theme.palette.secondary.main}40`
              : "transparent",
          borderLeft:
            view === item.key
              ? `4px solid ${theme.palette.text.primary}`
              : "none",

          borderRadius: ".4rem",
          "&:hover": {
            backgroundColor: `${theme.palette.secondary.main}40`,
          },
        }}
        onClick={() => handleToggleSubmenu(item)}
      >
        <IconButton size="small">
          <IconButton size="small">
            {index === 0 ? (
              <Box
                sx={{
                  width: "0.5rem",
                  height: "0.5rem",
                  borderRadius: "50%",
                  backgroundColor: theme.palette.text.primary,
                  opacity: 0.5,
                }}
              />
            ) : (
              <ExpandMoreIcon
                sx={{
                  transform: showSubmenu ? "rotate(0deg)" : "rotate(270deg)",
                  transition: "transform 0.2s",
                  visibility: view !== item.key ? "visible" : "hidden",
                  fill: theme.palette.text.primary, // Set your desired color here
                  color: "inherit",
                }}
              />
            )}
          </IconButton>
        </IconButton>
        <Box
          sx={{
            marginRight: ".5rem",
            "& svg": {
              width: "2rem",
              height: "2rem",
              "& path": {
                fill: theme.palette.text.primary,
              },
            },
          }}
        >
          {item?.icon}
        </Box>
        <Typography
          sx={{
            color:
              view === item.key
                ? theme.palette.text.secondary
                : theme.palette.text.primary,
          }}
        >
          {item.title}
        </Typography>
      </Box>
      <Collapse in={showSubmenu}>
        <Box component="div" sx={{ pl: 8 }}>
          {item?.submenu?.map((subItem) => (
            <Box key={subItem.id} sx={{ padding: ".5rem 0rem" }}>
              <Typography>{subItem.title}</Typography>
            </Box>
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};

import { Avatar, Box, Typography, Collapse, IconButton } from "@mui/material";
import React, { useState } from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate, useParams } from "react-router-dom";
import { theme } from "../../themes/theme";
import cx from "clsx";
import useStyles from "./SideBar.styles";
import { sidebar } from "../../utils/dashBoardStructure";

const profile = {
  name: "John Doe",
  imageUrl: "/static/images/avatar/1.jpg",
};

const SideBar = () => {
  const classes = useStyles();

  const { view } = useParams();
  return (
    <Box className={classes.sidebarContainer}>
      <Box className={classes.profileBox}>
        <Avatar
          alt={profile?.name}
          src={profile?.imageUrl}
          sx={{ width: 24, height: 24 }}
        />
        <Typography>{profile?.name}</Typography>
      </Box>
      {Object.entries(sidebar).map(([section, items], index) => (
        <Box key={section} sx={{ marginBottom: "4rem" }}>
          <Typography variant="body2" className={classes.sectionHeader}>
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
  const classes = useStyles();
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
        className={cx(classes.itemBox, {
          [classes.activeItem]: view === item.key,
        })}
        onClick={() => handleToggleSubmenu(item)}
      >
        <IconButton size="small">
          <IconButton size="small">
            {index === 0 ? (
              <Box className={classes.dot} />
            ) : (
              <ExpandMoreIcon
                sx={{
                  transform: showSubmenu ? "rotate(0deg)" : "rotate(270deg)",
                  transition: "transform 0.2s",
                  visibility: view !== item.key ? "visible" : "hidden",
                  fill: theme.palette.text.primary,
                  color: "inherit",
                }}
              />
            )}
          </IconButton>
        </IconButton>
        <Box className={classes.icon}>{item?.icon}</Box>
        <Typography variant="body1">{item.title}</Typography>
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

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100vw",
    height: "100vh",
  },
  sidebar: {
    width: "17%",
    overflow: "auto",
    borderRight: `1px solid ${theme.palette.text.primary}4f`,
  },
  sidebarContent: {
    width: "15%",
  },
  mainContent: {
    width: "100%",
    transition: "width 0.3s ease",
  },
  mainContentNotifiy: {
    width: "70%",
  },

  notificationBar: {
    width: "17%",
    borderLeft: `1px solid ${theme.palette.text.primary}4f`,
    overflow: "hidden",
    transition: "width 0.3s ease, opacity 0.3s ease",
    padding: "2.5rem 3rem 1rem 2rem",
    overflow: "auto",
  },
  hidden: {
    width: "0%",
    opacity: 0,
    visibility: "hidden",
    padding: "0rem",
  },
}));

export default useStyles;

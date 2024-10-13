import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  sidebarContainer: {
    padding: ".5rem",
  },
  profileBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    gap: "1rem",
    margin: "2rem 0rem 2rem 1rem",
  },
  sectionHeader: {
    padding: ".2rem 1rem",
    backgroundColor: theme.palette.background.main,
    borderRadius: ".5rem",
    opacity: 0.5,
    "&:hover": {
      background: theme.palette.secondary.main,
      width: "fit-content",
    },
  },
  itemBox: {
    display: "flex",
    alignItems: "center",
    padding: ".2rem 1rem",
    cursor: "pointer",
    marginBottom: ".2rem",
    borderRadius: ".4rem",
    "&:hover": {
      backgroundColor: `${theme.palette.secondary.main}40`,
    },
  },
  activeItem: {
    backgroundColor: `${theme.palette.secondary.main}40`,
    borderLeft: `4px solid ${theme.palette.text.primary}`,
  },

  dot: {
    width: "0.5rem",
    height: "0.5rem",
    borderRadius: "50%",
    backgroundColor: theme.palette.text.primary,
    opacity: 0.5,
  },
  icon: {
    marginRight: ".5rem",
    "& svg": {
      width: "2rem",
      height: "2rem",
      "& path": {
        fill: theme.palette.text.primary,
      },
    },
  },
}));
export default useStyles;

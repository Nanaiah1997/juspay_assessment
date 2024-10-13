import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
    height: "7rem",
    borderBottom: `1px solid ${theme.palette.text.primary}4f`,
    display: "flex",
    alignItems: "center",
  },
  leftHeader: {
    width: "50%",
    paddingLeft: "3rem",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  rightHeader: {
    width: "50%",
    paddingRight: "3rem",
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
  },
  iconContainer: {
    display: "flex",
    gap: "1rem",
    "& svg": {
      width: "3rem",
      height: "3rem",
      "& path": {
        fill: theme.palette.text.primary,
      },
    },
  },
  searchBox: {
    width: "15rem",
    padding: "1rem",
  },
}));

export default useStyles;

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    background: theme.palette.background.main,
  },
  tableContainer: {
    background: theme.palette.background.main,
  },
  checkboxChecked: {
    color: theme.palette.text.primary,
  },
  headerCell: {
    background: theme.palette.background.main,
    opacity: 0.5,
  },
  userCell: {
    display: "flex",
    alignItems: "center",
    gap: ".5rem",
  },
  pagination: {
    float: "right",
    marginTop: "1rem",
    "& .Mui-selected": {
      borderRadius: "1rem",
    },
  },
  dot: {
    width: "0.5rem",
    height: "0.5rem",
    borderRadius: "50%",
    opacity: 0.5,
  },
}));
export default useStyles;

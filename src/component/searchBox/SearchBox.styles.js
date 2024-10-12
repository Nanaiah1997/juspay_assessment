import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  console.log(theme, ":::theme"); // Check the theme structure
  return {
    searchBox: {
      padding: "0.47rem 1.00rem",
      borderRadius: "6px",
      //border: `.1rem solid ${theme.palette.background.main}`,
      "& svg": {
        width: "1.26rem",
        height: "1.26rem",
      },
      "& .MuiInputBase-input": {
        fontSize: "1.11rem",
      },
    },
  };
});

export default useStyles;

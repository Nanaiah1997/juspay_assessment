import { createTheme } from "@mui/material";
import { Button, Typography } from "@mui/material";

const COLORS = {
  PRIMARY_MAIN: "#d5f2f5",
  BACKGROUND_MAIN: "#000000",
  SECONDARY_MAIN: "#dddddd",
  TEXT_PRIMARY: "#FFFFFF",
  TEXT_SECONDARY: "#000000",
  TEXT_050: "#FFFFFF55",
};
const GLOBALSTYLES = {
  body: {
    background: COLORS.BACKGROUND_MAIN,
    margin: 0,
  },
  html: {
    fontSize:
      window.innerWidth < 600
        ? "7px"
        : window.innerWidth < 1024
        ? "9px"
        : ".695vw",
  },
};
const FONT_FAMILY = {
  MAIN: "sans-serif",
};
const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.PRIMARY_MAIN,
    },
    secondary: {
      main: COLORS.SECONDARY_MAIN,
    },
    background: {
      main: COLORS.BACKGROUND_MAIN,
    },
    text: {
      primary: COLORS.TEXT_PRIMARY,
      secondary: COLORS.TEXT_SECONDARY,
      dark: COLORS.TEXT_050,
      disabled: "",
    },
  },
  typography: {
    fontFamily: FONT_FAMILY.MAIN,
    color: COLORS.TEXT_PRIMARY,
    allVariants: {
      color: COLORS.TEXT_PRIMARY,
    },
    h1: {
      fontSize: "3.53rem",
    },
    h2: {
      fontSize: "2.53rem",
    },
    h3: {
      fontSize: "2.21rem",
    },
    h4: {
      fontSize: "1.90rem",
    },
    h5: {
      fontSize: "1.74rem",
    },
    h6: {
      fontSize: "1.58rem",
    },
    body2: {
      fontSize: "1.42rem",
    },
    body1: {
      fontSize: "1.34rem",
    },
    subtitle2: {
      fontSize: "1.26rem",
    },
    subtitle1: {
      fontSize: "1.19rem",
    },
    title1: {
      fontSize: "1rem",
    },
  },
  globalStyles: GLOBALSTYLES,
});
Typography.defaultProps = {
  component: "div",
};

export default theme;

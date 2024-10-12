import darkTheme from "../themes/dark-theme";
import lightTheme from "../themes/light-theme";

export const themes = {
  DARK: darkTheme,
  LIGHT: lightTheme,
};

export let theme = themes["LIGHT"];
export const createNewTheme = (isLightTheme) => {
  if (isLightTheme) {
    theme = themes[`LIGHT`];
    return theme;
  } else {
    theme = themes["DARK"];
    return theme;
  }
};

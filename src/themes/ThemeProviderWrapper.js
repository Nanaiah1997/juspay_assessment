import React, { createContext, useContext, useState, useEffect } from "react";
import {
  GlobalStyles,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { createNewTheme } from "./theme";

export const ThemeContext = React.createContext({
  isLight: false,
  toggleTheme: () => undefined,
  theme: undefined,
});

export const ThemeProviderWrapper = ({ children, isDefaultLight }) => {
  const [isLightTheme, setIsLightTheme] = useState(isDefaultLight);

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
    localStorage.setItem("theme", (!isLightTheme).toString());
  };

  const theme = createNewTheme(isLightTheme);
  console.log(isLightTheme, theme, "isLightTheme");

  return (
    <ThemeContext.Provider
      value={{
        isLight: isLightTheme,
        toggleTheme,
        theme,
      }}
    >
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <GlobalStyles styles={theme?.globalStyles} />
          {children}
        </ThemeProvider>
      </StyledEngineProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

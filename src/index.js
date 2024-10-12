import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyles, ThemeProvider } from "@mui/material";
import { theme } from "./themes/theme";

import store from "./redux/stores/stores";
import { Provider } from "react-redux";
import { ThemeProviderWrapper } from "./themes/ThemeProviderWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));

const isLight = localStorage.getItem("theme") === "true";
root.render(
  <Provider store={store}>
    <ThemeProviderWrapper isDefaultLight={isLight}>
      <App />
    </ThemeProviderWrapper>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

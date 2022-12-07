import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
  },
});

const root = createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);

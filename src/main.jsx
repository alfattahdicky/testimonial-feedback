import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "980px",
    xl: "1200px",
    "2xl": "1400px",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

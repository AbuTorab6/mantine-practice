import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        components: {
          Button: {
            defaultProps: {
              styles: {
                root: {
                  border: "1.5px solid #9A9A9A",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "#F8F8FB",
                    color: "#2d4b81",
                  },
                },
              },
            },
          },
          Textinput: {
            defaultProps: {
              styles: {
                input: {
                  backgroundColor: "#F8F8FB",
                  color: "#2d4b81",
                },
              },
            },
          },
        },
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);

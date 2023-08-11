import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        colors: {
          // Add your color
          button: [
            "#eef3ff",
            "#dce4f5",
            "#b9c7e2",
            "#94a8d0",
            "#748dc1",
            "#5f7cb8",
            "#5474b4",
            "#44639f",
            "#39588f",
            "#2d4b81",
          ],
        },
        components: {
          Button: {
            defaultProps: {
              styles: {
                root: {
                  backgroundColor: "#f8f8fb",
                  color: "#2C2A83",
                  border: "1px solid #DCDBEF",
                  "&:hover": {
                    backgroundColor: "#F8F8FB",
                    color: "#2d4b81",
                  },
                },
              },
            },
          },
          Input: {
            defaultProps: {
              styles: {
                input: {
                  backgroundColor: "#F8F8FB",
                  color: "#2d4b81",
                  "&::placeholder": {
                    color: "red",
                  },
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

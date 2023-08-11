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
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";

import AntdProvider from "lib/antd/antd-provider";
import { HelmetProvider } from "react-helmet-async";
import { Provider as UrqlProvider } from "urql";
import { client } from "lib/urql";
import App from "app";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  // <React.StrictMode>
  <HelmetProvider>
    <UrqlProvider value={client}>
      <AntdProvider>
        <App />
      </AntdProvider>
    </UrqlProvider>
  </HelmetProvider>
  // </React.StrictMode>
);

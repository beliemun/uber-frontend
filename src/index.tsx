import React from "react";
import ReactDOM from "react-dom/client";
import { RootRouter } from "./routers";
import AntdProvider from "common/antd/antd-provider";
import { HelmetProvider } from "react-helmet-async";
import { Provider as UrqlProvider } from "urql";
import { client } from "common/urql";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <UrqlProvider value={client}>
        <AntdProvider>
          <RootRouter />
        </AntdProvider>
      </UrqlProvider>
    </HelmetProvider>
  </React.StrictMode>
);

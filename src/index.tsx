import React from "react";
import ReactDOM from "react-dom/client";
import { RootRouter } from "./routers";
import AntdProvider from "common/antd/antd-provider";
import { Provider } from "urql";
import { client } from "common/urql";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider value={client}>
      <AntdProvider>
        <RootRouter />
      </AntdProvider>
    </Provider>
  </React.StrictMode>
);

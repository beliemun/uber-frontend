import React from "react";
import ReactDOM from "react-dom/client";
import client from "./common/apollo/apollo";
import { ApolloProvider } from "@apollo/client";
import { RootRouter } from "./routers";
import AntdProvider from "common/antd/antd-provider";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AntdProvider>
        <RootRouter />
      </AntdProvider>
    </ApolloProvider>
  </React.StrictMode>
);

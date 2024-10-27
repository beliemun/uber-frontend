import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import RootRouter from "./routers/root-router";
import client from "./common/apollo/apollo";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RootRouter />
    </ApolloProvider>
  </React.StrictMode>
);

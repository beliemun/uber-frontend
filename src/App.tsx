import { ApolloProvider } from "@apollo/client";
import { RouterProvider } from "react-router-dom";
import client from "./common/apollo/apollo";
import { useState } from "react";
import privateRouter from "./routers/private-router";
import publicRouter from "./routers/public-router";
import "./common/tailwind/output.css";

const App = () => {
  const [isSignedUp] = useState(false);
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={isSignedUp ? privateRouter : publicRouter} />
    </ApolloProvider>
  );
};

export default App;

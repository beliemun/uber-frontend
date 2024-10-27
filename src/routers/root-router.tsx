import { gql, useQuery } from "@apollo/client";
import { RouterProvider } from "react-router-dom";
import privateRouter from "./private-router";
import publicRouter from "./public-router";

const IS_LOGGED_IN = gql`
  query isLoggedIn {
    isLoggedIn @client
  }
`;

const RootRouter = () => {
  const {
    data: { isLoggedIn },
  } = useQuery(IS_LOGGED_IN);
  return <RouterProvider router={isLoggedIn ? privateRouter : publicRouter} />;
};

export default RootRouter;

import { CreateAccountPage, SignInPage } from "pages/public";
import { PATH } from "./constants";
import { Route } from "./types";
import { HomePage } from "pages/private";

export const publicRoutes: Route[] = [
  { path: PATH.SIGN_IN, element: <SignInPage /> },
  { path: PATH.CREATE_ACCOUNT, element: <CreateAccountPage /> },
];

export const privateRoutes: Route[] = [{ path: PATH.HOME, element: <HomePage /> }];
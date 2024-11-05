import { SignInPage } from "pages/public";
import { PATH } from "./constants";
import { Route } from "./types";

export const publicRoutes: Route[] = [{ path: PATH.SIGN_IN, element: <SignInPage /> }];

import { CreateAccountPage, NotFoundPage, RootPage, SignInPage } from "pages/public";
import { createBrowserRouter } from "react-router-dom";

const publicRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/create-account",
    element: <CreateAccountPage />,
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
]);

export default publicRouter;

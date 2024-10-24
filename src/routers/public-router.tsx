import { createBrowserRouter } from "react-router-dom";
import { Home } from "../screens/public";

const publicRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default publicRouter;

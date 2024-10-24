import { createBrowserRouter } from "react-router-dom";
import { Home } from "../screens/private";

const privateRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default privateRouter;

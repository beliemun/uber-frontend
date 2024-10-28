import { createBrowserRouter } from "react-router-dom";
import { Home } from "pages/private";

const privateRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default privateRouter;

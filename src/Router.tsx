import { createBrowserRouter } from "react-router-dom";
import Root from "./App";
import { NotFound } from "./screens/NotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
    ],
    errorElement: <NotFound />,
  },
]);

export default router;

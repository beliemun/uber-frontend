import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "./screens/NotFound";
import RootRouter from "./routers/root-router";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRouter />,
    children: [
    ],
    errorElement: <NotFound />,
  },
]);

export default router;

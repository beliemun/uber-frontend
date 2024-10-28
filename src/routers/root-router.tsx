import "common/tailwind/output.css";
import privateRouter from "./private-router";
import publicRouter from "./public-router";
import { RouterProvider } from "react-router-dom";
import { useUserStore } from "stores";

const RootRouter = () => {
  const { isSignedIn } = useUserStore();
  return <RouterProvider router={isSignedIn ? privateRouter : publicRouter} />;
};

export default RootRouter;

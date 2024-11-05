import "common/tailwind/output.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Alert } from "components/molecules";
import { PublicRouteGuard, publicRoutes } from "routes";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          element: <PublicRouteGuard />,
          children: publicRoutes,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Alert />
    </>
  );
};

export default App;

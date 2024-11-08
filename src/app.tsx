import "lib/tailwind/output.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Alert } from "components/molecules";
import { PrivateRouteGuard, privateRoutes, PublicRouteGuard, publicRoutes } from "routes";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          element: <PublicRouteGuard />,
          children: publicRoutes,
        },
        {
          element: <PrivateRouteGuard />,
          children: privateRoutes,
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

import { createBrowserRouter } from "react-router-dom";
import { Home } from "./screens/Home";
import { About } from "./screens/About";
import Root from "./Root";
import { NotFound } from "./screens/NotFound";
import { Error } from "./components/Error";
import { User } from "./screens/users/User";
import { Followers } from "./screens/users/Followers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "home",
        Component: Home,
        errorElement: <Error />,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "users/:userId",
        Component: User,
        children: [
          {
            path: "followers",
            Component: Followers,
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;

// export default function Router() {
//   return (
//     <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route path="/" Component={Home} />
//         <Route path="/about" Component={About} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

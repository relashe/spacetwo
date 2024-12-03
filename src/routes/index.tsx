import { createBrowserRouter, RouteObject, RouterProvider } from "react-router";
import { useAuthContext } from "../providers";
import Home from "../screens/Home";
import { ProtectedRoute } from "./ProtectedRoute";
import Login from "../screens/Login";

const AppRoutes = () => {
  const { token } = useAuthContext();

  // Define public routes accessible to all users
  // const routesForPublic = [];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: "/login",
      element: <Login />,
    },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    // ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default AppRoutes;

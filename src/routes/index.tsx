import { createBrowserRouter, RouterProvider } from "react-router";
import { useAuthContext } from "../providers";
import Home from "../screens/Home";
import Login from "../screens/Login";
import { ProtectedRoute } from "./ProtectedRoute";
import { APP_ROUTES } from "../routing";
import CreateAccount from "../screens/CreateAccount";

const AppRoutes = () => {
  const { token } = useAuthContext();

  // Define public routes accessible to all users
  const routesForPublic = [
    {
      path: "/login",
      element: <Login />,
    },
  ];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: APP_ROUTES.HOME,
          element: <Home />,
        },
        {
          path: APP_ROUTES.CREATE_ACCOUNT,
          element: <CreateAccount />,
        },
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  // const routesForNotAuthenticatedOnly = [

  // ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForPublic,
    // ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default AppRoutes;

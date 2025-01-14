import { createBrowserRouter, RouterProvider } from "react-router";
import { APP_ROUTES } from "../routing";
import CreateAccount from "../screens/CreateAccount";
import Dashboard from "../screens/Dashboard";
import Home from "../screens/Home/Home";
import Login from "../screens/Login";
import { ProtectedRoute } from "./ProtectedRoute";

const AppRoutes = () => {
  // const { token } = useAuthContext();

  // Define public routes accessible to all users
  const routesForPublic = [
    {
      path: APP_ROUTES.HOME,
      element: <Home />,
    },
    {
      path: APP_ROUTES.LOGIN,
      exact: true,
      element: <Login />,
    },
  ];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: APP_ROUTES.DASHBOARD,
      element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: APP_ROUTES.USER_DASHBOARD,
          element: <Dashboard />,
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

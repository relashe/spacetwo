import { Navigate, Outlet } from "react-router";
import { useAuthContext } from "../providers";
import { APP_ROUTES } from "../routing";
import { Typography } from "@mui/material";

export const ProtectedRoute = () => {
  /* hooks */
  const { token } = useAuthContext();

  // Check if the user is authenticated
  if (!token) {
    // If not authenticated, redirect to the login page
    return <Navigate to={APP_ROUTES.LOGIN} />;
  }

  // If authenticated, render the child routes
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h1">SpaceTwo - Dashboard area</Typography>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

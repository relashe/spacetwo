import { Navigate, Outlet } from "react-router";
import Header from "../components/Header/Header";
import { useAuthContext, useLoginContext } from "../providers";
import { APP_ROUTES } from "../routing";

export const ProtectedRoute = () => {
  /* hooks */
  const { token } = useAuthContext();
  const { handleOpenLogin } = useLoginContext();

  // Check if the user is authenticated
  if (!token) {
    handleOpenLogin();
    // If not authenticated, redirect to the login page
    return <Navigate to={APP_ROUTES.HOME} />;
  }

  // If authenticated, render the child routes
  return (
    <div className="App">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

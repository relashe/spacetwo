import { Navigate, Outlet } from "react-router";
import { useAuthContext } from "../providers";

export const ProtectedRoute = () => {
  const { token } = useAuthContext();

  // Check if the user is authenticated
  if (!token) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }

  // If authenticated, render the child routes
  return (
    <div className="App">
      <header className="App-header">
        <p>SpaceTwo</p>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

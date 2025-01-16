import { BrowserRouter } from "react-router";
import AppRoutes from "./routes";
import { AuthProvider, LoginProvider } from "./providers";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <LoginProvider>
          <AppRoutes />
        </LoginProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

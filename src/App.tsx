import { Route, Routes } from "react-router";
import "./App.css";
import { APP_ROUTES } from "./routing";
import Home from "./screens/Home";
import Login from "./screens/Login";

function App() {
  return (
    <Routes>
      <Route index path={APP_ROUTES.LOGIN} element={<Login />} />
      <Route index path={APP_ROUTES.HOME} element={<Home />} />
    </Routes>
  );
}

export default App;

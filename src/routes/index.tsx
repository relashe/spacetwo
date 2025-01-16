import { Route, Routes } from "react-router";
import { APP_ROUTES } from "../routing";
import CreateSpaceTwoAccount from "../screens/CreateSpaceTwoAccount/CreateSpaceTwoAccount";
import Dashboard from "../screens/Dashboard/Dashboard";
import Home from "../screens/Home/Home";
import Login from "../screens/Login";
import { ProtectedRoute } from "./ProtectedRoute";
import DashboardLayout from "../screens/DashboardLayout/DashboardLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={APP_ROUTES.LOGIN} element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path={APP_ROUTES.DASHBOARD} element={<DashboardLayout />}>
          <Route path={APP_ROUTES.USER_DASHBOARD} element={<Dashboard />} />
        </Route>
        <Route
          path={APP_ROUTES.CREATE_ACCOUNT}
          element={<CreateSpaceTwoAccount />}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

import { Box, Stack } from "@mui/material";
import { Outlet } from "react-router";
import Header from "../../components/Header/Header";
import { dashboardLayoutStyles } from "./DashboardLayout.styles";

const DashboardLayout: React.FC = () => {
  return (
    <Stack direction="row" className="dashboard" sx={dashboardLayoutStyles}>
      <Box className="dashboard__sidebar">
        <Box className="dashboard__sidebar-inner" p={4}>
          <Header inDashboard />
        </Box>
      </Box>
      <Box className="dashboard__content">
        <Outlet />
      </Box>
    </Stack>
  );
};

export default DashboardLayout;

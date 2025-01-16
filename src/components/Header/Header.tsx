import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router";
import { APP_ROUTES } from "../../routing";
import { headerStyles } from "./Header.styles";
import { useAuthContext, useLoginContext } from "../../providers";

const Header: React.FC = () => {
  const { handleOpenLogin, handleOpenSignup } = useLoginContext();
  const { handleLogout } = useAuthContext();
  const { token } = useAuthContext();

  return (
    <Box component="header" className="header" sx={headerStyles}>
      <Container>
        <Box className="header__inner">
          <Typography variant="h2" className="header__title">
            <Link to={APP_ROUTES.HOME}>SpaceTwo</Link>
          </Typography>
          <Box className="nav" component="nav">
            {!token && (
              <Button variant="text" color="primary" onClick={handleOpenSignup}>
                Get started
              </Button>
            )}
            {!token && (
              <Button
                variant="contained"
                color="primary"
                onClick={handleOpenLogin}
                sx={{
                  background: "#000000",
                  color: "#FFFFFF",
                }}
              >
                Login
              </Button>
            )}
            {!!token && (
              <Button
                variant="contained"
                color="primary"
                onClick={handleLogout}
                sx={{
                  background: "#000000",
                  color: "#FFFFFF",
                }}
              >
                Logout
              </Button>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;

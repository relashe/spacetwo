import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router";
import { useAuthContext, useLoginContext } from "../../providers";
import { APP_ROUTES } from "../../routing";
import { headerStyles } from "./Header.styles";
import { HeaderProps } from "./HeaderProps";
import classnames from "classnames";

const Header: React.FC<HeaderProps> = ({ className, inDashboard }) => {
  const { handleOpenLogin, handleOpenSignup } = useLoginContext();
  const { handleLogout } = useAuthContext();
  const { token } = useAuthContext();

  /* values */
  const classes = classnames(
    "header",
    {
      "header--dashboard": inDashboard,
    },
    className
  );

  return (
    <Box component="header" className={classes} sx={headerStyles}>
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

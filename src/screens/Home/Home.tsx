import { Box, Container, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "../../components/Header/Header";
import { useAuthContext } from "../../providers";
import { APP_ROUTES } from "../../routing";
import { homeStyles } from "./Home.styles";

const Home: React.FC = () => {
  /* hooks */
  const { token, user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!!token && !!user) {
      navigate(`${APP_ROUTES.DASHBOARD}/${user.handle}`);
    }
  }, [token, user, navigate]);

  return (
    <Box className="home-page" sx={homeStyles}>
      <Header />

      <Box className="home-page__content">
        <Container>
          <Box className="home-page__hero">
            <Typography variant="h1">Welcome to SpaceTwo</Typography>
            <Typography variant="h4" mt={4}>
              Your space to create, collaborate and show your talent in real
              time
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;

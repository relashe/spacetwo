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
  }, []);

  return (
    <Box className="home-page" sx={homeStyles}>
      <Header />

      <Box className="home-page__content">
        <Container>
          <Box className="home-page__hero">
            <Typography variant="h1">This is the homepage</Typography>
            <Typography variant="body1">This is the slogan</Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;

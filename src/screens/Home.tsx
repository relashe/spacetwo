import { Box, Typography } from "@mui/material";
import { Link } from "react-router";
import { useAuthContext } from "../providers";
import { APP_ROUTES } from "../routing";

const Home: React.FC<{}> = ({}) => {
  /* hooks */
  const { token, user } = useAuthContext();

  return (
    <Box>
      <header className="App-header">
        <Typography variant="h1">
          <Link to={APP_ROUTES.HOME}>SpaceTwo</Link>
        </Typography>
      </header>
      {!token && <Link to={APP_ROUTES.LOGIN}>Login to your account</Link>}
      {!!(token && user) && (
        <Link to={`${APP_ROUTES.DASHBOARD}/${user.handle}`}>Dashboard</Link>
      )}
    </Box>
  );
};

export default Home;

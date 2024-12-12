import { Container, Typography } from "@mui/material";
import LoginActions from "../components/LoginActions/LoginActions";
import { Link } from "react-router";
import { APP_ROUTES } from "../routing";

const Login: React.FC<{}> = ({}) => {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h1">
          <Link to={APP_ROUTES.HOME}>SpaceTwo</Link>
        </Typography>
      </header>
      <main>
        <Container maxWidth="sm">
          <LoginActions />
        </Container>
      </main>
    </div>
  );
};

export default Login;

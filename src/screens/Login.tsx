import { Container } from "@mui/material";
import Header from "../components/Header/Header";
import LoginActions from "../components/LoginActions/LoginActions";

const Login: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Container maxWidth="sm">
          <LoginActions />
        </Container>
      </main>
    </div>
  );
};

export default Login;

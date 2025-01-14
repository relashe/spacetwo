import { Container } from "@mui/material";
import { useEffect } from "react";
import Header from "../components/Header/Header";
import { useLoginContext } from "../providers";

const Login: React.FC = () => {
  const { handleOpenLogin } = useLoginContext();

  useEffect(() => {
    handleOpenLogin();
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Container maxWidth="sm">{/* <LoginActions /> */}</Container>
      </main>
    </div>
  );
};

export default Login;

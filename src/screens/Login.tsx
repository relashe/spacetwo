import { useNavigate } from "react-router";
import LoginActions from "../components/LoginActions/LoginActions";
import { useAuthContext } from "../providers";
import { APP_ROUTES } from "../routing";
import { useEffect } from "react";

const Login: React.FC<{}> = ({}) => {
  /* hooks */
  const { token } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate(APP_ROUTES.HOME);
    }
  }, [token]);

  return (
    <div className="App">
      <header className="App-header">
        <p>SpaceTwo</p>
      </header>
      <main>
        <LoginActions />
      </main>
    </div>
  );
};

export default Login;

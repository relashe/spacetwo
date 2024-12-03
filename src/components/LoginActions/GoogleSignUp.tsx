import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useAuthContext } from "../../providers";
import { useNavigate } from "react-router";
import { APP_ROUTES } from "../../routing";

const GoogleSignUp: React.FC<{}> = ({}) => {
  /* hooks */
  const { setToken } = useAuthContext();
  const navigate = useNavigate();

  /* events */
  const handleSuccessLogin = (credentialResponse: CredentialResponse) => {
    console.log(credentialResponse);

    if (credentialResponse.credential) {
      setToken(credentialResponse.credential);
      navigate(APP_ROUTES.HOME);
    }
  };

  return (
    <GoogleLogin
      auto_select
      onSuccess={handleSuccessLogin}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default GoogleSignUp;

import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

const GoogleSignUp: React.FC<{}> = ({}) => {
  return (
    <GoogleLogin
      auto_select
      onSuccess={(credentialResponse: CredentialResponse) => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default GoogleSignUp;

import { useGoogleLogin } from "@react-oauth/google";
import { useAuthContext } from "../../providers";
import { useNavigate } from "react-router";
import { APP_ROUTES } from "../../routing";
import useSpaceTwoUsers from "../../hooks/useSpaceTwoUsers";
import { apiService } from "../..";
import { API_ENDPOINTS } from "../../constants";
import { Button } from "@mui/material";
import { GoogleProfile } from "../../types/google.types";

const GoogleSignUp: React.FC<{}> = ({}) => {
  /* hooks */
  const { setToken, setUser } = useAuthContext();
  const navigate = useNavigate();
  const { getSpaceTwoUserWithEmail } = useSpaceTwoUsers();

  /* events */
  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (token) => {
      setToken(token.access_token);

      // get Google Info
      const userProfile = await apiService.get<GoogleProfile>(
        API_ENDPOINTS.GOOGLE.GET_USER_INFO(token.access_token),
        token.access_token
      );

      // check if user exists
      if (!userProfile) {
        navigate(APP_ROUTES.CREATE_ACCOUNT);
      } else {
        const spaceTwoUser = await getSpaceTwoUserWithEmail(userProfile.email);

        if (!spaceTwoUser) {
          navigate(
            `${APP_ROUTES.CREATE_ACCOUNT}?email=${userProfile.email}&name=${userProfile.given_name}%20${userProfile.family_name}`
          );
        } else {
          setUser(spaceTwoUser);
          navigate(APP_ROUTES.HOME);
        }
      }

      console.info(userProfile);
    },
    onError: () => {
      console.log("Login Failed");
    },
  });

  return (
    <>
      <Button
        onClick={() => {
          handleGoogleLogin();
        }}
      >
        Log In
      </Button>
    </>
  );
};

export default GoogleSignUp;

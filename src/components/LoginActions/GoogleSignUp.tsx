import { Button } from "@mui/material";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router";
import useSpaceTwoUsers from "../../hooks/useSpaceTwoUsers";
import { useAuthContext, useLoginContext } from "../../providers";
import { APP_ROUTES } from "../../routing";

const GoogleSignUp: React.FC = () => {
  /* hooks */
  const { setToken, setUser, getUserProfile } = useAuthContext();
  const { handleCloseModal } = useLoginContext();
  const { getSpaceTwoUserWithEmail } = useSpaceTwoUsers();
  const navigate = useNavigate();

  /* events */
  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (token) => {
      setToken(token.access_token);
      handleCloseModal();

      const userProfile = await getUserProfile();

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
          navigate(`${APP_ROUTES.DASHBOARD}/${spaceTwoUser.handle}`);
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
        fullWidth
        variant="contained"
        size="large"
      >
        Log In with Google
      </Button>
    </>
  );
};

export default GoogleSignUp;

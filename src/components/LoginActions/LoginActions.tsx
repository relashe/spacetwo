import { Box, Button } from "@mui/material";
import GoogleSignUp from "./GoogleSignUp";

const LoginActions: React.FC<{}> = ({}) => {
  return (
    <Box>
      <Button>Sign in (With Google)</Button>
      <GoogleSignUp />
    </Box>
  );
};

export default LoginActions;

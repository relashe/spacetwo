import { Button, Stack, TextField, Typography } from "@mui/material";
import { useRef } from "react";
import GoogleSignUp from "./GoogleSignUp";
import { useLoginContext } from "../../providers";

const LoginActions: React.FC = () => {
  /* hooks */
  const emailLoginRef = useRef();
  const { showLogin, showSignUp, handleOpenLogin, handleOpenSignup } =
    useLoginContext();

  return (
    <Stack gap={4} my={12}>
      {showLogin && (
        <>
          <GoogleSignUp />
          <Typography variant="body2">Need an account?</Typography>
          <Button variant="text" onClick={handleOpenSignup}>
            Register
          </Button>
        </>
      )}
      {showSignUp && (
        <>
          <Typography variant="h4">Sign Up</Typography>
          <TextField
            label="Email address"
            variant="outlined"
            inputRef={emailLoginRef}
            helperText="not being used at the moment"
          />
          <TextField
            label="First Name"
            variant="outlined"
            helperText="not being used at the moment"
          />
          <TextField
            label="Last Name"
            variant="outlined"
            helperText="not being used at the moment"
          />
          <TextField
            label="Password"
            variant="outlined"
            helperText="not being used at the moment"
          />
          <Button variant="text" onClick={handleOpenLogin}>
            Already have an account?
          </Button>
        </>
      )}
    </Stack>
  );
};

export default LoginActions;

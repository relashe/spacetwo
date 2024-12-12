import { Stack, TextField } from "@mui/material";
import { useRef } from "react";
import GoogleSignUp from "./GoogleSignUp";

const LoginActions: React.FC = () => {
  /* hooks */
  const emailLoginRef = useRef();

  return (
    <Stack gap={4} my={12}>
      <GoogleSignUp />
      <TextField
        label="Email address"
        variant="outlined"
        inputRef={emailLoginRef}
        helperText="not being used at the moment"
      />
    </Stack>
  );
};

export default LoginActions;

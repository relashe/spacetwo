import { Box, Button, Link, Stack, TextField, Typography } from "@mui/material";
import { useRef } from "react";
import GoogleSignUp from "./GoogleSignUp";
import { useLoginContext } from "../../providers";

const LoginActions: React.FC = () => {
  /* hooks */
  const emailLoginRef = useRef();
  const { showLogin, showSignUp, handleOpenLogin, handleOpenSignup } =
    useLoginContext();

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        padding={{
          xs: 6,
          md: 8,
        }}
      >
        <Typography variant="h4" mb={4}>
          {showLogin ? "Login" : "Sign Up"}
        </Typography>
        <Stack gap={4}>
          {showLogin && (
            <>
              <GoogleSignUp />
              <Button
                onClick={() => {}}
                fullWidth
                variant="contained"
                size="large"
              >
                Log In with Email
              </Button>
              <Box>
                <Typography variant="body2">Need an account?</Typography>
                <Link
                  underline="none"
                  onClick={handleOpenSignup}
                  sx={{ cursor: "pointer" }}
                >
                  Register
                </Link>
              </Box>
            </>
          )}
          {showSignUp && (
            <>
              <TextField
                label="Email address"
                variant="standard"
                inputRef={emailLoginRef}
                helperText="not being used at the moment"
              />
              <TextField
                label="First Name"
                variant="standard"
                helperText="not being used at the moment"
              />
              <TextField
                label="Last Name"
                variant="standard"
                helperText="not being used at the moment"
              />
              <TextField
                label="Password"
                variant="standard"
                helperText="not being used at the moment"
              />
              <Link
                underline="none"
                onClick={handleOpenLogin}
                sx={{ cursor: "pointer" }}
              >
                Already have an account?
              </Link>
            </>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default LoginActions;

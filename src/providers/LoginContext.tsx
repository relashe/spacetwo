import { Box, CardMedia, Dialog, DialogContent, Stack } from "@mui/material";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import LoginActions from "../components/LoginActions/LoginActions";

interface LoginContextProps {
  handleOpenLogin: () => void;
  handleOpenSignup: () => void;
  handleCloseModal: () => void;
  showLogin: boolean;
  showSignUp: boolean;
}

const LoginContext = createContext<LoginContextProps | null>(null);

export const LoginProvider: React.FC<PropsWithChildren> = ({ children }) => {
  /* state */
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [showSignUp, setShowSignUp] = useState<boolean>(false);

  /* effects */

  /* events */
  const handleOpenLogin = () => {
    setShowLogin(true);
    setShowSignUp(false);
  };

  const handleOpenSignup = () => {
    setShowSignUp(true);
    setShowLogin(false);
  };

  const handleCloseModal = () => {
    setShowLogin(false);
    setShowSignUp(false);
  };

  /* values */
  const showModal = showLogin || showSignUp;

  return (
    <LoginContext.Provider
      value={{
        handleOpenLogin,
        handleOpenSignup,
        handleCloseModal,
        showLogin,
        showSignUp,
      }}
    >
      {children}
      <Dialog
        open={showModal}
        onClose={handleCloseModal}
        maxWidth="sm"
        sx={{
          "& .MuiPaper-root": {
            width: "80%",
            maxWidth: "none",
          },
        }}
      >
        <DialogContent
          sx={{
            padding: 0,
            height: "85vh",
          }}
        >
          <Stack direction="row" height="100%">
            <Box
              sx={{
                flex: {
                  xs: "0 0 100%",
                  md: "0 0 50%",
                },
              }}
            >
              <LoginActions />
            </Box>
            <Box
              sx={{
                flex: {
                  xs: "0 0 100%",
                  md: "0 0 50%",
                },
              }}
            >
              <CardMedia
                sx={{ height: "100%" }}
                image="https://placehold.co/1000x600"
                title="Login Media"
              />
            </Box>
          </Stack>
        </DialogContent>
      </Dialog>
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => {
  const context = useContext(LoginContext);
  if (context === undefined || context === null) {
    throw new Error("useLogin can only be used inside LoginProvider");
  }
  return context;
};

import { Dialog, DialogContent, Modal } from "@mui/material";
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
      <Dialog open={showModal} onClose={handleCloseModal}>
        <DialogContent>
          <LoginActions />
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
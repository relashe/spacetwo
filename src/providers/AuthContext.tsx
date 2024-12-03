import { createContext, PropsWithChildren, useContext } from "react";

interface AuthContextProps {
  user?: any;
  accessToken?: string;
}

const AuthContext = createContext<AuthContextProps | null>({});

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined || context === null) {
    throw new Error("useAuth can only be used inside AuthProvider");
  }
  return context;
};

import axios from "axios";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { SpaceTwoBaseUser } from "../types";

interface AuthContextProps {
  user?: SpaceTwoBaseUser;
  setUser: (newUser: SpaceTwoBaseUser) => void;
  token: string | null;
  setToken: (newToken: string) => void;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  /* state */
  const [token, setToken_] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState<SpaceTwoBaseUser | undefined>(undefined);

  /* effects */
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      localStorage.setItem("token", token);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    }
  }, [token]);

  /* events */
  const setToken = (newToken: string) => {
    setToken_(newToken);
  };

  /* values */
  const contextValue = useMemo(
    () => ({
      token,
      setToken,
      user,
      setUser,
    }),
    [token, user]
  );

  return (
    <AuthContext.Provider value={{ ...contextValue }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined || context === null) {
    throw new Error("useAuth can only be used inside AuthProvider");
  }
  return context;
};

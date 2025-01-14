import axios from "axios";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { SpaceTwoBaseUser } from "../types";
import { apiService } from "..";
import { GoogleProfile } from "../types/google.types";
import { API_ENDPOINTS } from "../constants";

interface AuthContextProps {
  user?: SpaceTwoBaseUser;
  setUser: (newUser: SpaceTwoBaseUser) => void;
  token: string | null;
  setToken: (newToken: string) => void;
  getUserProfile: () => Promise<GoogleProfile | undefined>;
  handleLogout: () => void;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  /* state */
  const [token, setToken_] = useState<string | null>(
    localStorage.getItem("token")
  );
  const [user, setUser] = useState<SpaceTwoBaseUser | undefined>(undefined);

  /* callbacks */
  const getUserProfile = useCallback(async () => {
    if (!token) return;

    // get Google Info
    return await apiService.get<GoogleProfile>(
      API_ENDPOINTS.GOOGLE.GET_USER_INFO(token),
      token
    );
  }, [token]);

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

  const handleLogout = () => {
    setToken_(null);
  };

  /* values */
  const contextValue = useMemo(
    () => ({
      token,
      setToken,
      user,
      setUser,
      getUserProfile,
      handleLogout,
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

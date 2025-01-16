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
import { useNavigate } from "react-router";
import { APP_ROUTES } from "../routing";
import useSpaceTwoUsers from "../hooks/useSpaceTwoUsers";

interface AuthContextProps {
  user?: SpaceTwoBaseUser;
  token: string | null;
  setToken: (newToken: string) => void;
  getUserProfile: (accessToken: string) => Promise<GoogleProfile | undefined>;
  handleLogin: (newUser: SpaceTwoBaseUser) => void;
  handleLogout: () => void;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  /* hooks */
  const { getSpaceTwoUserWithEmail } = useSpaceTwoUsers();

  /* state */
  const navigate = useNavigate();
  const [token, setToken_] = useState<string | null>(
    localStorage.getItem("token")
  );
  const [user, setUser] = useState<SpaceTwoBaseUser | undefined>(undefined);

  /* callbacks */
  const getUserProfile = useCallback(async (accessToken: string) => {
    // get Google Info
    return await apiService.get<GoogleProfile>(
      API_ENDPOINTS.GOOGLE.GET_USER_INFO(accessToken),
      accessToken
    );
  }, []);

  /* callbacks */
  const retrieveSpaceTwoUser = useCallback(async (email: string) => {
    const spaceTwoUser = await getSpaceTwoUserWithEmail(email);

    setUser(spaceTwoUser);
  }, []);

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

  useEffect(() => {
    const loggedUser = localStorage.getItem("logged_user");

    if (!user && loggedUser) {
      retrieveSpaceTwoUser(loggedUser);
    }
  }, [user]);

  /* events */
  const setToken = (newToken: string) => {
    setToken_(newToken);
  };

  const handleLogin = (user: SpaceTwoBaseUser) => {
    setUser(user);
    localStorage.setItem("logged_user", user.email);
  };

  const handleLogout = () => {
    setToken_(null);
    setUser(undefined);
    localStorage.removeItem("logged_user");
    navigate(APP_ROUTES.HOME);
  };

  /* values */
  const contextValue = useMemo(
    () => ({
      token,
      setToken,
      user,
      getUserProfile,
      handleLogout,
      handleLogin,
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

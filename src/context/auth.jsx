/* eslint-disable react/prop-types */
import { createContext, useContext, useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage("isLoggedIn", false);
  const [userInfo, setUserInfo] = useLocalStorage("userInfo", null);
  const [isToken, setIsToken] = useLocalStorage("token", null);

  const login = (data) => {
    setUser(data);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    setUserInfo(null);
  };



  const value = useMemo(
    () => ({
      user,
      isLoggedIn,
      userInfo,
      login,
      logout,
      setUserInfo,
      isToken,
      setIsToken,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  return useContext(AuthContext);
}

const SetUserInfoAndLogin = (data) => {
  const { login, setUser, setUserInfo } = useAuth();
  setUser(data);
  setUserInfo(data);
  login(data);
};

export default SetUserInfoAndLogin;

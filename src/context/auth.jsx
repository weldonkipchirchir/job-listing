/* eslint-disable react/prop-types */
import { createContext, useContext, useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage("userLoggedIn", false);
  const [userInfo, setUserInfo] = useLocalStorage("userInformation", null);
  const [token, setToken] = useLocalStorage("authToken","")
  const value = useMemo(
    () => ({
      isLoggedIn,
      userInfo,
      setUserInfo,
      setIsLoggedIn,
      token,
      setToken
    }),
    [userInfo]
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

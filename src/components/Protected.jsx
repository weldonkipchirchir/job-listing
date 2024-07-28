/* eslint-disable react/prop-types */
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth";
export const ProtectedRoute = () => {
  const location = useLocation();
  const pathname = location.pathname || "/";
  const { userInfo } = useAuth();
  

  if (!userInfo) {
    return <Navigate to="/sign-in" state={{ pathname }} />;
  }
  return <Outlet />;
};

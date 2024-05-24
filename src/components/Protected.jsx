/* eslint-disable react/prop-types */
import { Navigate, Outlet, useLocation } from "react-router-dom";
// import { useAuth } from "../context/auth";
export const ProtectedRoute = () => {
  const location = useLocation();
  const pathname = location.pathname || "/";
//   const { user } = useAuth();
  
    let user = "user";
    // let user = null;

  if (!user) {
    // user is not authenticated
    return <Navigate to="/sign-in" state={{ pathname }} />;
  }
  return <Outlet />;
};

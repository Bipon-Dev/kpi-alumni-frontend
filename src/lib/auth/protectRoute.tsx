import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import useAuthStore from "../stores/authStore";

interface ProtectedRouteProps {
  element: ReactNode;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ element }) => {
  // if (!isAuthenticated && loading === false) {
  //   // Redirect to login page if not authenticated
  //   return <Navigate to="/login" />;
  // }

  return element;
};

export default ProtectedRoute;

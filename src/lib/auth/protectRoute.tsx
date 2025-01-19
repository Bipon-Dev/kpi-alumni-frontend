import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  element: ReactNode;
  isAuthenticated: boolean;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ element, isAuthenticated }) => {
  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login" />;
  }

  return element; // Render the protected route if authenticated
};

export default ProtectedRoute;

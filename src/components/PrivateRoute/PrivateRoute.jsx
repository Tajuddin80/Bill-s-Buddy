import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import Loader from "../Loader/Loader";  // optional custom loader component

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // Show a loader while authentication state is still being determined
  if (loading) {
    return <Loader></Loader>// or use a spinner, skeleton, etc.
  }

  // If not authenticated, redirect to sign-in
  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  // Authenticated: render the child route
  return children;
};

export default PrivateRoute;

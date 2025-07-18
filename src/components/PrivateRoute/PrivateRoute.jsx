import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import Loader from "../Loader/Loader"; 

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

 
  if (loading) {
    return <Loader></Loader>
  }


  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

 
  return children;
};

export default PrivateRoute;

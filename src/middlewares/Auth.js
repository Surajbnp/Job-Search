import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const Auth = ({ children }) => {
  const location = useLocation();
  let currentUser = localStorage.getItem("myjobtoken");

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};

export default Auth;

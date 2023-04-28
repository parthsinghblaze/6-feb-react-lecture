import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Private({ children }) {
  const { isLogin } = useSelector((state) => state.login);

  if (isLogin) {
    return children;
  }

  return <Navigate to="/login" />;
}

export default Private;

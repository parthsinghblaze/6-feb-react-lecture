import React, { useContext } from "react";
import { LoginWrapper } from "../App";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { isLogin } = useContext(LoginWrapper);

  if (isLogin) {
    return <div>{children}</div>;
  } else {
    return <Navigate to="/login" />;
  }
}

export default PrivateRoute;

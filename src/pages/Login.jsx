import React, { useContext } from "react";
import { LoginWrapper } from "../App";
import { useNavigate } from "react-router-dom";

function Login() {
  const { isLogin, setIsLogin } = useContext(LoginWrapper);

  const navigate = useNavigate();

  function handleLogin() {
    setIsLogin(true);
    localStorage.setItem("isLogin", "true");
    navigate("/cocktail-drinks");
  }

  return (
    <div className="container py-5">
      <h1 className="mb-3">Please Login</h1>
      <button className="btn btn-primary" onClick={() => handleLogin()}>
        Login
      </button>
    </div>
  );
}

export default Login;

import React, { useContext } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { LoginWrapper } from "../App";

function Header() {
  const { isLogin, setIsLogin, cart } = useContext(LoginWrapper);

  const navigate = useNavigate();

  function handleLogout() {
    setIsLogin(false);
    localStorage.removeItem("isLogin");
    navigate("/");
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" aria-current="page">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/gallery" className="nav-link">
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cocktail-drinks" className="nav-link">
                Drinks
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/product" className="nav-link">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cart" className="nav-link">
                Cart <span className="badge bg-danger">{cart.length}</span>
              </NavLink>
            </li>
          </ul>
        </div>
        {isLogin ? (
          <button className="btn btn-danger" onClick={() => handleLogout()}>
            Logout
          </button>
        ) : (
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Header;

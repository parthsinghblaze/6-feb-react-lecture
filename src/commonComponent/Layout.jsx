import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function Layout({ children }) {
  const { menuOpen } = useSelector((state) => state.menu);
  const [loginPage, setLoginPage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login") {
      setLoginPage(true);
    } else {
      setLoginPage(false);
    }
  }, [location]);

  return (
    <div className="container-fluid row">
      {loginPage ? null : (
        <div className="col-md-2 p-0 d-none d-md-block ">
          <SideBar />
        </div>
      )}

      <div
        className={`col-md-2 p-0 mobile-menu d-block d-md-none ${
          menuOpen ? "show-menu" : ""
        } `}
      >
        <SideBar />
      </div>
      <div className={`col-md-${loginPage ? "12" : "10"} p-0`}>
        <Header />
        {children}
      </div>
    </div>
  );
}

export default Layout;

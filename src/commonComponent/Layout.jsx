import React from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import { useSelector } from "react-redux";

function Layout({ children }) {
  const { menuOpen } = useSelector((state) => state.menu);

  return (
    <div className="container-fluid row">
      <div className="col-md-2 p-0 d-none d-md-block ">
        <SideBar />
      </div>
      <div
        className={`col-md-2 p-0 mobile-menu d-block d-md-none ${
          menuOpen ? "show-menu" : ""
        } `}
      >
        <SideBar />
      </div>
      <div className="col-md-10 p-0">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default Layout;

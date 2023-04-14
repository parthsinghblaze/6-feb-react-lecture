import React from "react";
import SideBar from "./SideBar";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="container-fluid row">
      <div className="col-md-2 p-0 d-none d-md-block ">
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

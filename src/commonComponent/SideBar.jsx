import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { navLink } from "../utilis/navLinks";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className="bg-dark text-white" style={{ height: "100vh" }}>
      <h3 className="text-center py-4">Admin</h3>
      <ListGroup>
        {navLink.map((item) => {
          const { id, title, link } = item;
          return (
            <ListGroup.Item className="bg-dark text-white">
              <NavLink className="nav-link w-100" to={link}>
                {title}
              </NavLink>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}

export default SideBar;

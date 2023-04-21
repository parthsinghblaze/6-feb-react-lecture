import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { navLink } from "../utilis/navLinks";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className="bg-dark text-white" style={{ height: "100vh" }}>
      <h3 className="text-center py-4">Admin</h3>
      <ul className="list-group">
        {navLink.map((item, index) => {
          const { id, title, link, subItem } = item;
          return (
            <li key={id} className="list-group-item bg-dark text-white">
              {subItem.length > 0 && (
                <NavLink
                  className="nav-link w-100"
                  to={link}
                  data-bs-toggle="collapse"
                  data-bs-target={`#${id}`}
                >
                  {title}
                </NavLink>
              )}
              {subItem.length === 0 && (
                <NavLink className="nav-link w-100" to={link}>
                  {title}
                </NavLink>
              )}

              <ul className="collapse" id={id}>
                {subItem.map((item) => {
                  const { title, id } = item;
                  return (
                    <li key={id} className="list-group-item bg-dark text-white">
                      <NavLink className="nav-link w-100" to={link}>
                        {title}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SideBar;

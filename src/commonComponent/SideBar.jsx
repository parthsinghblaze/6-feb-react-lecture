import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { navLink } from "../utilis/navLinks";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className="bg-dark text-white" style={{ height: "100vh" }}>
      <h3 className="text-center py-4">Admin</h3>
      <ul className="list-group">
        {navLink.map((item) => {
          const { id, title, link, subItem } = item;
          return (
            <>
              <li className="list-group-item bg-dark text-white">
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

                <div className="collapse" id={id}>
                  {subItem.map((item) => {
                    const { title } = item;
                    return (
                      <li className="list-group-item bg-dark text-white">
                        <NavLink className="nav-link w-100" to={link}>
                          {title}
                        </NavLink>
                      </li>
                    );
                  })}
                </div>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default SideBar;

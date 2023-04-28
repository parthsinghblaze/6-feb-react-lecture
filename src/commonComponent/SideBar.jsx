import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { navLink } from "../utilis/navLinks";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu } from "../redux/menuSlice";

function SideBar() {
  const dispatch = useDispatch();

  // const location = useLocation();

  // if (location.pathname === "/login") {
  //   return null;
  // }

  return (
    <div
      className="bg-dark text-white"
      style={{ minHeight: "100vh", height: "100%" }}
    >
      <div className="d-flex d-lg-none justify-content-end p-3">
        <button onClick={() => dispatch(closeMenu())}>Close</button>
      </div>
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

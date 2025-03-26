import React from "react";
import { NavLink } from "react-router-dom";
import { path } from "../../const/path";
import "./Header.css";
import Cart from "../Cart/Cart";
export default function Header() {
  return (
    <div>
      <div className="header-component">
        <div className="navigation-component">
          <ul>
            <li>
              <NavLink
                to={path.home}
                className={({ isActive }) => (isActive ? "active-link" : "")}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to={path.menu}
                className={({ isActive }) => (isActive ? "active-link" : "")}
                end
              >
                menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to={path.lienHe}
                className={({ isActive }) => (isActive ? "active-link" : "")}
                end
              >
                lien he
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <Cart />
        </div>
      </div>
    </div>
  );
}

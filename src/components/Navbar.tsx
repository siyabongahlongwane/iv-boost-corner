import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navItems = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about-us",
      name: "About us",
    },
    {
      path: "/products",
      name: "Products",
    },
    {
      path: "/contact-us",
      name: "Contact us",
    },
  ];
  return (
    <div className="navbar d-flex flex-row block white-bg full-height justify-content-between">
      <div className="logo d-flex flex-col justify-content-center">
        <img className="block" src={logo} alt="IV Boost Logo" />
      </div>
      <div className="nav-links d-flex flex-col justify-content-center">
        <div className="menu-icon relative">
          <span className={!showMenu ? "d-block" : "d-none"}>
            <i
              onClick={() => setShowMenu(true)}
              className={"fa fa-bars primary-col"}
            ></i>
          </span>
          <span className={showMenu ? "d-block" : "d-none"}>
            <i
              onClick={() => setShowMenu(false)}
              className={
                "fa fa-close primary-col"
              }
            ></i>
          </span>
        </div>

        <ul className="d-flex flex-row d-none">
          {navItems.map(({ path, name }) => {
            return (
              <li>
                <NavLink
                  key={name}
                  className={({ isActive }) => (isActive ? "primary-col" : "")}
                  to={path}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <button className="primary-bg white-col get-started-btn d-none">
        <NavLink className="no-decoration white-col" to={"/contact-us"}>
          Get Started
        </NavLink>
      </button>

      <div className={"menu-items absolute white-bg " + (showMenu ? "d-block" : "d-none")}>
        <ul className="d-flex flex-col remove-list-styles align-items-center gap-xs align-center-xs">
          {navItems.map(({ path, name }) => {
            return (
              <li>
                <NavLink
                  key={path}
                  className={({ isActive }) =>
                    isActive
                      ? "primary-col no-decoration"
                      : "black-col no-decoration"
                  }
                  to={path}
                  onClick={() => setShowMenu(false)}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

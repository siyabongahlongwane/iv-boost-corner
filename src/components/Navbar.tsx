import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="navbar d-flex flex-row block white-bg full-height justify-content-between">
      <div className="logo d-flex flex-col justify-content-center">
        <img className="block" src={logo} alt="IV Boost Logo" />
      </div>
      <div className="nav-links d-flex flex-col justify-content-center">
        <ul className="d-flex flex-row ">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "primary-col" : "")}
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "primary-col" : "")}
              to="/about-us"
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "primary-col" : "")}
              to="/products"
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "primary-col" : "")}
              to="/contact-us"
            >
              Contact us
            </NavLink>
          </li>
        </ul>
      </div>
      <button className="primary-bg white-col get-started-btn">
        <NavLink className="no-decoration white-col" to={'/contact-us'}>Get Started</NavLink>
      </button>
    </div>
  );
};

export default Navbar;

// import { NavLink } from "react-router-dom";
import logo from "../assets/iv n2_.png";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <div className="d-flex flex-col block">
      <div className="cta">
        <b>Call out is available on appointment.</b>
      </div>
      <div className="d-flex flex-row flex-col-xs white-col padding-med justify-content-between footer orange-bg gap-1-xs">
        <div className="d-flex flex-col flex-1 padding-std gap-1-xs">
          <div className="footer-logo-wrapper orange-bg">
            <img width="200px" src={logo} alt="IV Boost Corner Logo" />
          </div>
          <span>
            We target people who work hard as they need energy, sportsmen,
            sportswomen, people with skin problems, older people with athritis,
            body pains, muscle pain, people who want to detox, or have a hang
            over.
          </span>
        </div>
        <div className="d-flex flex-col flex-1 padding-std gap-med gap-1-xs">
          <div className="title-section d-flex flex-col">
            <h2 className="title">Contact Us</h2>
            <div className="line"></div>
          </div>
          <div className="d-flex flex-col gap-std">
            <div className="d-flex flex-row gap-1">
              <i className="black-col fa fa-map-marker icon"></i>
              <div className="d-flex flex-col">
                <span>
                  Shop 58 Parkdene Boulevard, cnr McCaghey street & Rondebult
                  avenue, Parkdene,
                </span>
                <span>Boksburg, 1459</span>
              </div>
            </div>
            <div className="d-flex flex-row gap-std">
              <i className="black-col fa fa-phone icon"></i>
              <div className="d-flex flex-col gap-std">
                <a className="phone no-decoration" href="tel:+27623096853">
                  062 309 6853
                </a>
              </div>
            </div>

            <div className="d-flex flex-row gap-std">
              <i className="black-col fa fa-envelope icon"></i>
              <div className="d-flex flex-col gap-std">
                <a
                  className="email no-decoration"
                  href="mailto:info@ivboostcorner.co.za"
                >
                  info@ivboostcorner.co.za
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="d-flex flex-col flex-1 padding-std gap-med gap-1-xs">
          <h2 className="title">Quick Links</h2>
          <div className="d-flex flex-col gap-1 footer-links">
            <span>
              <NavLink className="no-decoration white-col" to={"/"}>
                Home
              </NavLink>
            </span>
            <span>
              <NavLink className="no-decoration white-col" to={"/about-us"}>
                About Us
              </NavLink>
            </span>
            <span>
              <NavLink className="no-decoration white-col" to={"/products"}>
                Products
              </NavLink>
            </span>
            <span>
              <NavLink className="no-decoration white-col" to={"/contact-us"}>
                Contact Us
              </NavLink>
            </span>
          </div>
        </div> */}
        <div className="d-flex flex-col flex-1 padding-std gap-med gap-1-xs">
          <div className="title-section d-flex flex-col">
            <h2 className="title">Operating Hours</h2>
            <div className="line"></div>
          </div>
          <div className="working-hours">
            <p>
              Monday-Friday: <span>09:00-18:00</span>
            </p>
            <p>
              Saturday: <span>09:00-17:00</span>
            </p>
            <p>
              Sunday &amp; Public Holidays: <span>09:00-17:00</span>
            </p>
          </div>
        </div>
      </div>
      <Copyright></Copyright>
    </div>
  );
};

export default Footer;

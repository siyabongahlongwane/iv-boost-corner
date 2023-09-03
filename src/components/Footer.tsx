import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="d-flex flex-row white-col padding-med justify-content-between footer">
      <div className="d-flex flex-col flex-1 padding-std gap-med">
        <img width="150px" src={logo} alt="IV Boost Corner Logo" />
        <span>
          We target people who work hard as they need energy, sportsmen, sportswomen, people with skin problems, older people with athritis, body pains, muscle pain, people who want to detox, or have a hang over .
        </span>
      </div>
      <div className="d-flex flex-col flex-1 padding-std gap-med">
        <h2 className="title">Contact Us</h2>
        <div className="d-flex flex-col gap-std">
        <div className="d-flex flex-row gap-1">
            <i className="fa fa-map-marker icon primary-col"></i>
            <div className="d-flex flex-col gap-1">
            <span>07 Sunrock Village, 131 Agulhas Rd</span>
            <span>Klipportjie, 1459</span>
            </div>
        </div>
        <div className="d-flex flex-row gap-std">
            <i className="fa fa-phone icon primary-col"></i>
            <div className="d-flex flex-col gap-std">
            <span>062 309 6853</span>
            </div>
        </div>

        <div className="d-flex flex-row gap-std">
            <i className="fa fa-envelope icon primary-col"></i>
            <div className="d-flex flex-col gap-std">
            <span>info@ivboostcorner.co.za</span>
            </div>
        </div>
        </div>
      </div>
      <div className="d-flex flex-col flex-1 padding-std gap-med">
        <h2 className="title">Quick Links</h2>
        <div className="d-flex flex-col gap-1 footer-links">
          <span>Home</span>
          <span>About Us</span>
          <span>Products</span>
          <span>Contact Us</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

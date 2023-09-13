import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero white-bg d-flex flex-row justify-content-center align-items-center">
      <div className="box d-flex flex-col align-items-center justify-content-between gap-std">
        <div className="d-flex flex-col align-items-center gap-std">
          <span className="primary-bg white-col align-center">
            Welcome to IV Boost Corner
          </span>
          <div>
            <h1 className="align-center header d-none-xs">
              We provide the best vitamin therapy at affordable rates!
            </h1>
            <h1 className="align-center header-xs d-none d-flex-xs">
              We provide the best vitamin therapy at affordable rates!
            </h1>
          </div>
        </div>

        <h2 className="align-center gray-col d-none-xs">
          Looking to revitalise your energy levels or get skin glow?
        </h2>

        <h3 className="align-center d-none gray-col d-flex-xs">
          Looking to revitalise your energy levels or get skin glow?
        </h3>
        <div className="d-flex flex-row gap-std">
          <div className="d-flex flex-col">
            <NavLink className="no-decoration white-col" to={"/products"}>
              <button className="primary-bg white-col get-started-btn">
                View Products
              </button>
            </NavLink>
          </div>
          <div className="d-flex flex-col">
            <NavLink className="no-decoration white-col" to={"/contact-us"}>
              <button className="dark-blue-bg white-col get-started-btn">
                Contact Us
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

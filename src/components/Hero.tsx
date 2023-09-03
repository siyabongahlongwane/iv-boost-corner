const Hero = () => {
  return (
    <div className="hero white-bg d-flex flex-row justify-content-center align-items-center">
      <div className="box d-flex flex-col align-items-center justify-content-between gap-std">
        <div className="d-flex flex-col align-items-center gap-std">
          <span className="primary-bg white-col align-center">
            Welcome to IV Boost Corner
          </span>
          <div>
            <h1 className="align-center header">
              We provide the best vitamin therapy at affordable rates!
            </h1>
          </div>
        </div>

        <h2 className="align-center gray-col">
          Looking to revitalise your energy levels or get skin glow?
        </h2>
        <div className="d-flex flex-row gap-std">
          <div className="d-flex flex-col">
            <button className="primary-bg white-col get-started-btn">
              View Products
            </button>
          </div>
          <div className="d-flex flex-col">
            <button className="primary-bg white-col get-started-btn">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

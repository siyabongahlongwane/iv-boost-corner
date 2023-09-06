const Topbar = () => {
  return (
    <div className="topbar white-col d-flex flex-row justify-content-between align-items-center">
      <div className="d-flex flex-col justify-content-center">
        <div className="d-flex d-flex-row gap-med">
          <div className="d-flex flex-row gap-std">
            <i className="fa fa-phone primary-col"></i>
            <small>062 309 6853</small>
          </div>
          <div className="d-flex flex-row gap-std">
            <i className="fa fa-thumb-tack primary-col"></i>
            <small>07 Sunrock Village, 131 Agulhas Rd, Klipportjie, 1459</small>
          </div>
        </div>
      </div>

      <div className="d-flex flex-row gap-std align-items-center">
        <small>Socials: </small>
        <a href="https://wa.me/27623096853?body='Hello, I am looking to get assistance with'"><i className="fa fa-whatsapp icon primary-col"></i></a>
        <a href="https://wa.me/27623096853?body='Hello, I am looking to get assistance with'"><i className="fa fa-facebook icon blue-col"></i></a>
      </div>
    </div>
  );
};

export default Topbar;

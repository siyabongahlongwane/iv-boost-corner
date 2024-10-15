const Topbar = () => {
  return (
    <div className="topbar black-bg white-col d-flex flex-row flex-col-xs justify-content-between align-items-center">
      <div className="d-flex flex-col justify-content-center">
        <div className="d-flex d-flex-row align-items-center-xs gap-med gap-xs flex-col-xs">
          <div className="d-flex flex-row gap-std">
            <i className="fa fa-phone primary-col"></i>
            <small>062 309 6853</small>
          </div>
          <div className="d-flex flex-row gap-std top-addy">
            <i className="fa fa-thumb-tack primary-col"></i>
            <small>Shop 58 Parkdene Boulevard, cnr McCaghey street & Rondebult avenue,  Parkdene, Boksburg, 1459</small>
          </div>
        </div>
      </div>

      <div className="d-flex flex-row gap-std align-items-center">
        <small>Socials: </small>
        <a href="https://wa.me/27623096853?body='Hello, I am looking to get assistance with'">
          <i className="fa fa-whatsapp icon primary-col"></i>
        </a>
        {/* <a href="https://wa.me/27623096853?body='Hello, I am looking to get assistance with'"><i className="fa fa-facebook icon blue-col"></i></a> */}
      </div>
    </div>
  );
};

export default Topbar;

const ContactHelp = () => {
  return (
    <div className="contact-help-wrapper d-flex flex-col align-items-center gap-med block">
      <div className="block align-center">
        <h1>We are here to help you.</h1>
        <p>Reach out to us and we will be more than happy to assist!</p>
      </div>
      <div className="d-flex flex-row justify-content-between max-width-75">
        <div className="card d-flex flex-col align-items-center gap-1">
          <div className="d-flex flex-col icon-wrapper align-items-center justify-content-center">
            <i className="fa fa-map-marker primary-col"></i>
          </div>
          <h5 className="align-center">07 Sunrock Village, 131 Agulhas Rd, Klipportjie, 1459</h5>
        </div>
        <div className="card d-flex flex-col align-items-center gap-1">
          <div className="d-flex flex-col icon-wrapper align-items-center justify-content-center">
            <i className="fa fa-envelope primary-col"></i>
          </div>
          <h5 className="align-center">info@ivboostcorner.co.za</h5>
        </div>
        <div className="card d-flex flex-col align-items-center gap-1">
          <div className="d-flex flex-col icon-wrapper align-items-center justify-content-center">
            <i className="fa fa-phone primary-col"></i>
          </div>
          <h5 className="align-center">062 309 6853</h5>
        </div>
      </div>
    </div>
  );
};

export default ContactHelp;

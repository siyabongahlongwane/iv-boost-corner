const ContactForm = () => {
  return (
    <div className="contact-form-wrapper d-flex flex-col gap-1 align-items-center">
      <div className="block align-center">
        <h1>Write to us.</h1>
        <p>Send us a message directly into our mailbox.</p>
      </div>
      <form className="contact-form block">
        <div className="d-flex flex-col gap-std block">
          <div className="d-flex flex-row gap-1 flex-col-xs block">
            <div className="d-flex flex-col gap-xs flex-1">
              <label>Name</label>
              <input
                className="block"
                type="text"
                required
                placeholder="Enter Name"
              />
            </div>
            <div className="d-flex flex-col gap-xs flex-1">
              <label>Email</label>
              <input
                className="block"
                type="text"
                required
                placeholder="Enter Email"
              />
            </div>
          </div>
          <div className="d-flex flex-row gap-1 flex-col-xs">
            <div className="d-flex flex-col gap-xs flex-1">
              <label>Phone</label>
              <input
                className="block"
                type="text"
                required
                placeholder="Enter Phone"
              />
            </div>
            <div className="d-flex flex-col gap-xs flex-1">
              <label>Subject</label>
              <input
                className="block"
                type="text"
                required
                placeholder="Enter Subject"
              />
            </div>
          </div>
          <div className="d-flex flex-row gap-1 flex-col-xs">
            <div className="d-flex flex-col gap-xs flex-1">
              <label>Message</label>
              <textarea
                required
                rows={5}
                placeholder="Enter Message"
              ></textarea>
            </div>
          </div>
          <div className="d-flex flex-col align-items-center">
            <button className="primary-bg white-col get-started-btn">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

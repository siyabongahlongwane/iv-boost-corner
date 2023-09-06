const ContactForm = () => {
  return (
    <div className="contact-form-wrapper d-flex flex-col gap-1 align-items-center">
      <div className="block align-center">
        <h1>Write to us.</h1>
        <p>
          Send us a message directly into our mailbox.
        </p>
      </div>
      <form className="contact-form">
        <div className="d-flex flex-col gap-std">
          <div className="d-flex flex-row gap-1">
            <div className="d-flex flex-col gap-xs flex-1">
              <label>Name</label>
              <input type="text" required placeholder="Enter Name" />
            </div>
            <div className="d-flex flex-col gap-xs flex-1">
              <label>Email</label>
              <input type="text" required placeholder="Enter Email" />
            </div>
          </div>
          <div className="d-flex flex-row gap-1">
            <div className="d-flex flex-col gap-xs flex-1">
              <label>Phone</label>
              <input type="text" required placeholder="Enter Phone" />
            </div>
            <div className="d-flex flex-col gap-xs flex-1">
              <label>Subject</label>
              <input type="text" required placeholder="Enter Subject" />
            </div>
          </div>
          <div className="d-flex flex-row gap-1">
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

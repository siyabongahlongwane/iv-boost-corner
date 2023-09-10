/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [response, setResponse] = useState(null);
  const serverUrl = "http://localhost:5000/api/sendEmail";
  const {name, email, phone, subject, message} = form;

  const abortController = new AbortController();

  const handleChange = (
    ev: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [ev.target.name]: ev.target.value });
    
  };

  const submitForm = (ev: { preventDefault: () => void }) => {
    ev.preventDefault();
    let hasError = false;
    const values = Object.values(form)
    hasError = values.some(val => val == '');
    const {name, email, phone, subject, message} = form;
    if (hasError) {
      alert('Please enter all required fields')
      return;
    }
    else {
      const body = {
        from: `${name} <${email}>`,
    to: 'info@ivboostcorner.co.za',
    subject: 'IV Boost - ' + subject,
    html: `
    <div style=
    'background: #ddd; padding: 2em
    '>
    <div style=
    'text-align: center; margin-bottom: 1.5em
    '>
      <img width=
      '250px
      ' src=
      'https://www.smarteyeapps.com/images/smarteye-apps-logo.png
      '>
    </div>
  <div>
    <p>Hello IV Boost Corner contact center, there is a new email from ${name} and it reads as follows:</p>
 
    <p>
        ${message}
    </p>
    
    <p>
      You can call Siyabonga here : <b>${phone}</b>
    </p>
    
    <h5>This email has been delivered to you using the WEBGOORU PTY LTD email server</h5>
  </div>
</div>
    `
      }
      fetch(serverUrl, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
        signal: abortController.signal,
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.msg)
          setResponse(data);
          setForm(
            {
              name: "",
              email: "",
              phone: "",
              subject: "",
              message: "",
            }
          )
        })
        .catch((err) => {
          console.log(err);
          alert(err.msg || "Email not sent successfully")
          setResponse(err)
        });
      }
  };
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
                name="name"
                onChange={(ev) => handleChange(ev)}
                value={name}
                placeholder="Enter Name"
              />
            </div>
            <div className="d-flex flex-col gap-xs flex-1">
              <label>Email</label>
              <input
                className="block"
                type="text"
                required
                name="email"
                onChange={(ev) => handleChange(ev)}
                value={email}
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
                name="phone"
                onChange={(ev) => handleChange(ev)}
                value={phone}
                placeholder="Enter Phone"
              />
            </div>
            <div className="d-flex flex-col gap-xs flex-1">
              <label>Subject</label>
              <input
                className="block"
                type="text"
                required
                name="subject"
                onChange={(ev) => handleChange(ev)}
                value={subject}
                placeholder="Enter Subject"
              />
            </div>
          </div>
          <div className="d-flex flex-row gap-1 flex-col-xs">
            <div className="d-flex flex-col gap-xs flex-1">
              <label>Message</label>
              <textarea
                required
                name="message"
                onChange={(ev) => handleChange(ev)}
                value={message}
                rows={5}
                placeholder="Enter Message"
              ></textarea>
            </div>
          </div>
          {/* <p className="red-col align-center">Please enter all fields</p> */}
          <div className="d-flex flex-col align-items-center">
            <button
              onClick={(ev) => submitForm(ev)}
              className="primary-bg white-col get-started-btn"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

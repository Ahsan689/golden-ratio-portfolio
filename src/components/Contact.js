import emailjs from "emailjs-com";
import { useState } from "react";
import { call, emailIcon, msgSent } from "../svgImage";

const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          "service_seruhwu", // service id
          "template_21aw58z", // template id
          mailData,
          "Q3pccdLZhU-mZT7tQ" // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({ name: "", email: "", message: "" });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };
  return (
    <div className="aali_tm_section" id="contact">
      <div className="aali_tm_contact">
        <div className="container">
          <div
            className="aali_tm_main_title"
            data-text-align="center"
            data-color="dark"
          >
            <span>Get in Touch</span>
            <h3>Connect with Me with Confidence</h3>
          </div>
          <div className="contact_inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              {/* <div className="text">
                <p>
                  Please fill out the form on this section to contact with me.
                  Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through
                  Friday
                </p>
              </div> */}
              <ul>
                <li>
                  <div className="list_inner">
                    {call}
                    <span>Call me</span>
                    <h3>+1234 5678 9000</h3>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    {emailIcon}
                    <span>Email</span>
                    <h3>
                      <a className="line_anim" href="mailto:hello@aali.com">
                        hello@aali.com
                      </a>
                    </h3>
                  </div>
                </li>
              </ul>
            </div>


            <div className="aali_tm_section">
      <div className="aali_tm_copyright">
        <div className="container">
          <div className="copyright_inner">
            <div className="top">
              <div className="logo">
                {/* <img src="img/logo/logo.png" alt="aali image" /> */}
              </div>
              <div className="social">
                <span>Connect</span>
                <ul>
                  <li>
                    <a href="#">
                      <i className="icon-facebook-1" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-twitter-1" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-instagram-3" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="bottom">
              <div className="left">
                <p>
                  Designed with love by{" "}
                  <a
                    className="line_anim"
                    href="https://themeforest.net/user/codeefly"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Codeefly
                  </a>{" "}
                  © {new Date().getFullYear()}
                </p>
              </div>
              <div className="right">
                <ul>
                  <li>
                    <a className="line_anim" href="#">
                      Terms &amp; Condition
                    </a>
                  </li>
                  <li>
                    <a className="line_anim" href="#">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a className="line_anim" href="#">
                      Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <span
              className="border moving_effect"
              data-direction="y"
              data-reverse="yes"
            /> */}
          </div>
        </div>
        {/* <span className="square moving_effect" data-direction="x" /> */}
      </div>
    </div>
            
            {/* <div className="right wow fadeInRight" data-wow-duration="1s">
              <div className="fields">

                
                
                <form
                  action="/"
                  method="post"
                  className="contact_form"
                  id="contact_form"
                  autoComplete="off"
                  onSubmit={(e) => onSubmit(e)}
                >
                  <div
                    className={error ? "empty_notice" : "returnmessage"}
                    style={{ display: error == null ? "none" : "block" }}
                  >
                    <span>
                      {error
                        ? "Please Fill Required Fields"
                        : "Your message has been received, We will contact you soon."}
                    </span>
                  </div>
                  <div className="input_list">
                    <ul>
                      <li>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          onChange={(e) => onChange(e)}
                          value={name}
                          placeholder="Your Name"
                        />
                      </li>
                      <li>
                        <input
                          id="email"
                          type="text"
                          placeholder="Your Email"
                          name="email"
                          onChange={(e) => onChange(e)}
                          value={email}
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="message_area">
                    <textarea
                      id="message"
                      placeholder="Message"
                      name="message"
                      onChange={(e) => onChange(e)}
                      value={message}
                    />
                  </div>
                  <div className="aali_tm_button">
                    <a id="send_message" href="#" onClick={(e) => onSubmit(e)}>
                      <span>Submit Message {msgSent}</span>
                    </a>
                  </div>
                </form>
              </div>
            </div> */}
          </div>
        </div>
        {/* <span
          className="square moving_effect"
          data-direction="y"
          data-reverse="yes"
        /> */}
      </div>
    </div>
  );
};

export default Contact;

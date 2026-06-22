import emailjs from "@emailjs/browser";
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
                    "service_xr2wkvb",     // Replace with your current Service ID if updated
                    "template_6ghusqj",    // Replace with your current Template ID if updated
                    mailData,              // The data payload
                    "J1bd6bfGdeLH-Og4v"    // Replace with your current Public API Key if updated
                )
                .then(
                    (response) => {
                        setError(false);
                        clearError();
                        setMailData({ name: "", email: "", message: "" });
                    },
                    (err) => {
                        console.error("FAILED...", err);
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

                            <div className="container" style={{ backgroundColor: "transparent", background: "transparent", padding: "0", margin: "0" }}>
                                <div className="aali_tm_copyright" style={{ backgroundColor: "transparent", background: "transparent", margin: "0", padding: "0" }}>
                                    <div className="top" style={{ margin: "0", padding: "0" }}>
                                        <div className="social" style={{ display: "flex", alignItems: "center", margin: "0", padding: "40px 0px 0px 0px" }}>
                                            <span>Connect</span>
                                            <ul style={{ display: "flex", gap: "10px", margin: "0", padding: "0", listStyle: "none" }}>
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
                                </div>
                            </div>
                        </div>

                        <div className="aali_tm_section" style={{ backgroundColor: "#333232", padding: "40px", borderRadius: "8px", width: "100%", maxWidth: "100%", marginBottom: "20px"}}>
                            <div className="aali_tm_copyright" style={{ width: "100%", maxWidth: "100%", padding: "0" }}>
                                <div className="right wow fadeInRight" data-wow-duration="1s" style={{ width: "100%", maxWidth: "100%" }}>
                                    <div className="fields" style={{ width: "100%", maxWidth: "100%", padding: "0" }}>
                                        <form
                                            className="contact_form"
                                            id="contact_form"
                                            autoComplete="off"
                                            onSubmit={onSubmit}
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
                                            <div className="input_list" style={{ width: "100%" }}>
                                                <ul style={{ width: "100%", display: "flex", flexDirection: "column", gap: "15px", margin: "0", padding: "0" }}>
                                                    <li style={{ width: "100%", listStyle: "none", margin: "0", padding: "0" }}>
                                                        <input
                                                            id="name"
                                                            type="text"
                                                            name="name"
                                                            onChange={onChange}
                                                            value={name}
                                                            placeholder="Your Name"
                                                            style={{ width: "100%", boxSizing: "border-box", padding: "15px 20px", fontSize: "16px", border: "none" }}
                                                        />
                                                    </li>
                                                    <li style={{ width: "100%", listStyle: "none", margin: "0", padding: "0" }}>
                                                        <input
                                                            id="email"
                                                            type="email"
                                                            placeholder="Your Email"
                                                            name="email"
                                                            onChange={onChange}
                                                            value={email}
                                                            style={{ width: "100%", boxSizing: "border-box", padding: "15px 20px", fontSize: "16px", border: "none" }}
                                                        />
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="message_area" style={{ width: "100%", margin: "0", padding: "20px 0 " }}>
                        <textarea
                            id="message"
                            placeholder="Message"
                            name="message"
                            onChange={onChange}
                            value={message}
                            style={{ width: "100%", boxSizing: "border-box", padding: "15px 20px", fontSize: "16px", minHeight: "200px", border: "none", display: "block" }}
                        />
                                            </div>
                                            <div className="aali_tm_button">
                                                <button
                                                    type="submit"
                                                    id="send_message"
                                                    style={{
                                                        background: "none",
                                                        color: "inherit",
                                                        border: "none",
                                                        padding: "0",
                                                        font: "inherit",
                                                        cursor: "pointer",
                                                        outline: "inherit",
                                                        width: "100%",
                                                        textAlign: "left"
                                                    }}
                                                >
                                                    <span>Submit Message {msgSent}</span>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
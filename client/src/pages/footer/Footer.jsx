/** @format */

import "./Footer.scss";

import email from "../../assets/icons/email.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import githubContact from "../../assets/icons/github.svg";
import { PopupWidget } from "react-calendly";

function Footer() {
  function Mailto({ email, ...props }) {
    return <a href={`mailto:${email}`}>{props.children}</a>;
  }
  return (
    <div id="ContactMe" className="contact-container">
      <div className="contact">
        <h2 className="contact__title">Contact Me</h2>
        <p className="contact__description">
          Currently looking for new opportunities in Full Stack Web Development.
        </p>
        {/* <PopupWidget
          url="https://calendly.com/wahajarsal/30min?month=2022-05"
          rootElement={document.getElementById("root")}
          text="Schedule a call!"
          textColor="#ffffff"
          color="#b550f8"
        /> */}
        <div className="contact__icons">
          <Mailto email="a.wahaj@hotmail.co.uk">
            <div className="contact__icons-container">
              <img className="contact__email" src={email} alt="email logo" />
            </div>
          </Mailto>
          <a
            href="https://www.linkedin.com/in/wahaj-arsal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact__icons-container">
              <img
                className="contact__linkedin"
                src={linkedin}
                alt="linkedin logo"
              />
            </div>
          </a>
          <a
            href="https://www.github.com/Wahaj-Arsal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact__icons-container">
              <img
                className="contact__github"
                src={githubContact}
                alt="github logo"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

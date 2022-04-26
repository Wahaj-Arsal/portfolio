/** @format */

import "./Footer.scss";

import { Link } from "react-router-dom";

import email from "../../assets/icons/email.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import githubContact from "../../assets/icons/github.svg";

function Footer() {
  function Mailto({ email, ...props }) {
    return <a href={`mailto:${email}`}>{props.children}</a>;
  }
  return (
    <div className="contact-container">
      <div className="contact">
        <h2 className="contact__title">Contact Me</h2>
        <p className="contact__description">
          Currently looking for new opportunities in Full Stack Web Development.
        </p>
        <div className="contact__icons">
          <Mailto email="a.wahaj@hotmail.co.uk">
            <div className="contact__icons-container">
              <img className="contact__email" src={email} />
            </div>
          </Mailto>
          <a
            href="https://www.linkedin.com/in/wahaj-arsal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact__icons-container">
              <img className="contact__linkedin" src={linkedin} />
            </div>
          </a>
          <a
            href="https://www.github.com/Wahaj-Arsal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact__icons-container">
              <img className="contact__github" src={githubContact} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

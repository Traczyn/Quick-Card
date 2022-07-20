import React from "react";
import ProfilePic from "../images/me.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Info() {
  return (
    <div className="card-info">
      <img src={ProfilePic} className="profile-picture" alt="profile" />
      <h1 className="full-name">Maciej Traczynski</h1>
      <h3 className="title">Frontend Developer</h3>
      <div className="contacts">
        <a href="mailto:traczyn@gmail.com">
          <button className="email">
            <FontAwesomeIcon icon={faEnvelope} />
            Email
          </button>
        </a>
        <button type="button" className="linkedin">
          <FontAwesomeIcon icon={faLinkedin} />
          <a href="https://www.linkedin.com/in/maciek-traczynski-19a546212/" target="_blank" rel="noreferrer">LinkedIn</a>
          
        </button>
      </div>
    </div>
  );
}

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
            <h4 className="website">maciejtraczyn.website</h4>
            <div className="contacts">
                <button className="email"><FontAwesomeIcon icon={faEnvelope} />Email</button>
                <button className="linkedin"><FontAwesomeIcon icon={faLinkedin} />LinkedIn</button>
            </div>
        </div>
    )
}
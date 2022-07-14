import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <div className="socials">
        <div><FontAwesomeIcon icon={faTwitterSquare} /></div>
        <div><FontAwesomeIcon icon={faInstagramSquare} /></div>
        <div><FontAwesomeIcon icon={faGithubSquare} /></div>
        </div>
    )
}
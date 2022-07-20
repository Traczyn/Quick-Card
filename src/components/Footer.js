import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="socials">
      <div>
        <a href="https://twitter.com/MTraczyn" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTwitterSquare} />
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/traczyn/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagramSquare} />
        </a>
      </div>
      <div>
        <a href="https://github.com/Traczyn" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithubSquare} />
        </a>
      </div>
    </div>
  );
}

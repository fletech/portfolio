import React from "react";

import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="author-info">
        <p>
          © website built on React{" "}
          <a
            href="https://reactjs.org/docs/getting-started.html"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon={faReact} color={"dodgerblue"} />{" "}
          </a>
          by{" "}
          <a
            href="https://www.linkedin.com/in/facundo-garcia-ar/"
            target="_blank"
            rel="noreferrer"
          >
            <span>Facundo Garcia</span>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

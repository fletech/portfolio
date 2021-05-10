import React from "react";

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
            <i className="fab fa-react"></i>{" "}
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

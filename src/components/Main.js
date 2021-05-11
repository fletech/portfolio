import React from "react";
import { MainStyled } from "../styles/styledComponents";
import homeImage from "../images/Facundo.jpg";

const Main = () => {
  return (
    <MainStyled>
      <div className="image-container">
        <img src={homeImage} alt="" />
      </div>

      <div className="about-me">
        <div className="description">
          <h3>
            Node.js Full stack focusing on front-end with React and its
            environment.{" "}
          </h3>
          <p></p>
          <h4>Currently coding to deliver something great.</h4>
        </div>

        <div className="social-network">
          <div className="button-container">
            <a
              href="https://github.com/fletech"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
          <div className="button-container">
            <a
              href="https://www.linkedin.com/in/facundo-garcia-ar/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </MainStyled>
  );
};

export default Main;

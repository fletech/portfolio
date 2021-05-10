import React from "react";
import styled from "styled-components";
import homeImage from "../images/Facundo.jpg";

const Main = () => {
  return (
    <MainStyled>
      <div className="image-container">
        <img src={homeImage} alt="" />
      </div>

      <div className="about-me">
        <div className="description">
          <h2>Currently coding to deliver something great..</h2>
        </div>

        <div className="social-network">
          <div className="button-container">
            <a
              href="https://github.com/fletech"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-github"></i>
            </a>
          </div>
          <div className="button-container">
            <a
              href="https://www.linkedin.com/in/facundo-garcia-ar/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </MainStyled>
  );
};

const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  object-fit: cover;
  overflow: hidden;
  z-index: 1;
`;

export default Main;

import React from "react";
import styled from "styled-components";
import homeImage from "../images/coding.jpg";

const Main = () => {
  return (
    <MainStyled>
      <DivStyled>Main</DivStyled>
      <DivStyled className="image-container">
        <img src={homeImage} alt="" />
        <div className="message">
          <h2>Currently coding to deliver something great..</h2>
          <div className="social-network">
            <a
              href="https://github.com/fletech"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/facundo-garcia-ar/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </DivStyled>
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
const DivStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex: 1;
  position: relative;
  img {
    opacity: 0.8;
  }
  .message {
    padding: 4rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    position: absolute;
    background-color: #fff;
    opacity: 0.98;
    top: 50%;
    left: 50%;
    width: 600px;
    height: 300px;
    transform: translateX(-50%) translateY(-50%);
    z-index: 10;
    h2 {
      color: #474747;
    }
    .social-network {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 200px;
    }
    i {
      color: #474747;
      font-size: 20px;
      &:hover {
        color: dodgerblue;
      }
    }
  }
`;
export default Main;

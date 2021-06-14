import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Social = () => {
  return (
    <SocialStyled className="social-network">
      <div className="button-container">
        <a href="https://github.com/fletech" target="_blank" rel="noreferrer">
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
      <div className="button-container">
        <Link to="/contact">
          <i className="fas fa-envelope"></i>
        </Link>
      </div>
    </SocialStyled>
  );
};
const SocialStyled = styled.div`
  &.social-network {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 200px;
    .button-container {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: orange;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      &:hover i {
        color: white;
      }
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
      }
      i {
        color: #474747;
        font-size: 16px;
      }
    }
  }
`;
export default Social;

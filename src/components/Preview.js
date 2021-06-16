import React from "react";
import styled from "styled-components";

const Preview = () => {
  return (
    <PreviewStyled>
      <div className="left"></div>
      <div className="right">
        <div className="top"></div>
        <div className="bottom">
          <div className="bottom-card" />
          <div className="bottom-card" />
          <div className="bottom-card" />
          <div className="bottom-card" />
        </div>
      </div>
    </PreviewStyled>
  );
};
const PreviewStyled = styled.div`
  padding: 1rem;
  width: 60%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    border-radius: 1rem;
  }
  .left {
    width: 20%;
    height: 100%;
    background-color: #f0f0f0;
    animation: breathe 2s linear infinite;
  }
  .right {
    width: 75%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .top {
      width: 100%;
      height: 23%;
      background-color: #f0f0f0;
      animation: breathe 2s linear infinite;
    }
    .bottom {
      width: 100%;
      height: 70%;
      background-color: #f0f0f0;
      display: grid;
      place-items: center;
      animation: breathe 2s linear infinite;
      .bottom-card {
        width: 80%;
        height: 20%;
        background-color: #dfdfdf;
        animation: breathe 2s linear infinite;
      }
    }
  }
  @keyframes breathe {
    0% {
      box-shadow: 2px 2px 4px #fccd86, -2px -2px 4px #fccd86;
    }
    50% {
      box-shadow: 2px 2px 4px #d8d8d8, -2px -2px 4px #d8d8d8;
    }
    100% {
      box-shadow: 2px 2px 4px #fccd86, -2px -2px 4px #fccd86;
    }
  }
`;
export default Preview;

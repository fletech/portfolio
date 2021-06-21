import React from "react";
import styled from "styled-components";

const Preview = () => {
  return (
    <PreviewStyled>
      <div className="left">
        <div className="bottom">
          <div className="bottom-card" />
          <div className="bottom-card" />
          <div className="bottom-card" />
          <div className="bottom-card" />
        </div>
      </div>
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
  padding: 5rem;
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-self: center;
  div {
    border-radius: 0px;
  }
  .left {
    width: 20%;
    height: 100%;
    background-color: #f0f0f0;

    animation: breathe 5s linear infinite, change-color 5s linear infinite;
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

      animation: breathe 5s linear infinite, change-color 5s linear infinite;
    }
    .bottom {
      width: 100%;
      height: 70%;
      background-color: #f0f0f0;
      display: grid;
      place-items: center;
      animation: breathe 5s linear infinite, change-color 5s linear infinite;

      .bottom-card {
        width: 60%;
        height: 20%;
        background-color: #ebebeb;
        box-shadow: 1px 1px 8px #f0f0f0, -1px -1px 8px #f0f0f0;
      }
    }
  }
  @keyframes breathe {
    0% {
      box-shadow: 2px 2px 8px #c2c2c2, -2px -2px 8px #c2c2c2;
    }
    50% {
      box-shadow: 2px 2px 8px #ecebeb, -2px -2px 8px #ecebeb;
    }
    100% {
      box-shadow: 2px 2px 8px #c2c2c2, -2px -2px 8px #c2c2c2;
    }
  }
  @keyframes change-color {
    0% {
      background-color: #d8d8d8;
    }
    50% {
      background-color: #ecebeb;
    }
    100% {
      background-color: #d8d8d8;
    }
  }
`;
export default Preview;

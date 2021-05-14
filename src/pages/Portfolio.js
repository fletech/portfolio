import React, { useEffect } from "react";
import { init } from "ityped";
import styled from "styled-components";

import { MainStyled } from "../styles/styledComponents";

const Portfolio = () => {
  useEffect(() => {
    const importStyledRef = document.querySelector("p.import-styled");
    const canvaRef = document.querySelector("p.main-styled");
    init(importStyledRef, {
      showCursor: false,
      loop: false,
      strings: [`import { MainStyled } from "../styles/styledComponents";`],
    });
    init(canvaRef, {
      showCursor: false,
      startDelay: 7000,
      loop: false,
      strings: ["<MainStyled></MainStyled>"],
    });
  }, []);
  return (
    <MainStyled>
      <DivStyled className="message-current">
        <h3>Under coding...</h3>
      </DivStyled>
      <CanvaStyled className="canva">
        <div className="circles">
          <div className="red"></div>
          <div className="yellow"></div>
          <div className="green"></div>
        </div>
        <div className="function">
          <p>{`import React, { useState } from "react";`}</p>
          <p className="import-styled"></p>
          <br />
          <p>{`const Portfolio = ( ) => {`}</p>
          <p className="margin-left">{`return(`}</p>
          <p className="main-styled margin-left-2x"></p>
          <p className="margin-left">{`)`}</p>
          <p>{`}`}</p>
          <p>{`export default Portfolio;`}</p>
        </div>
        <p></p>
      </CanvaStyled>
    </MainStyled>
  );
};

const CanvaStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-items: center;
  border-top: solid 1.4rem #7c7b7b;
  width: 40%;
  height: 40vh;
  background-color: #393939;
  padding: 2rem;
  min-width: 300px;
  z-index: 2;
  transform: translateY(-15%);
  box-shadow: 2px 2px 8px #838383, -2px -2px 8px #838383;

  .circles {
    position: absolute;
    display: flex;
    top: -16px;
    left: 10px;
    div {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin: 0px 4px;
      background-color: #fff;
    }
    .red {
      background-color: #fa4e4e;
    }
    .yellow {
      background-color: #fadf4a;
    }
    .green {
      background-color: #65bb50;
    }
  }
  .function {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  p {
    color: orange !important;
    text-shadow: 1px 1px 8px #7c7b7b;
  }

  .margin-left {
    margin-left: 2rem;
  }
  .margin-left-2x {
    margin-left: 4rem;
  }

  @media (max-width: 600px) {
    border-top: solid 1.6rem #7c7b7b;
    transform: translateY(0%);

    .circles {
      top: -14px;
    }
  }
`;
const DivStyled = styled.div`
  margin-bottom: 3rem;
`;
export default Portfolio;

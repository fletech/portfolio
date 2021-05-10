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
      strings: [`import { MainStyled } from "../styles/styledComponents;"`],
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
      <CanvaStyled className="canva">
        <div className="function">
          <p>{`import * from "react";`}</p>
          <p className="import-styled"></p>
          <br />
          <p>{`const Portfolio = () => {`}</p>
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-items: center;
  width: 40%;
  height: 40vh;
  background-color: #393939;
  padding: 2rem;
  min-width: 300px;
  z-index: 2;
  transform: translateY(-15%);
  box-shadow: 2px 2px 8px #393939, -2px -2px 8px #393939;
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
  .function {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export default Portfolio;

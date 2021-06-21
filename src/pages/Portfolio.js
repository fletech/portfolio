import React from "react";
import { portfolioDB } from "../helpers/portfolio-db";
import styled from "styled-components";

import { MainStyled } from "../styledComponents";
import Works from "../components/Portfolio/Works";

const Portfolio = () => {
  return (
    <PortfolioStyled>
      {portfolioDB.map((work, i) => {
        (i + 1) % 2 !== 0
          ? (work.align = "align-left")
          : (work.align = "align-right");
        return <Works object={work} />;
      })}
    </PortfolioStyled>
  );
};

const PortfolioStyled = styled(MainStyled)`
  height: auto;
  min-height: 50vh;
  width: 80%;
  margin: 3rem 0;
  @media (max-width: 700px) {
    width: 100%;
  }
`;
export default Portfolio;

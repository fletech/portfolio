import React from "react";
import { portfolioDB } from "../helpers/portfolio-db";
import styled from "styled-components";

import { MainStyled } from "../styledComponents";
import Works from "../components/Portfolio/Works";

const Portfolio = () => {
  return (
    <PortfolioStyled>
      <ul className="list-grid">
        {portfolioDB.map((work) => {
          return <Works object={work} />;
        })}
      </ul>
    </PortfolioStyled>
  );
};

const PortfolioStyled = styled(MainStyled)`
  height: auto;

  width: 80%;
  margin: 3rem 0;

  @media (max-width: 700px) {
    width: 90%;
  }
  ul.list-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;

    @media (max-width: 400px) {
      grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    }
  }
`;
export default Portfolio;

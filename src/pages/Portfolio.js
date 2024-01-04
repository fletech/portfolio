import { useEffect, useState } from "react";
import { portfolioDB } from "../helpers/portfolio-db";
import styled from "styled-components";

import { MainStyled } from "../styledComponents";
import Works from "../components/Portfolio/Works";

const Portfolio = () => {
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRendered(true);
    }, 600);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <PortfolioStyled>
      {!rendered ? (
        <SpinnerStyled className="spinner-container">
          <div className="spinner"></div>
          <p>Loading</p>
        </SpinnerStyled>
      ) : (
        <ul className="list-grid">
          {portfolioDB.map((object) => (
            <Works object={object} />
          ))}
        </ul>
      )}
    </PortfolioStyled>
  );
};

const PortfolioStyled = styled(MainStyled)`
  height: auto;
  min-height: 70vh;
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
      grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    }
  }
`;

const SpinnerStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  div.spinner {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 4px solid #fff999;
    border-left: 4px solid orange;
    animation: spin 1s ease infinite;
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  }
  p {
    color: orange;
    font-size: 1.5rem;
    font-weight: 900;
    margin-left: 1rem;
  }
`;
export default Portfolio;

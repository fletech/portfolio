import React from "react";

import styled from "styled-components";

const Works = ({ object }) => {
  const { align, image, link, title, description, repo, techs } = object;

  return (
    <WorksStyled>
      <div className={`work-container ${align}`}>
        <div className="work-background">
          <a href={link} target="_blank" rel="noreferrer">
            <div className="cover-img"></div>
          </a>
          <img src={image} alt="super" />
        </div>
        <div className={`work-content ${align}`}>
          <div className="content content-heading">
            <h2>{title}</h2>
          </div>
          <div className="content content-description">
            <p className={align}>{description}</p>
          </div>
          <div className={`content content-tech ${align}`}>
            <ul>
              {techs.map((tech) => (
                <li>{tech}</li>
              ))}
            </ul>
          </div>
          <div className="content content-links">
            <a href={repo} target="_blank" rel="noreferrer">
              <i className="fab fa-github-square"></i>
            </a>
            <a
              href={link}
              className="margin-left"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-external-link-square-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </WorksStyled>
  );
};

const WorksStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 6rem;

  div.work-container {
    width: 75%;
    @media (max-width: 900px) {
      width: 90%;
      min-height: 50vh;
    }
    height: auto;
    min-height: 30vh;
    display: flex;
    position: relative;

    &.align-left {
      flex-direction: row-reverse !important;
    }

    div.work-background {
      width: 60%;
      display: grid;
      place-items: center;

      border: solid 1px #ebebeb;
      position: relative;

      a {
        position: absolute;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        opacity: 0.7;
        background-color: orange;

        transition: opacity 0.3s ease-in-out;

        &:hover {
          opacity: 0;
        }
      }

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }

    div.work-content {
      width: 40%;
      z-index: 1000;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;

      @media (max-width: 600px) {
        z-index: 1000;
      }
      &.align-right {
        align-items: flex-end;
        div.content {
          justify-content: flex-end;
        }
      }
      div.content {
        width: 100%;
        height: 15%;
        display: flex;
        align-items: center;
        p,
        h2 {
          font-family: "Noto Sans KR", sans-serif !important;
          color: orange;
        }
        h2 {
          font-weight: bold;
        }

        &.content-description {
          background-color: #f5f5f5;
          box-shadow: 2px 2px 8px #acabab;
          padding: 1rem;
          height: auto;
          width: 150%;
          @media (max-width: 900px) {
            width: 200%;
          }

          p {
            color: #474747;
            font-size: 0.9rem;
            line-height: 1.6rem;
            &.align-right {
              text-align: right;
            }
          }
        }
        &.content-tech {
          width: 100%;
          ul {
            display: flex;
            li {
              text-decoration: none;
              list-style: none;
              font-family: monospace !important;
              margin: 0 1rem;
            }
          }
        }
        &.content-links {
          width: 25%;
          min-width: 100px;
          display: flex;
          align-items: center;
          a {
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            &.margin-left {
              margin-left: 1.5rem;
            }
            &.margin-right {
              margin-right: 1.5rem;
            }
            i {
              font-size: 1.6rem;
            }
          }
        }
      }
    }
  }
`;
export default Works;

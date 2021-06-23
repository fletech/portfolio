import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { menuDisplayHandler } from "../../utils";

const Header = ({ menuDisplay, setMenuDisplay }) => {
  const location = useLocation();
  return (
    <HeaderStyled>
      <div className="logo-container">
        {/* <div className="logo-image-container">
          <div className="logo-image">
            <img src={homeImage} alt="" />
          </div>
        </div> */}

        <div className="logo-name">
          <Link to="/">
            <h2>{"{ ...f }"}</h2>
          </Link>
        </div>
      </div>

      <div className="menu">
        <nav className="nav-bar">
          <div className={`nav-list nav-true`}>
            {location.pathname !== "/" && (
              <p className="nav-item portfolio">
                <Link to="/">Home </Link>
              </p>
            )}

            <p className="nav-item portfolio">
              <Link to="/portfolio">Portfolio</Link>
            </p>
            <p className="nav-item contact">
              <Link to="/contact">Contact</Link>
            </p>
            <p className="nav-item resume">
              <a href="/resume.pdf" target="_blank" rel="noreferrer">
                {/* <a href="https://bit.ly/3bgrMDS" target="_blank" rel="noreferrer"> */}
                Resume
              </a>
            </p>
          </div>

          <div
            className="toggle-menu"
            onClick={() => menuDisplayHandler(menuDisplay, setMenuDisplay)}
          >
            <div className="icon-container">
              {menuDisplay && <i className="fas fa-times"></i>}

              {!menuDisplay && <i className="fas fa-bars"></i>}
            </div>
          </div>
        </nav>
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  padding: 0 5rem;
  width: 100%;
  min-height: 5rem;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  .logo-container {
    width: 12rem;
    display: flex;
    align-items: center;
    .logo-image-container {
      width: 4rem;
      min-width: 3rem;
      min-height: 3rem;
      height: 4rem;
      overflow: hidden;
      border-radius: 50%;
      img {
        width: 100%;
      }
    }
    .logo-name {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h2 {
        font-weight: 600;
      }
    }
  }
  div.menu {
    display: flex;

    align-items: center;
    justify-content: flex-end;
    .nav-bar {
      height: 40px;
      display: flex;

      align-items: center;
      div.nav-list {
        height: 100%;
        display: flex;
        align-items: baseline;
        align-items: center;
        transition: all 0.5s ease;

        p {
          height: 100%;
          margin-left: 2rem;
          display: flex;
          align-items: center;
          padding: 5px;
          text-align: right;
          list-style: none;
        }
        p.resume {
          border-radius: 30px;
          animation: background-change 5s infinite;
          a {
            animation: color-change 5s infinite;
            padding: 0px 10px;
          }
        }
        p.contact {
          cursor: pointer;
          color: #c7c6c6;
        }
      }

      div.nav-true {
        opacity: 1;
        align-items: center;
        @media (max-width: 768px) {
          display: none;
        }
      }

      .toggle-menu {
        display: none;
        @media (max-width: 768px) {
          border-radius: 30px;
          width: 2.5rem;
          height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 1s ease;
          background: transparent;
          cursor: pointer;
        }

        &:hover {
          background-color: orange;
          .icon-container i {
            color: white !important;
            transition: color 0.5s ease;
          }
        }
      }
      .icon-container {
        width: 100%;
        display: grid;
        place-items: center;
        transition: all 0.3s ease;
        background: transparent;
        z-index: 200;
        i {
          transition: color 1s ease;
          font-size: 1.5rem;
          color: orange;
        }
        svg {
          background: transparent;
        }
      }
    }
  }

  @keyframes background-change {
    0% {
      background-color: white;
    }
    50% {
      background-color: orange;
    }
    100% {
      background-color: white;
    }
  }

  @keyframes color-change {
    0% {
      color: #474747;
    }
    40% {
      color: white;
    }
    60% {
      color: white;
    }
    100% {
      color: #474747;
    }
  }

  @media (max-width: 768px) {
    padding: 0 3rem;
  }
`;

export default Header;

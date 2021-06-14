import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { menuDisplayHandler } from "../utils";
import Social from "./Social";

const Aside = ({ className, menuDisplay, setMenuDisplay }) => {
  return (
    <AsideStyled className={className}>
      <div
        className="blur"
        onClick={() => menuDisplayHandler(menuDisplay, setMenuDisplay)}
      />
      <div className="menu">
        <div className="menu-list">
          <nav className="menu-options">
            <p className="nav-item resume">
              <i className="far fa-file-pdf"></i>
              <a
                href="https://bit.ly/3bgrMDS"
                target="_blank"
                rel="noreferrer"
                onClick={() => menuDisplayHandler(menuDisplay, setMenuDisplay)}
              >
                Resume
              </a>
            </p>
            <p className="nav-item portfolio">
              <i className="fas fa-briefcase"></i>
              <Link
                to="/portfolio"
                onClick={() => menuDisplayHandler(menuDisplay, setMenuDisplay)}
              >
                Portfolio{" "}
              </Link>
            </p>
            <p className="nav-item contact">
              <i class="far fa-comment-dots"></i>
              <Link
                to="/contact"
                onClick={() => menuDisplayHandler(menuDisplay, setMenuDisplay)}
              >
                Get in touch{" "}
              </Link>
            </p>
          </nav>
          <Social />
        </div>
      </div>
    </AsideStyled>
  );
};
const AsideStyled = styled.aside`
  display: none;
  @media (max-width: 768px) {
    min-height: 100vh;
    height: 100%;
    position: absolute;
    display: flex;
    width: 100%;
    top: 0;
    right: -100%;
    z-index: 100;
  }
  &.aside-closed {
    display: none;
    position: absolute;
    transition: right 0.2s ease;
  }

  &.aside-open {
    right: 0;
    div.blur {
      width: 40%;
      height: 100%;
      backdrop-filter: blur(3px);
    }
    div.menu {
      width: 60%;
      height: 100%;
      background-color: #2c2c2c;
      opacity: 0.98;
      backdrop-filter: blur(2px);
      border-left: solid 1px #858383;
      padding: 2rem;
      display: grid;
      place-items: center;
      div.menu-list {
        padding: 1rem;
        width: 100%;
        height: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        nav {
          width: 100%;
          p {
            margin: 2rem 0;
            font-size: 1.5rem;
            i {
              width: 2.5rem;
              color: orange;
            }
            a {
              color: orange !important;
            }
          }
        }
      }
    }
  }
`;
export default Aside;

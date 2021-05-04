import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const Header = ({ menuDisplay, menuDisplayHandler }) => {
  return (
    <header>
      <div className="logo-container">
        <div className="logo-image-container">
          <div className="logo-image">
            <img src="/images/FacundoGarcia.jpg" alt="" />
          </div>
        </div>

        <div className="logo-name">
          <h4>Facundo García</h4>
          <small>Web developer</small>
        </div>
      </div>

      <div className="menu">
        <nav className="nav-bar">
          <ul className={`nav-list nav-${menuDisplay}`}>
            <a href="">
              <li className="nav-item">Resume</li>
            </a>
            <a href="">
              <li className="nav-item">Portfolio</li>
            </a>
            <a href="">
              <li className="nav-item">Contact</li>
            </a>
          </ul>
          <div
            className="toggle-menu"
            onClick={() => menuDisplayHandler(menuDisplay)}
          >
            <div className="icon-container">
              {menuDisplay && (
                <Icon size="2x" icon={faTimesCircle} color={"#984528"} />
              )}
              {!menuDisplay && (
                <Icon size="2x" icon={faEllipsisV} color={"dodgerblue"} />
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

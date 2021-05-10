import React from "react";

const Header = ({ menuDisplay, menuDisplayHandler }) => {
  return (
    <header>
      <div className="logo-container">
        {/* <div className="logo-image-container">
          <div className="logo-image">
            <img src={homeImage} alt="" />
          </div>
        </div> */}

        <div className="logo-name">
          <a href="/">
            <h2>{"{ ...f }"}</h2>
          </a>
        </div>
      </div>

      <div className="menu">
        <nav className="nav-bar">
          <div className={`nav-list nav-${menuDisplay}`}>
            <p className="nav-item">
              <a href="https://bit.ly/3ux0q3Y" target="_blank" rel="noreferrer">
                Resume
              </a>
            </p>
            <p className="nav-item">Portfolio</p>
            <p className="nav-item">Contact</p>
          </div>
          <div
            className="toggle-menu"
            onClick={() => menuDisplayHandler(menuDisplay)}
          >
            <div className="icon-container">
              {menuDisplay && <i className="fas fa-times"></i>}
              {!menuDisplay && <i className="fas fa-ellipsis-v"></i>}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

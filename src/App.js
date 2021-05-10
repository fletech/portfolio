import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

//Import Style
import "./styles/app.scss";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Portfolio from "./pages/Portfolio";

const App = () => {
  //UseState
  const [menuDisplay, setMenuDisplay] = useState(true);
  const menuDisplayHandler = (menuDisplay) => {
    !menuDisplay ? setMenuDisplay(true) : setMenuDisplay(false);
  };
  //Location
  const location = useLocation();
  return (
    <div className="App">
      <Header
        menuDisplay={menuDisplay}
        setMenuDisplay={setMenuDisplay}
        menuDisplayHandler={menuDisplayHandler}
      />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Main />
        </Route>

        <Route path="/portfolio">
          <Portfolio />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
};

export default App;

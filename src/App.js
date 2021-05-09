import React, { useState } from "react";

//Import Style
import "./styles/app.scss";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  //UseState
  const [menuDisplay, setMenuDisplay] = useState(false);
  const menuDisplayHandler = (menuDisplay) => {
    !menuDisplay ? setMenuDisplay(true) : setMenuDisplay(false);
  };
  return (
    <div className="App">
      <Header
        menuDisplay={menuDisplay}
        setMenuDisplay={setMenuDisplay}
        menuDisplayHandler={menuDisplayHandler}
      />
      <Main />
      <Footer />
    </div>
  );
};

export default App;

import React, { useState, useRef } from "react";

//Import Style
import "./styles/app.scss";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  //useRef
  const documentRef = useRef(null);
  //UseState
  const [menuDisplay, setMenuDisplay] = useState(false);
  const menuDisplayHandler = (menuDisplay) => {
    !menuDisplay ? setMenuDisplay(true) : setMenuDisplay(false);
    console.log(menuDisplay);
    console.log(documentRef.current.header);
  };
  return (
    <div className="App" ref={documentRef}>
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

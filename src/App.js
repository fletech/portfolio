import React, { useState, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

//Import Style
import "./styles/app.scss";
//Components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
//Pages
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

const App = () => {
  //Location
  const location = useLocation();

  //UseState
  const [menuDisplay, setMenuDisplay] = useState(true);

  //States
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [modalClassName, setModalClassName] = useState("");

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  //handlers

  const menuDisplayHandler = (menuDisplay) => {
    !menuDisplay ? setMenuDisplay(true) : setMenuDisplay(false);
  };

  const onChangeHandler = (e) => {
    switch (e.target.id) {
      case "subject":
        setSubject(e.target.value);

        break;
      case "message":
        setMessage(e.target.value);

        break;
      case "name":
        setName(e.target.value);

        break;
      case "email":
        setEmail(e.target.value);

        break;

      default:
        break;
    }
  };

  useEffect(() => {
    fetch("https://fletapi.herokuapp.com/facundo/api/posts")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
          setItems(result);
        },
        // Nota: es importante manejar errores aquí y no en
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          setIsLoaded(true);
          setError(error);
          console.log(error);
        }
      );
  }, []);

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
        <Route path="/contact" exact>
          <Contact
            subject={subject}
            setSubject={setSubject}
            message={message}
            setMessage={setMessage}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            modalClassName={modalClassName}
            setModalClassName={setModalClassName}
            onChangeHandler={onChangeHandler}
          />
        </Route>
        {/* <Route path="/blog">
          <Blog isLoaded={isLoaded} error={error} items={items} />
        </Route> */}
      </Switch>

      <Footer />
    </div>
  );
};

export default App;

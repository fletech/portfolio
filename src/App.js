import React, { useState, useEffect } from "react";
import {
  Route,
  Switch,
  Routes,
  BrowserRouter,
  useLocation,
  useHistory,
} from "react-router-dom";

//Pages
import Portfolio from "./pages/Portfolio";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import Layout from "./components/Layout/";
import Home from "./pages/Home";
import { GlobalStyle } from "./components/GlobalStyles";

const App = () => {
  //Location
  const location = useLocation();
  // const history = useHistory();
  //UseState
  const [menuDisplay, setMenuDisplay] = useState(false);

  //States
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [modalClassName, setModalClassName] = useState("");
  const [gap, setGap] = useState(false);

  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [items, setItems] = useState([]);

  //handlers

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

  // useEffect(() => {
  //   let app = document.querySelector(".App");
  //   app.addEventListener("click", (e) => {
  //     if (e.altKey) {
  //       e.preventDefault();
  //       history.push("/admin");
  //     }
  //   });
  // }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <Layout menuDisplay={menuDisplay} setMenuDisplay={setMenuDisplay}>
        <Routes location={location} key={location.pathname}>
          <Route element={<Home />} path="/" exact />

          <Route element={<Admin />} path="/admin" />

          <Route element={<Portfolio />} path="/portfolio" />

          <Route
            element={
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
            }
            path="/contact"
            exact
          />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;

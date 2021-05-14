import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "../components/Form";
import {
  MainStyled,
  ModalStyled,
  MessageModalStyled,
} from "../styles/styledComponents";

const Contact = ({
  subject,
  message,
  name,
  email,
  setSubject,
  setMessage,
  setName,
  setEmail,
  onChangeHandler,
  modalClassName,
  setModalClassName,
}) => {
  const [buttonClassName, setButtonClassName] = useState("");

  const [submitted, setSubmitted] = useState(false);
  //handlers

  const buttonHandler = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  //Use effect

  useEffect(() => {
    if (subject !== "" && message !== "" && name !== "" && email !== "") {
      setButtonClassName("active");
      if (submitted) {
        const body = {
          subject: subject,
          message: message,
          name: name,
          email: email,
        };
        axios
          .post("https://fletapi.herokuapp.com/facundo/api/new-message", body)
          .then((response) => {
            console.log(response.data);
            setSubject("");
            setMessage("");
            setName("");
            setEmail("");
            setButtonClassName("");
            setModalClassName("successed");
            setTimeout(() => {
              setSubmitted(false);
              setModalClassName("");
            }, 3000);
          })
          .catch((err) => console.log(err));
      }
    } else {
      setButtonClassName("");
    }
  }, [
    subject,
    message,
    name,
    email,
    setSubject,
    setMessage,
    setName,
    setEmail,
    submitted,
    setModalClassName,
  ]);

  return (
    <MainStyled>
      <Form method="POST">
        <p>
          <label id="subject" htmlFor="">
            Subject
          </label>
          <input
            onChange={onChangeHandler}
            id="subject"
            type="text"
            value={subject}
            required
          />
        </p>

        <p>
          <label id="message" htmlFor="">
            Message
          </label>
          <textarea
            onChange={onChangeHandler}
            id="message"
            type="text"
            value={message}
            required
          />
        </p>

        <p>
          <label id="name" htmlFor="">
            Name
          </label>
          <input
            onChange={onChangeHandler}
            id="name"
            type=""
            value={name}
            required
          />
        </p>

        <p>
          <label id="email" htmlFor="">
            Email
          </label>
          <input
            onChange={onChangeHandler}
            id="email"
            type="email"
            value={email}
            required
          />
        </p>

        <button
          className={buttonClassName}
          onClick={buttonHandler}
          type="submit"
        >
          Send
        </button>
        <ModalStyled className={modalClassName} />
        <MessageModalStyled className={modalClassName}>
          <h3>Message sent ✅! We will contact you asap 👋🏼</h3>
        </MessageModalStyled>
      </Form>
    </MainStyled>
  );
};

export default Contact;

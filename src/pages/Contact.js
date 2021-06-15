import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "../components/Form";

import styled from "styled-components";
import {
  MainStyled,
  ModalStyled,
  MessageModalStyled,
} from "../styledComponents";

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
  const [posted, setPosting] = useState(false);
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
        setPosting(true);
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
            setPosting(false);

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
          {posted ? (
            <SpinnerStyled className="spinner-container">
              <div className="spinner"></div>
              <small>Sending...</small>
            </SpinnerStyled>
          ) : (
            "Send"
          )}
        </button>
        <ModalStyled className={modalClassName} />
        <MessageModalStyled className={modalClassName}>
          <h3>Message sent ✅! We will contact you asap 👋🏼</h3>
        </MessageModalStyled>
      </Form>
    </MainStyled>
  );
};
const SpinnerStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  div.spinner {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 2px solid #fff;
    border-left: 1px solid orange;
    animation: spin 1s linear infinite;
  }
  small {
    color: white;
  }
`;

export default Contact;

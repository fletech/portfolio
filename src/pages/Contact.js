import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "../components/Contact/Form";

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
  const [posted, setPosting] = useState(false);

  //handlers
  const buttonHandler = (e) => {
    e.preventDefault();
    if (buttonClassName === "active") {
      setPosting(true);
      const body = {
        subject: subject,
        message: message,
        name: name,
        email: email,
      };
      axios
        .post("https://fletapi.herokuapp.com/api/new-message", body)
        // .post(
        //   "http://ec2-54-213-209-234.us-west-2.compute.amazonaws.com/api/new-message",
        //   body
        // )
        .then((response) => {
          console.log(response.data);
          setPosting(false);
          setSubject("");
          setMessage("");
          setName("");
          setEmail("");
          setButtonClassName("");
          setModalClassName("successed");

          setTimeout(() => {
            setModalClassName("");
          }, 3000);
        })
        .catch((err) => console.log(err));
    }
  };

  //Use effect

  useEffect(() => {
    if (subject !== "" && message !== "" && name !== "" && email !== "") {
      setButtonClassName("active");
    } else {
      setButtonClassName("");
    }
  }, [subject, message, name, email]);

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

  div.spinner {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 2px solid #fff;
    border-left: 2px solid dodgerblue;
    animation: spin linear 8s infinite;
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
  small {
    color: white;
  }
`;

export default Contact;

import React from "react";
import styled from "styled-components";

const Form = ({ children }) => {
  return <FormStyled>{children}</FormStyled>;
};

const FormStyled = styled.form`
  width: 50%;
  min-width: 350px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  @media (max-width: 500px) {
    width: 80%;
  }
  p {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-bottom: solid 1px #dbdbdb;
    margin-bottom: 1rem;
    label {
      font-family: "Inter", sans-serif;
      font-size: 1rem;
      font-weight: 300;
      color: #474747;
    }
    input {
      @media (max-width: 768px) {
        font-size: 16px;
      }
      border: none;
      color: #474747;
      width: 100%;
      outline: none;
      padding: 10px 5px;
      border-bottom: solid 1px #fff;

      &:focus {
        border-bottom: solid 1px orange;
        background-color: #fcfcfd;
      }
    }
    textarea#message {
      @media (max-width: 768px) {
        font-size: 16px;
      }
      form-sizing: content;
      border: none;
      color: #474747;
      width: 100%;
      outline: none;
      padding-bottom: 10px;
      border-bottom: solid 1px #fff;

      &:focus {
        border-bottom: solid 1px orange;
        background-color: #fcfcfd;
      }
    }
  }

  button {
    width: 10rem;
    height: 2rem;
    border-radius: 0.4rem;
    border: none;
    background-color: #dbdbdb;
    color: #474747;
    cursor: not-allowed;
    overflow: hidden;
  }
  button.active {
    background-color: orange;
    color: #474747;
    font-weight: 900;
    cursor: pointer;
    overflow: hidden;
  }
`;
export default Form;

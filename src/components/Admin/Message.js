import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { date } from "../../utils";

const Message = (props) => {
  const [hovered, setHover] = useState(false);

  const { message, className, setDelete } = props;

  const deleteMessageAxios = (deleted) => {
    // fetch("https://fletapi.herokuapp.com/facundo/api/messages")
    axios
      .delete(`https://fletapi.herokuapp.com/facundo/api/messages/${deleted}`)
      .then((res) => res)
      .then(
        (result) => {
          console.log(result);
          setDelete(true);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <MessageStyled
      className={className}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="container">
        <p>{message.subject}</p>
      </div>
      <div className="container">
        <p>{message.message}</p>
      </div>
      <div className="container">
        <p>{message.email}</p>
      </div>
      <div className="container">
        <p>
          <span>{date(message.date)[0]}</span>
          <small>
            <i>at {date(message.date)[1]}</i>
          </small>
        </p>
      </div>
      {hovered && (
        <div class="button-delete">
          <button onClick={() => deleteMessageAxios(message._id)}>
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
      )}
    </MessageStyled>
  );
};

const MessageStyled = styled.div`
  height: auto;
  width: 100%;
  padding-bottom: 2rem;
  border-bottom: solid 1px #dad7d7;
  display: grid;
  padding: 1rem 0;
  grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
  cursor: pointer;
  position: relative;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
  .container {
    padding: 0 1.5rem;
    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      span {
        font-weight: 400;
        font-size: 90%;
        margin-right: 1rem;
      }
      small {
        font-weight: light;
        font-size: 70%;
      }
    }
  }
  &:hover {
    background-color: #ffda95;
  }
  div.button-delete {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    button {
      cursor: pointer;
      background: none;
      border: none;
      width: 2.5rem;
      height: 2.5rem;
      display: grid;
      place-items: center;
      background-color: #fff;
      border-radius: 2rem;
      i {
        font-size: 1rem;
        display: grid;
        place-items: center;
        color: tomato;
      }
    }
  }
`;

export default Message;

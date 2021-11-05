import { useEffect, useState } from "react";
import styled from "styled-components";
import Message from "../components/Admin/Message";
import Preview from "../components/Preview";

const Admin = () => {
  const [messages, setMessages] = useState([]);
  const [deleted, setDelete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "http://ec2-54-213-209-234.us-west-2.compute.amazonaws.com/api/messages"
    )
      //fetch("http://localhost:3009/facundo/api/messages")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoading(false);
          setMessages(result);
        },
        // Nota: es importante manejar errores aquí y no en
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          console.log(error);
        }
      );
  }, [deleted]);

  return isLoading ? (
    <AdminStyled>
      <Preview />
    </AdminStyled>
  ) : (
    <AdminStyled>
      <div className="aside">
        <p>Messages</p>
      </div>
      <div className="messages-section">
        <div className="messages">
          {messages.map((message) => (
            <Message
              message={message}
              className="message"
              key={message.id}
              setDelete={setDelete}
            />
          ))}
        </div>
      </div>
    </AdminStyled>
  );
};
const AdminStyled = styled.section`
  width: 90%;
  height: 85vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
  div.aside {
    width: 20%;
    height: 70%;
    pointer-events: none;
    display: grid;
    place-items: center;
    @media (max-width: 600px) {
      width: 100%;
      height: auto;
    }
    p {
      color: orange;
      width: auto;
      padding: 0.5rem 1rem;
      border: solid 1px #e6e6e6;
      border-radius: 2rem;
      cursor: pointer;
    }
  }
  div.messages-section {
    width: 80%;
    @media (max-width: 600px) {
      width: 100%;
      border-radius: 0px;
    }
    height: auto;
    min-height: 50%;
    max-height: 60vh;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    border-top: solid 1px #d6d6d6;
    border-left: solid 1px #d6d6d6;
    border-bottom: solid 1px #d6d6d6;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    &::-webkit-scrollbar {
      position: absolute;
      left: -100px;
      width: 5px;
      background-color: #f3f3f3;
    }
    &::-webkit-scrollbar-thumb {
      height: 30%;

      background-color: #e2e1e1;
    }
  }
`;

export default Admin;

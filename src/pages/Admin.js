import { useEffect, useState } from "react";
import styled from "styled-components";
import Message from "../components/Message";
import Preview from "../components/Preview";
import { MainStyled } from "../styledComponents";

const Admin = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://fletapi.herokuapp.com/facundo/api/messages")
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
  }, []);
  return (
    <AdminStyled>
      {isLoading && <Preview />}

      {!isLoading && (
        <>
          <aside>
            <p>Messages</p>
          </aside>
          <section>
            <div className="messages">
              {messages.map((message) => (
                <Message message={message} className="message" />
              ))}
            </div>
          </section>
        </>
      )}
    </AdminStyled>
  );
};
const AdminStyled = styled(MainStyled)`
  flex-direction: row;
  width: 100%;
  aside {
    width: 30%;
    height: 70%;
    display: grid;
    place-items: center;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    pointer-events: none;
    p {
      color: orange;
      width: 10rem;
      height: 2rem;
      border: solid 2px orange;
      border-radius: 2rem;
      display: grid;
      place-items: center;
      cursor: pointer;
    }
  }
  section {
    width: 70%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 1rem;
    overflow-y: scroll;
    border-top: solid 1px #d6d6d6;
    border-left: solid 1px #d6d6d6;
    border-bottom: solid 1px #d6d6d6;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;

    &::-webkit-scrollbar {
      position: absolute;
      left: -100px;
      height: 50%;
      width: 10px;
      background-color: #f3f3f3;
    }
    &::-webkit-scrollbar-thumb {
      background-color: orange;
    }
  }
`;

export default Admin;

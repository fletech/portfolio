import { useEffect, useState } from "react";
import styled from "styled-components";
import { MainStyled } from "../styledComponents";

const Admin = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    fetch("https://fletapi.herokuapp.com/facundo/api/messages")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);

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
      <aside>
        <p>Messages</p>
      </aside>
      <section>
        {messages.map((message) => (
          <div className="message">
            <p>{message.subject}</p>
            <p>{message.message}</p>
            <p>{message.email}</p>
            <p>{message.date}</p>
          </div>
        ))}
      </section>
    </AdminStyled>
  );
};
const AdminStyled = styled(MainStyled)`
  flex-direction: row;

  aside {
    width: 30%;
    height: 100%;
    display: grid;
    place-items: center;
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
    height: auto;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    div.message {
      height: 6rem;
      width: 100%;
    }
  }
`;
export default Admin;

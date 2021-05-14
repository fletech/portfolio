import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MainStyled } from "../styles/styledComponents";

const Blog = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
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
    <MainPostsStyled>
      {error && <p>{error}</p>}
      {isLoaded &&
        items.map((item) => (
          <PostStyled>
            <h2>{item.title}</h2>
            <h3>{item.body}</h3>
            <p>{item.author}</p>
            <p>{item.date}</p>
          </PostStyled>
        ))}
    </MainPostsStyled>
  );
};
const MainPostsStyled = styled(MainStyled)`
  flex-direction: row;
`;

const PostStyled = styled.div`
  width: 100%;
`;
export default Blog;

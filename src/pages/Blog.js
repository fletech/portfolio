import React from "react";
import styled from "styled-components";
import { MainStyled } from "../styles/styledComponents";

const Blog = ({ error, isLoaded, items }) => {
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
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: center;
`;

const PostStyled = styled.div`
  width: 300px;
`;
export default Blog;

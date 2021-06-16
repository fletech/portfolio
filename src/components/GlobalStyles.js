import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  color: #3a3939;

//font-family: "Poppins", sans-serif;
//font-family: 'Concert One', monospace;
font-family: "Noto Sans KR", sans-serif;
  font-weight: 400;
  //transition: all 0.2s ease-in-out;
}

html {
  @media (max-width: 600px) {
    font-size: 80%;
  }
}
body{
  overflow-x: hidden;
}

.App {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

// @keyframes App-logo-spin
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
`;

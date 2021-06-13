import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
//@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500&display=swap");

//@import url("https://fonts.googleapis.com/css2?family=Concert+One&family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");

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
  transition: all 0.2s ease-in-out;
}

html {
  @media (max-width: 600px) {
    font-size: 80%;
  }
}
body{
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

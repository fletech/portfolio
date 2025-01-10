import styled from "styled-components";

export const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 85vh;
  overflow: hidden;
  z-index: 1;
`;

export const ModalStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  background: transparent;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 100;
  pointer-events: none;
  filter: blur(1px);
  animation: modal 2s ease-in-out;
  &.successed {
    opacity: 1;
    backdrop-filter: blur(2px);
  }
`;

export const MessageModalStyled = styled.div`
  position: absolute;
  top: 10%;
  right: 10%;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  padding: 2rem;
  width: 20%;
  height: 10vh;
  @media (max-width: 800px) {
    width: auto;
    height: 10vh;
  }
  background-color: white;
  border-radius: 6px;
  border: solid 1px #e6e6e6;
  pointer-events: none;
  &.successed {
    transition: all 0s;
    animation: modal 4s ease-in-out;
    box-shadow: 2px 2px 200px #a7a6a6, -2px -2px 400px #a7a6a6;
  }
  h3 {
    color: #474747;
    width: 100%;
    font-weight: 300;
    font-size: 1rem;
  }

  @keyframes modal {
    0% {
      opacity: 0;
    }
    50% {
      transform: translatex(-20%);
      opacity: 0.9;
    }

    100% {
      transform: translatex(1000%);
      opacity: 0;
    }
  }
`;

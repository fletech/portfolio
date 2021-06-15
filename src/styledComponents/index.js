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
  filter: blur(3px);
  transition: opacity 0.2s ease-in-out;
  &.successed {
    opacity: 1;
    backdrop-filter: blur(2px);
  }
`;

export const MessageModalStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  padding: 2rem;
  width: 40%;
  height: 20vh;
  transform: translateX(-50%) translateY(-50%);
  background-color: orange;
  border-radius: 6px;
  pointer-events: none;
  &.successed {
    transition: all 0s;
    animation: modal 4s 1;
    box-shadow: 2px 2px 8px #a7a6a6, -2px -2px 8px #a7a6a6;
  }
  h3 {
    color: white;
    width: 100%;
  }

  @keyframes modal {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.9;
    }

    100% {
      opacity: 0;
    }
  }
`;

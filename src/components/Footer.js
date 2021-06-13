import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyled>
      <div className="author-info">
        <p>
          © website built on React{" "}
          <a
            href="https://reactjs.org/docs/getting-started.html"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-react"></i>{" "}
          </a>
          by{" "}
          <a
            href="https://www.linkedin.com/in/facundo-garcia-ar/"
            target="_blank"
            rel="noreferrer"
          >
            <span>Facundo Garcia</span>
          </a>
        </p>
      </div>
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
  background-color: #323232;
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  div p {
    color: white !important;
    a i {
      color: orange;
    }
    a i.fa-react {
      animation: spin 5s infinite;
    }
    span {
      color: orange;
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(1500deg);
    }
    50% {
      transform: rotate(90deg);
    }
    75% {
      transform: rotate(600deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
`;

export default Footer;

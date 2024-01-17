import styled from "styled-components";
import homeImage from "../images/Facundo.jpg";
import Social from "./Layout/Social";

const Main = () => {
  return (
    <SectionStyled>
      <div className="image-container">
        <img src={homeImage} alt="" />
      </div>
      <div className="heading">
        <div className="greeting">
          <span>👋🏼</span>
        </div>
        <h2>Hello, I'm Facundo Garcia</h2>
      </div>
      <p>
        A self-taught full-stack developer with a background in music and
        gastronomy.
      </p>
      <p>
        I'm passionate about learning and building things that make people's
        needs an easy-going.
      </p>

      <p>Based in Sweden 🇸🇪</p>

      <div className="about-me">
        <div className="description">
          <small>Send me a message if you'd like to share your ideas</small>
        </div>

        <Social />
      </div>
    </SectionStyled>
  );
};
const SectionStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 85vh;
  overflow: hidden;
  z-index: 1;
  justify-content: space-evenly;

  .image-container {
    display: flex;
    align-items: center;
    width: 300px;
    height: 300px;
    overflow: hidden;
    object-fit: cover;
    border-radius: 50%;

    img {
      width: 100%;
      transform: translateY(10%);
    }
  }
  div.heading {
    display: flex;
    align-items: center;

    div.greeting {
      display: flex;
      width: auto;
      margin-right: 1rem;
      span {
        font-size: 2.1rem;
      }
      p {
        animation: shake 0.5s linear infinite;
        font-size: 2rem;
        transform: rotate(0deg);
      }
    }
    h2 {
    }
  }

  @keyframes shake {
    0% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(30deg);
    }
    67% {
      transform: rotate(-20deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }
  .about-me {
    padding: 1rem;
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border-top: solid 0.1rem #e3e3e3;
    .description {
      margin-bottom: 2rem;
      max-width: 400px;
      h3 {
        color: #474747;
      }
      p {
        margin: 10px 0px;
        text-indent: 1rem;
      }
      h4 {
        margin: 10px 0px;
        font-weight: 200;
      }
    }
  }

  @media (max-width: 600px) {
    main {
      height: 75vh;
      justify-content: center;
    }
    .image-container {
      width: 200px;
      height: 200px;
    }
    .about-me {
      padding: 1rem;
    }
  }
`;
export default Main;

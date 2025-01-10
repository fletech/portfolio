import styled from "styled-components";
import homeImage from "../images/Facundo.jpg";
import Social from "./Layout/Social";

const Main = () => {
  return (
    <SectionStyled>
      <div className="image-container">
        <img src={homeImage} alt="" />
      </div>
      <div className="about-me">
        <div className="heading">
          <div className="greeting">
            <span>👋🏼</span>
          </div>
          <h2>Hello, I'm Facundo Garcia</h2>
        </div>

        <p>
          <span className="bullet">{">"}</span> A self-taught full-stack
          developer from Argentina with +3 years of experience. I'm passionate
          about databases, UI/UX design, and learning new technologies
          constantly.
          <br />
          <span className="bullet">{">"}</span> Based in Copenhagen{" "}
          <span>🇩🇰</span>
        </p>

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
    background: #f3f3f3;
    border: solid 0.1rem orange;
    box-shadow: 0rem 0rem 0.5rem orange;
    img {
      backdrop-filter: blur(2px);
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
    width: 60%;
    h3 {
      color: #474747;
    }
    p {
      margin: 10px 0px;
      line-height: 2rem;

      .bullet {
        color: orange;
        font-size: 1.2rem;
        font-weight: bold;
      }
      span {
        font-size: 1.2rem;
      }
    }
    h4 {
      margin: 10px 0px;
      font-weight: 200;
    }
    .description {
      border-top: solid 0.1rem #e3e3e3;
      margin-top: 1rem;
      margin-bottom: 1rem;
      padding-top: 1rem;
      padding-bottom: 1rem;
      font-size: 1rem;
      color: #474747;
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

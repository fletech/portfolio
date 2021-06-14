import styled from "styled-components";
import homeImage from "../images/Facundo.jpg";
import { Link } from "react-router-dom";
import Social from "./Social";

const Main = () => {
  return (
    <SectionStyled>
      <div className="image-container">
        <img src={homeImage} alt="" />
      </div>
      <h2>Hello 👋🏼, I'm Facundo Garcia</h2>
      <h3></h3>

      <div className="about-me">
        <div className="description">
          <h3>
            Node.js Full stack focusing on front-end with React and its
            environment.{" "}
          </h3>
          <p></p>
          <h4>Currently coding to deliver something great.</h4>
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
      h4 {
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

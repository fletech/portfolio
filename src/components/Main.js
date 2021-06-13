import styled from "styled-components";
import homeImage from "../images/Facundo.jpg";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <SectionStyled>
      <div className="image-container">
        <img src={homeImage} alt="" />
      </div>
      <h2>Facundo Garcia</h2>

      <div className="about-me">
        <div className="description">
          <h3>
            Node.js Full stack focusing on front-end with React and its
            environment.{" "}
          </h3>
          <p></p>
          <h4>Currently coding to deliver something great.</h4>
        </div>

        <div className="social-network">
          <div className="button-container">
            <a
              href="https://github.com/fletech"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
          <div className="button-container">
            <a
              href="https://www.linkedin.com/in/facundo-garcia-ar/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <div className="button-container">
            <Link to="/contact">
              <i className="fas fa-envelope"></i>
            </Link>
          </div>
        </div>
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
    padding: 0.5rem 0rem;
    margin-top: 2rem;
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

    .social-network {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 200px;
      .button-container {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: orange;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        &:hover i {
          color: white;
        }
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }
        i {
          color: #474747;
          font-size: 16px;
        }
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
      padding: 0.5rem 1rem;
    }
  }
`;
export default Main;

import styled from "styled-components";
import { date } from "../utils";

const Message = (props) => {
  const { message, className } = props;

  return (
    <MessageStyled className={className}>
      <div className="container">
        <p>{message.subject}</p>
      </div>
      <div className="container">
        <p>{message.message}</p>
      </div>
      <div className="container">
        <p>{message.email}</p>
      </div>
      <div className="container">
        <p>
          <span>{date(message.date)[0]}</span>
          <small>
            <i>at {date(message.date)[1]}</i>
          </small>
        </p>
      </div>
    </MessageStyled>
  );
};

const MessageStyled = styled.div`
  height: auto;
  width: 100%;
  padding-bottom: 2rem;
  border-bottom: solid 1px #dad7d7;
  display: grid;
  padding: 1rem 0;
  grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
  cursor: pointer;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
  .container {
    padding: 0 1.5rem;
    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      span {
        font-weight: 400;
        font-size: 90%;
        margin-right: 1rem;
      }
      small {
        font-weight: light;
        font-size: 70%;
      }
    }
  }
  &:hover {
    background-color: #ffda95;
  }
`;

export default Message;

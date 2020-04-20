import styled from "styled-components";

import colours from "../../App.css";

export const MessagesWrapper = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: space-between;
`;

export const MessagesList = styled.div`
  padding: 1em;
  flex: 1 1 auto;
  overflow-y: auto;
  height: 0px;
  p {
    color: ${colours.darkGrey};
    font-size: 0.9em;
  }
`;

export const NewMessageForm = styled.form`
  min-height: 20px;
  padding: 0.5em;
  border-top: 1px solid ${colours.mediumGrey};
  display: flex;
  justify-content: space-between;
  height: 40px;
  input,
  button {
    font-size: 0.9em;
  }
`;

export const MessageBox = styled.input`
  border-color: transparent;
  width: 90%;
`;

export const MessageWrapper = styled.div`
  padding: 0.5em;
  display: flex;

  ${props =>
    props.from === "sent" &&
    `
      justify-content: flex-end;
    `}
`;

export const MessageRead = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
`;

export const Message = styled.div`
  border-radius: 20px;
  padding: 0.5em 1em;
  display: inline-block;
  font-size: 0.9rem;
  background: ${props =>
    props.from === "received" ? colours.lightGrey : colours.lightBlue};
  color: ${props =>
    props.from === "received" ? colours.black : colours.white};
`;

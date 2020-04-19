import styled from "styled-components";
import colours from "../App.css";

export const StyledPage = styled.div`
  height: 100%;
  padding: 0;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  flex-direction: column;
  > div {
    max-width: 270px;
    padding: 20px 0;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  input,
  button {
    font-size: 1em;
    border-radius: 5px;
    padding: 0.5em;
  }
  label {
    display: flex;
    flex-direction: column;
  }
  input {
    background-color: ${colours.lightGrey};
  }
  button {
    border: 1px solid ${colours.lightBlue};
  }
`;

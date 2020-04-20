import styled from "styled-components";
import colours from "../App.css";

export const ThreadsWrapper = styled.div`
  display: flex;
  border-right: 1px solid ${colours.mediumGrey};
  flex-direction: column;
  flex-basis: 30%;
`;

export const ThreadBar = styled.div`
  border-bottom: 1px solid ${colours.mediumGrey};
  padding: 0.85em;
  h2 {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
  }
`;

export const ThreadList = styled.ul`
  overflow-y: auto;
  width: 100%;
  list-style: none inside none;
  padding: 0;
  margin: 0;
  li {
    display: flex;
    align-items: center;
    padding: 0.4em 0.75em;
    &:hover {
      background: ${colours.lightGrey};
      cursor: pointer;
    }
  }
`;

export const UserName = styled.div`
  font-size: 0.9rem;
  span {
    font-size: 0.9em;
    text-transform: capitalize;
  }
  small {
    font-size: 0.8em;
    color: ${colours.darkGrey};
    margin: 2px 0;
    display: block;
  }
`;

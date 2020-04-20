import styled from "styled-components";

import colours from "../../App.css";

export const UserDetailWrapper = styled.div`
  width: 33.3%;
  border-left: 1px solid ${colours.mediumGrey};
  color: ${colours.darkGrey};
  > div {
    padding: 1em;
    font-size: 0.9em;
    border-bottom: 1px solid ${colours.mediumGrey};
    &:last-child {
      border-bottom: none;
    }
  }
`;

export const User = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    display: flex;
    align-items: center;
  }
`;

export const UserName = styled.div`
  font-size: 0.9rem;
  text-transform: capitalize;
`;

export const LastActive = styled.div`
  font-size: 0.75rem;
  color: ${colours.darkGrey};
`;

export const UserDetailContent = styled.p`
  padding: 1em;
  font-size: 0.9rem;
`;

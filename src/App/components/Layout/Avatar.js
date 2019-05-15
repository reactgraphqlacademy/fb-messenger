import React from "react";
import styled from "styled-components";

const AvatarWrapper = styled.img`
  margin-right: 0.5em;

  ${props =>
    props.size === "small" &&
    `
    clip-path: circle(10px at center);
    width:20px;
  `}
  
  ${props =>
    props.size === "medium" &&
    `
    clip-path: circle(15px at center);
    width:30px;
    height: 30px;
  `}
  
  ${props =>
    props.size === "large" &&
    `
    clip-path: circle(25px at center);
    width: 50px;
  `}
`;

const Avatar = ({ username, size = "medium" }) => (
  <AvatarWrapper
    size={size}
    src={`/images/${username}_lg.jpg`}
    alt={`${username}`}
  />
);

export default Avatar;

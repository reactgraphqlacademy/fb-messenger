import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colours from "../../styles/colours.js";

const StyledIcon = styled.i`
  color: ${props => (props.active ? colours.lightBlue : colours.grey)};
  font-size: ${props => `${props.size}rem`};
`;

StyledIcon.propTypes = {
  active: PropTypes.bool
};

const Icon = ({ name, size = 1.5, active, style, ...props }) => (
  <StyledIcon
    className={`fas fa-${name}`}
    size={size}
    active={active}
    style={style}
    {...props}
  />
);

export default Icon;

import React from 'react'
import styled from 'styled-components'

const AvatarWrapper = styled.img`
  margin-right: 0.5em;
  &.small {
    clip-path: circle(10px at center);
    width:20px;
  }
  &.medium {
    clip-path: circle(15px at center);
    width:30px;
    height: 30px;
  }
  &.large {
    clip-path: circle(25px at center);
    width: 50px;
  }
`

const Avatar = ({ username, size = "medium" }) => (
  <AvatarWrapper
      size={size}
    className={size}
      src={`/images/${username}_lg.jpg`}
      alt={`${username}`}
  />
)

export default Avatar

import React from 'react'

const Avatar = ({ username, size = "medium" }) => (
  <img
    className={`avatar ${size}`}
    src={`/images/${username}_lg.jpg`}
    alt={`${username}`}
  />
)

export default Avatar

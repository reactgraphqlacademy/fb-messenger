import React from 'react'

const TopBar = (props) => (
  <div className="top-bar">
    <i class="icon fab fa-facebook-messenger" />
    <span className={`username ${props.userPosition || 'left'}`}>{props.user.name}</span>
  </div>
)

export default TopBar

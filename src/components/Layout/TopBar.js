import React from 'react'

const TopBar = (props) => (
  <div className="top-bar">
    <i className="icon fab fa-facebook-messenger" />
    <span
      onClick={props.toggleModal}
      className={`username ${props.userPosition || 'left'}`}
    >
      {props.user.name}
    </span>
  </div>
)

export default TopBar

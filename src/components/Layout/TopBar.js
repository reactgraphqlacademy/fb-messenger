import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = (props) => (
  <div className="top-bar">
    <i className="icon fab fa-facebook-messenger" />
    <Link to="?" className={`username ${props.userPosition || 'right'}`}>
     profile <img src="/images/default.jpg" />
    </Link>
  </div>
)

export default TopBar

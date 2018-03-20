import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = (props) => (
  <div className="top-bar">
    <Link to="/messages"><i className="icon fab fa-facebook-messenger" /></Link>
    <Link to="/profile" className={`username ${props.userPosition || 'right'}`}>
     profile <img src="/images/default.jpg" />
    </Link>
  </div>
)

export default TopBar

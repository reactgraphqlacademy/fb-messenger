import React from 'react'
import { Link } from 'react-router-dom'
import { logOut, getSession } from '../../auth'

const TopBar = props => {
  const session = getSession()

  return (
    <div className="top-bar">
      <Link to="/messages">
        <i className="icon fab fa-facebook-messenger" />
      </Link>
      <ul className={`${props.userPosition || 'right'}`}>
        <li>
          <Link to="/login">
            log out
          </Link>
        </li>
        <li>
          <Link to="/profile">
            {session ? session.username : ''} <img src="/images/default.jpg" />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default TopBar

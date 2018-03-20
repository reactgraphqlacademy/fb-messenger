import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { logOut, getSession } from '../../auth'

const TopBar = (props) => {
  const session = getSession()

  return (
    <div className="top-bar">
      <Link to="/messages"><i className="icon fab fa-facebook-messenger" /></Link>
      <ul className={`${props.userPosition || 'right'}`}>
        <li>
          <a onClick={() => {
            logOut()
            props.history.push('/login')
          }}>log out</a>
        </li>
        <li>
          <Link to="/profile">
            {session? session.username: ''} <img src="/images/default.jpg" />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default withRouter(TopBar)

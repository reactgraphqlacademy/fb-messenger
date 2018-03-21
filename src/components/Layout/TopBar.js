import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { logOut, getSession } from '../../auth'
import styled from 'styled-components'
import colours from '../../styles/export/colours.css'

const TopBarWrapper = styled.div`
    background: ${colours.darkBlue};
    padding: 1em;
    text-align: center;
    border-bottom: 1px solid #29487d;
    color: ${colours.white};
    a, .icon {
      color: ${colours.white};
    }
    a {
      cursor: pointer;
    }
    ul {
      list-style: none;
      position: absolute;
      top: 20px;
      display: block;
      img {
        border-radius: 50%;
        height: 50px;
        height: 30px;
        margin-top: -5px;
      }
      li {
        display: inline-block;
        padding-right: 8px;
        padding-left: 8px;
        &:last-child {
          padding-right: 0;
        }
        &:first-child {
          padding-left: 0;
        }
      }
      &.right {
        right: 20px;
      }
      &.left {
        left: 20px;
      }
    }
`


const TopBar = (props) => {
  const session = getSession()

  return (
    <TopBarWrapper>
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
    </TopBarWrapper>
  )
}

export default withRouter(TopBar)

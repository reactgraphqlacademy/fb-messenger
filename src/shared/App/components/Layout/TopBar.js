import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { connect } from 'react-redux'

import { logOut } from '../../../User/auth'
import colours from '../../styles/export/colours.css'

const TopBarWrapper = styled.div`
    background: ${colours.darkBlue};
    padding: 1em;
    text-align: center;
    border-bottom: 1px solid #29487d;
    color: ${colours.white};
    min-height: 60px;
    .fab {
      color: ${colours.white};
      font-size: 1.5em;
    }
`

const TopBarItems = styled.ul`
    list-style: none;
    position: absolute;
    top: 20px;
    display: block;
    ${props => props.position === 'right' && css`
      right: 20px;
    `}
    ${props => props.position === 'left' && css`
      left: 20px;
    `}
    a {
      color: white;
    }
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
`

const TopBar = ({ userPosition, session }) => (
  <TopBarWrapper>
    <Link to="/messages"><i className="icon fab fa-facebook-messenger" /></Link>
    <TopBarItems position={`${userPosition || 'right'}`}>
      <li>
        <Link to="/login" onClick={() => logOut()}>
          log out
        </Link>
      </li>
      <li>
        <Link to="/profile">
          {session? session.username: ''} <img alt="clone" src="/images/default.jpg" />
        </Link>
      </li>
    </TopBarItems>
  </TopBarWrapper>
)

const mapStateToProps = (state) => ({
  session: state.session
})

export default withRouter(connect(mapStateToProps)(TopBar))

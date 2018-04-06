import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { logOut, getSession } from '../../auth'
import styled, { css } from 'styled-components'
import colours from '../../styles/export/colours.css'
import Icon from './Icon'

const TopBarWrapper = styled.div`
    background: ${colours.darkBlue};
    padding: 1em;
    text-align: center;
    border-bottom: 1px solid #29487d;
    color: ${colours.white};
    min-height: 60px;
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

const TopBar = (props) => {
  const session = getSession()

  return (
    <TopBarWrapper>
      <TopBarItems position={`${props.userPosition || 'right'}`}>
        <li>
          <a onClick={() => {
            logOut()
            props.history.push('/login')
          }}>log out</a>
        </li>
      </TopBarItems>
    </TopBarWrapper>
  )
}

export default withRouter(TopBar)

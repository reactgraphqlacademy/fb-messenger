import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledScrollNotifier = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
`

const ScrollNotifier = ({ buffer, onScrollAtTheBottom, children, ...rest }) => {
  const handleScroll = event => {
    const { scrollTop, scrollHeight, clientHeight } = event.target
    const isAtTheBottom = scrollTop + clientHeight >= scrollHeight - buffer

    if (isAtTheBottom && onScrollAtTheBottom)
      onScrollAtTheBottom()
  }

  return (
    <StyledScrollNotifier
      { ...rest }
      onScroll={ handleScroll }
    >
    {children}
   </StyledScrollNotifier>
  )
}

ScrollNotifier.propTypes = {
  buffer: PropTypes.number.isRequired,
  onScrollAtTheBottom: PropTypes.func
}

ScrollNotifier.defaultProps = {
  buffer: 300
}

export default ScrollNotifier

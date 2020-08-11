import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const TopBar = props => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `${count} clicks`
  })

  return (
    <div className="top-bar">
      <span onClick={() => setCount(count + 1)}>
        CLICK ME AND LOOK AT THE DOCUMENT TITLE (TAB)
      </span>
      <Link to="/profile" className="username right">
        @clone <img src="/images/default.jpg" />
      </Link>
    </div>
  )
}

export default TopBar

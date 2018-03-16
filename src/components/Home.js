import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div className="page-center">
    <h1 style={{ textAlign:'center'}}>Sorry the news feed is not implemented yet
      <br />
      See our <Link to="/messages">Messenger</Link>
    </h1>
  </div>
)

export default Home

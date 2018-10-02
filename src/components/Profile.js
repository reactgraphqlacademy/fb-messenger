import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => (
  <div className="page-center">
    <img alt="profile" src="/images/default.jpg" />
    <h1>
      <Link to="/messages">See messages</Link>
    </h1>
  </div>
)

export default Profile

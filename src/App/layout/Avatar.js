import React from 'react'

const Avatar = ({ user, size = 'medium' }) => (
    <img
        className={`avatar ${size}`}
        src={`images/${user.username}_lg.jpg`}
        alt={`${user.username}`}
    />

)

export default Avatar
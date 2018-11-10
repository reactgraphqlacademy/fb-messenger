import React from 'react'

const Link = ({ children, to, ...rest }) => <a href={to} {...rest}>{children}</a>

export default Link
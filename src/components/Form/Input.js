import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Input = ({ type, placeholder, defaultValue, onChange, value }) => (
  <input
    type={type || 'text'}
    placeholder={placeholder || ''}
    className="form-control"
    defaultValue={defaultValue}
    value={value}
    onChange={onChange}
  />
)

Input.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  defaultValue: PropTypes.string,
}

export default Input

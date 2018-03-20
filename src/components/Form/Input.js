import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Input extends Component {
  constructor(props) {
    super(props)

    this.state = { value: null }
  }

  render() {
    const { onChange, type, placeholder, defaultValue } = this.props

    return (
      <input
        type={type || 'text'}
        placeholder={placeholder || ''}
        className="form-control"
        value={this.state.value || defaultValue || ''}
        onChange={ e => {
          const { target: { value }} = e
          this.setState({ value })
          onChange && onChange(e)
        }}
      />
    )
  }
}

Input.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  defaultValue: PropTypes.string,
}

export default Input

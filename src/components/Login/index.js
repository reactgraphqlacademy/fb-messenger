import React, { Component } from 'react'
import { FormGroup, FormControl, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

import './Login.css'

class Login extends Component {
  constructor () {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (name, event) => {
    let change = {}
    change[name] = event.target.value
    this.setState(change)
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const { history } = this.props
    const { password, email } = this.state
    const { status } = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({ password, email })
    })

    if (status === 200) {
      history.push('/')
    }
  }

  render () {
    return (
      <form className="form-signin">
        <FormGroup>
          <h2 className="form-signin-heading">Please sign in</h2>
        </FormGroup>

        <FormGroup>
          <FormControl
            className="form-control"
            id="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange.bind(this, 'email')}
            placeholder="Enter email" />
          <FormControl
            className="form-control"
            id="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange.bind(this, 'password')}
            placeholder="Password" />
        </FormGroup>

        <Button bsSize="large" bsStyle="primary" block type="submit" onClick={this.handleSubmit}>Sign in</Button>
      </form>
    )
  }
}

export default Login

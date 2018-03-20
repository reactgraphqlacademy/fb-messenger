import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
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
      const { from } = this.props.location.state || { from: { pathname: "/" } }
      history.push(from)
    }
  }

  render () {
    return (
      <form className="form-signin">
        <div className="form-group">
          <h2 className="form-signin-heading">Please sign in</h2>
        </div>

        <div className="form-group">
          <input
            type="email"
            placeholder="Enter email"
            className="form-control"
            value={this.state.email}
            onChange={this.handleChange.bind(this, 'email')}
          />
          <input
            type="password"
            placeholder="Enter password"
            className="form-control"
            value={this.state.password}
            onChange={this.handleChange.bind(this, 'password')}
          />
        </div>

        <Button bsSize="large" bsStyle="primary" block type="submit" onClick={this.handleSubmit}>Sign in</Button>
      </form>
    )
  }
}

export default Login

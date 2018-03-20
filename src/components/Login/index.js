import React, {Component} from 'react'
import {FormGroup, FormControl, Button} from 'react-bootstrap'
import './Login.css'

class Login extends Component {
  constructor(props) {
    super(props)

    // Here you'll need to set up the state of the form
    this.state = {}
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { history } = this.props

    if (this.state.username === 'react' && this.state.password === '1234') {
      // Here you need to "send" the user to '/'
    }
  }

  handleChange = (name, event) => {
    let change = {}
    change[name] = event.target.value
    //You need to set the change object in the state of the component
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
            onChange={e => this.handleChange('email', e)}
          />
          <input
            type="password"
            placeholder="Enter password"
            className="form-control"
            value={this.state.password}
            onChange={e => this.handleChange('password', e)}
          />
        </div>
        <Button
          bsSize="large"
          bsStyle="primary"
          block
          type="submit"
          onClick={this.handleSubmit}
        >
          Sign in
        </Button>
      </form>
    )
  }
}

export default Login

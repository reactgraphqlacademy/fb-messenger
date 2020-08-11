import React, { Component } from 'react'
import { FormGroup, FormControl, Button } from 'react-bootstrap'
import './Login.css'

export default function Login() {
  return (
    <form className="form-signin">
      <FormGroup>
        <h2 className="form-signin-heading">Please sign in</h2>
      </FormGroup>

      <FormGroup>
        <FormControl
          onChange={event => this.handleChange('email', event)}
          className="form-control"
          id="email"
          type="email"
          value=""
          placeholder="Enter email"
        />
        <FormControl
          className="form-control"
          id="password"
          type="password"
          value=""
          placeholder="Password"
        />
      </FormGroup>

      <Button bsSize="large" bsStyle="primary" block type="submit">
        Sign in
      </Button>
    </form>
  )
}

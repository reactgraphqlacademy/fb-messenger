import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { withApollo } from 'react-apollo'
import gql from 'graphql-tag'

import Input from '../../../App/components/Form/Input'
import './Login.css'

class Login extends Component {
  constructor () {
    super()

    this.state = {
      redirectToReferrer: false,
      password: '123',
      email: 'clone@facebook.com',
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const { password, email } = this.state

    if (!password || !email) {
      alert('Email and password are required')
      return
    }

    const { data } = await this.props.client.query({
      query: gql`
        query getSession($email: String!, $password: String!) {
          getSession(email: $email, password: $password) {
            status
          }
        }
      `,
      variables: { password, email }
    })

    if (data.getSession.status === 200) {
      this.setState({ redirectToReferrer: true })
    }
  }

  render () {
    const { from } = this.props.location.state || { from: { pathname: "/" } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return <Redirect to={from} />
    }

    return (
      <form className="form-signin">
        <div className="form-group">
          <h2 className="form-signin-heading">Please sign in</h2>
        </div>
        <div className="form-group">
          <Input
            type="email"
            placeholder="Enter email"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <Input
            type="password"
            placeholder="Enter password"
            className="form-control"
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
          />
        </div>
        <button
          type="submit"
          className="btn btn-lg btn-primary btn-block"
          onClick={this.handleSubmit}
        >
          Sign in
        </button>
      </form>
    )
  }
}

export default withApollo(Login)

import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { withApollo } from "react-apollo";
import gql from "graphql-tag";
import { createGlobalStyle } from "styled-components";

import Input from "../../App/components/Form/Input";

const GlobalStyle = createGlobalStyle`
  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: 40px auto 0;
  }

  .form-signin .form-signin-heading {
    margin-bottom: 10px;
  }

  .form-signin .form-control {
    position: relative;
    height: auto;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 10px;
    font-size: 16px;
  }

  .form-signin .form-control:focus {
    z-index: 2;
  }

  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  .form-signin button {
      color: white !important;
  }
`;

class Login extends Component {
  constructor() {
    super();

    this.state = {
      redirectToReferrer: false,
      password: "123",
      email: "clone@facebook.com"
    };
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { password, email } = this.state;

    if (!password || !email) {
      alert("Email and password are required");
      return;
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
    });

    if (data.getSession.status === 200) {
      this.setState({ redirectToReferrer: true });
    }
    return false;
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <React.Fragment>
        <GlobalStyle />
        <form
          onSubmit={this.handleSubmit}
          action="/api/login"
          method="post"
          className="form-signin"
        >
          <div className="form-group">
            <h2 className="form-signin-heading">Please sign in</h2>
          </div>
          <div className="form-group">
            <Input
              type="email"
              name="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
            <Input
              type="password"
              name="password"
              placeholder="Enter password"
              className="form-control"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-lg btn-primary btn-block">
            Sign in
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default withApollo(Login);

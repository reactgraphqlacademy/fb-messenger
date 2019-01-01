import React, { Component } from "react";
import Input from "../Form/Input";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = (name, event) => {
    let change = {};
    change[name] = event.target.value;
    this.setState(change);
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { history } = this.props;
    const { password, email } = this.state;

    if (!password || !email) {
      alert("Email and password are required");
      return;
    }

    const { status } = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({ password, email })
    });

    if (status === 200) {
      history.push("/");
    }
  };

  render() {
    return (
      <form className="form-signin" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <h2 className="form-signin-heading">Please sign in</h2>
        </div>
        <div className="form-group">
          <Input
            type="email"
            placeholder="Enter email"
            value={this.state.email}
            onChange={e => this.handleChange("email", e)}
          />
          <Input
            type="password"
            placeholder="Enter password"
            value={this.state.password}
            onChange={e => this.handleChange("password", e)}
          />
        </div>
        <button type="submit" className="btn btn-lg btn-primary btn-block">
          Sign in
        </button>
      </form>
    );
  }
}

export default Login;

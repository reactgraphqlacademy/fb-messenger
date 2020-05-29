import React, { useRef } from "react";
import Input from "../Form/Input";
import "./Login.css";

const Login = ({ history }) => {
  const passwordRef = useRef();
  const emailRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let password = passwordRef.current && passwordRef.current.value;
    let email = emailRef.current && emailRef.current.value;

    if (!password || !email) {
      alert("Email and password are required");
      return;
    }

    const { status } = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ password, email }),
    });

    if (status === 200) {
      history.push("/");
    }
  };

  return (
    <form className="form-signin" onSubmit={handleSubmit}>
      <div className="form-group">
        <h2 className="form-signin-heading">Please sign in</h2>
      </div>
      <div className="form-group">
        <Input type="email" placeholder="Enter email" ref={emailRef} />
        <input // notice it's not capital i -> it's input not Input, so it works without forwarding the ref in the Input component
          className="form-control"
          type="password"
          placeholder="Enter password"
          ref={passwordRef}
        />
      </div>
      <button type="submit" className="btn btn-lg btn-primary btn-block">
        Sign in
      </button>
    </form>
  );
};

export default Login;

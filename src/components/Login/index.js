import React, { useRef, useState, useEffect } from "react";
import Input from "../Form/Input";
import "./Login.css";

const Login = ({ history }) => {
  //   const passwordRef = useRef();
  const emailRef = useRef();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    emailRef.current.focus();
  }, [emailRef.current]);

  const handleSubmit = async (e) => {
    e.preventDefault();

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
        <Input
          value={email}
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          ref={emailRef}
        />
        <Input
          className="form-control"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-lg btn-primary btn-block">
        Sign in
      </button>
    </form>
  );
};

export default Login;

import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="Enter Your Email..."
          className="loginInput"
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="Enter Your Password..."
          className="loginInput"
        />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">
        <Link to={"/register"} className="link">Register</Link>
      </button>
    </div>
  );
}

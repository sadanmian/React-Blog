import React from "react";
import "./login.css";

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
      <button className="loginRegisterButton">Register</button>
    </div>
  );
}

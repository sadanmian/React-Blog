import React from "react";
import "./register.css";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label htmlFor="">Username</label>
        <input
          type="text"
          placeholder="Enter Your Username..."
          className="registerInput"
        />
        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="Enter Your Email..."
          className="registerInput"
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="Enter Your Password..."
          className="registerInput"
        />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">Login</button>
    </div>
  );
}

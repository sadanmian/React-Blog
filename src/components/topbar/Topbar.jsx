import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";

export default function Topbar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to={"/"} className="link">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link to={"/"} className="link">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link to={"/"} className="link">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link to={"/write"} className="link">
              WRITE
            </Link>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>

      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://pbs.twimg.com/profile_images/1283759937177317376/iKqA9lOB_400x400.jpg"
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to={"/login"} className="link">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link to={"/register"} className="link">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

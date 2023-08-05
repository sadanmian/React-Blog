import React from "react";
import "./topbar.css";

export default function Topbar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i class="fa-brands fa-square-facebook"></i>
        <i class="fa-brands fa-square-twitter"></i>
        <i class="fa-brands fa-square-pinterest"></i>
        <i class="fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">Center</div>
      <div className="topRight">Right</div>
    </div>
  );
}

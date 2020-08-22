import React, { Component } from "react";

import "../assets/css/Nav.css";

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <span id="logo">D&C</span>
        <div className="navLinks">
          <li className="items">
            <p>Home</p>
          </li>
          <li className="items">
            <p>About</p>
          </li>
          <li className="items">
            <p>Contact</p>
          </li>
        </div>
        <div className="navButton">
          <button className="signButton">Sign Up</button>
          <button className="signButton">Sign In</button>
        </div>
      </nav>
    );
  }
}

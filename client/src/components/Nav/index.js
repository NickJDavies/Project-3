import React from "react";

function Nav() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">Logo</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/Quiz">Quiz</a></li>
          <li><a href="/">Home</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
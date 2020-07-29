import React from "react";

function Nav() {
  return (
    <nav>
      <div className="nav-wrapper grey darken-3">
        <a href="#" className="brand-logo">Logo</a>
        <ul id="nav-mobile" className="right hoverable">
          <li><a href="/Quiz">Quiz</a></li>
          <li><a href="/">Home</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

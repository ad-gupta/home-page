import React from "react";

export default function Navbar() {
  return (
    <header className="overall-navbar">
      <img className="company-logo" src="./images/logo.jpg" />

      <nav className="functions">
        <ul className="navbar-chart">
          <li className="nav-item">
            <a className="nav-home" aria-current="page" href="/">
              Home
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-about" href="/">
              About
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-contact" href="/">
              Contact
            </a>
          </li>

          <li className="dropdown">
            <button className="dropbtn">How It Works?</button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="/">
                Pay
              </a>
              <a className="dropdown-item" href="/">
                Recieve
              </a>
              <hr />
              <a className="dropdown-item" href="/">
                More
              </a>
            </div>
          </li>

          <li class="nav-item">
            <a class="nav-link disabled">SignUp</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

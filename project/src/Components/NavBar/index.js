import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Student Resource Library
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#sumbutButton">
              Submit <span className="sr-only"></span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Top
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://app.slack.com/client/T039PHS2UKU/C03CF1NQWHG" target="popup">
            #Tech-Links (Slack)
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
import React from "react";

const Navbar = () => {
  return (
    //the classname dictates which CSS folder is being accessed
    <nav id="navBar" className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
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

      {/* This is whats being rendered ONTO the nav bar, with links attached. */}

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a id="submitButtonLink" className="nav-link" href="#submitButton">
              Submit <span className="sr-only"></span>
            </a>
          </li>
          <li className="nav-item">
            <a
              id="slackButton"
              className="nav-link"
              href="https://app.slack.com/client/T039PHS2UKU/C03CF1NQWHG"
              target="popup"
            >
              #Tech-Links (Slack)
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Report Broken Links
            </a>
          </li>
          <li className="nav-item">
            <a id="topButton" className="nav-link" href="#">
              Top
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

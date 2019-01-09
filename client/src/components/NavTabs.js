import React from "react";
import { Link } from "react-router-dom";

function NavTabs(){
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <span className="navbar-brand">Google Books</span>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/search"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Search
        </Link>
      </li>
      <li className="nav-item">
        <Link
              to="/saved"
              className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
            >
              Saved
        </Link>
      </li>
    </ul>
  </div>
</nav>
  );
}

export default NavTabs;

import React from "react";
import "./basic.css";
import { Link } from "react-router-dom";

function Admin() {
  // const myFunction = () => {};

  const filterFunction = () => {};

  return (
    <>
      {/* menu navbar */}
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/home">
            Dashboard
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/managemovie">
            Manage Movie
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/viewall">
            Manage Schedule
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Admin;
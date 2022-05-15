import React from "react";
import "./basic.css";
import { Link } from "react-router-dom";

function User() {
  // const myFunction = () => {};

  const filterFunction = () => {};

  return (
    <>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/home">
            Home
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="nav-item">
          <Link className="nav-link active" to="/viewall">
            List Movie
          </Link>
        </li>
      </ul>
    </>
  );
}

export default User;

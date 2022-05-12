import React from "react";
import TickitzBrandTwo from "../../assets/img1/Tickitz2.png";
import { Link } from "react-router-dom";
import "./navbarBeforeLogin.css";

function navbarBeforeLogin() {
  return (
    <>
      {/* Navbar */}

      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white">
        <div className="container-xl">
          <Link className="navbar-brand" to="/home">
            <img src={TickitzBrandTwo} alt="brand2" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
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
                <Link className="nav-link active" to="/home">
                  List Movie
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
            </ul>
            <div className="dropdown text-center">
              <button
                className="btn navbar_signin-button mb-2"
                to="/home"
                role="button"
                type="button"
              >
                Sign In
              </button>
              <hr className="dropdown-divider" />
              <p
                className="dropdown-item mb-4 mt-4 d-lg-none navbar_item-show"
                style="font-size: 13px; color: rgba(110, 113, 145, 1)"
                to="/home"
              >
                © 2020 Tickitz. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </nav>
      {/* Akhir Navbar */}
    </>
  );
}

export default navbarBeforeLogin;

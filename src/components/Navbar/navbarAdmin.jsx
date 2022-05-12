import React from "react";
import "./navbarAdmin.css";
import { Link } from "react-router-dom";
import TickitzBrandTwo from "../../assets/img1/Tickitz2.png";
import ProfileImage from "../../assets/img1/profile.png";

function NavbarAdmin() {
  // const myFunction = () => {};

  const filterFunction = () => {};

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white">
        <div className="container-xl navbar_wrap">
          {/* brand */}
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
            {/* input search when burgermenu */}
            <form action="" className="navbar_in-dropmenu">
              <div style={{ display: "table" }} className="m-auto navbar_in-dropmenu py-4">
                <div
                  style={{ display: "table-row", width: "100px" }}
                  className="navbar_in-dropmenu-wrap"
                >
                  <div className="navbar_input-icon-show" style={{ display: "table-cell" }}>
                    <i style={{ letterSpacing: "-100px" }} className="fa fa-search"></i>
                  </div>
                  <div style={{ display: "table-cell", width: "100%" }}>
                    <input
                      className="form-control pe-3 ps-3 py-3 navbar_form-rounded-show"
                      style={{ width: "345px" }}
                      type="search"
                      placeholder="Search..."
                      aria-label="Search"
                    />
                  </div>
                </div>
              </div>
            </form>
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

            {/* input search dropdown in navbar */}
            <div className="dropdown navbar_dropdown-search">
              <Link
                onClick="myFunction()"
                className="btn btn-white navbar_dropdown-search"
                to="/"
                role="button"
                type="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-search navbar_fa-search"></i>
              </Link>
              <ul
                className="dropdown-menu dropdown-menu-end navbar_dropdown-menu"
                aria-labelledby="dropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item navbar_dropdown-item text-end" to="/home">
                    <form action="">
                      <div style={{ display: "table" }}>
                        <div style={{ display: "table-row", width: "100px" }}>
                          <div className="navbar_input-icon" style={{ display: "table-cell" }}>
                            <i style={{ letterSpacing: "-100px" }} className="fa fa-search"></i>
                          </div>
                          <div style={{ display: "table-cell", width: "100%" }}>
                            <input
                              onKeyUp={filterFunction()}
                              className="form-control pe-5 ps-4 navbar_form-rounded"
                              type="search"
                              placeholder="Search"
                              aria-label="Search"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </Link>
                </li>
              </ul>
            </div>
            {/* dropdown profile navbar */}
            <div className="dropdown navbar-dropdown-profile">
              <button
                className="btn btn-white"
                // role="button"
                type="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={ProfileImage} alt="dropdown" className="img-responsive" />
              </button>
              <ul
                className="dropdown-menu dropdown-menu-end text-center"
                aria-labelledby="dropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item navbar-dropdown-profile-item" to="/home">
                    Profil
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item navbar-dropdown-profile-item" to="/home">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
            {/* menu profile when burgermenu  */}

            <hr className="dropdown-divider" />
            <Link className="dropdown-item mb-3 mt-3 d-lg-none navbar_item-show" to="/home">
              Profil
            </Link>
            <hr className="dropdown-divider" />
            <Link className="dropdown-item mb-3 mt-3 d-lg-none navbar_item-show" to="/home">
              Logout
            </Link>
            <hr className="dropdown-divider" />
            <p
              className="dropdown-item mb-4 mt-4 d-lg-none navbar_item-show"
              style={{ fontSize: "13px", color: "rgba(110, 113, 145, 1)" }}
            >
              © 2020 Tickitz. All Rights Reserved.
            </p>
          </div>
        </div>
      </nav>
      {/* END OF NAVBAR */}
    </>
  );
}

export default NavbarAdmin;

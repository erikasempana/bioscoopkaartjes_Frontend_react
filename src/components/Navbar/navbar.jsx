import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import TickitzBrandTwo from "../../assets/img1/Tickitz2.png";
import Admin from "./admin";
import User from "./user";
import { useSelector } from "react-redux";
// component navbar
import AfterLogin from "./afterlogin,";
import BeforeLogin from "./beforelogin";

function Navbar() {
  const role = useSelector((state) => state.login.data.role);
  const isLogin = useSelector((state) => state.setIsLogin.isLogin);

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

            {/* {!isLogin === true ? <User /> :  */}
            {role === "admin" ? <Admin /> : <User />}

            {/* isLogin=false */}
            {isLogin ? <BeforeLogin /> : <AfterLogin />}
            {/* menu profile when burgermenu  */}

            <hr className="dropdown-divider" />
            <Link className="dropdown-item mb-3 mt-3 d-lg-none navbar_item-show" to="/profile">
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

export default Navbar;

import React from "react";
import "./beforelogin.css";
import { Link } from "react-router-dom";

function BeforeLogin() {
  return (
    <>
      <Link className="btn navbar_signin-button mb-2" to="/login" role="button" type="button">
        Sign In
      </Link>
    </>
  );
}

export default BeforeLogin;

import React from "react";
import "./signin.css";
import Tickitz1 from "../../assets/img/tickitz1.png";
import Tickitz2 from "../../assets/img/Tickitz2.png";

function SignIn() {
  return (
    <>
      {/* SISI KIRI */}
      <div className="signin_container">
        <div className="signin_banner">
          <div className="signin_banner-filter">
            <div className="signin_banner-box">
              <div className="signin_banner-box__tag">
                <div className="signin_tag-line">
                  <span>wait, watch, wow!</span>
                </div>
              </div>
              <div className="signin_banner-box__tickitz">
                <div className="tickitz-image">
                  <img src={Tickitz1} className="tickitz-image__accs" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SISI KANAN */}
        <div className="box-signin">
          <div className="signin_brand">
            <img src={Tickitz2} className="signin_brand__image" alt="" />
          </div>
          <div className="box-signin2">
            <div className="signin_title">Sign In</div>
            <div className="signin_title__desc">
              Sign in with your data that you entered during your registration
            </div>
            <form className="signin_form">
              <div className="form-satu">
                <label for="email">Email</label>
                <br />
                <input
                  type="email"
                  placeholder="Write your email"
                  className="signIn__input"
                />
              </div>
              <br />
              <div className="signin_form-dua">
                <label for="password">Password</label>
                <br />
                <div className="signin_form-dua__box">
                  <input
                    type="password"
                    placeholder="Write your password"
                    className="signIn__input"
                  />
                  <span className="eye">
                    <i id="hide1" className="far fa-eye"></i>
                    <i id="hide2" className="fa fa-eye-slash"></i>
                  </span>
                </div>
              </div>
              <br />
              <button type="button" className="signIn-btn">
                Sign In
              </button>
            </form>
            <div className="signin_link">
              Forgot your password ? <a href="url">Reset now</a>
            </div>
            <div className="signin_link">
              Don't have an account ? <a href="url">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;

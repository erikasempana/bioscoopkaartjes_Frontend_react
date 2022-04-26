import React from "react";
import "./signin.css";

function SignIn() {

  
  return (
    <>
      <div className="container">
        <div className="banner">
          <div className="banner-filter">
            <div className="banner-box">
              <div className="banner-box__tag">
                <div className="tag-line">
                  <span>wait, watch, wow!</span>
                </div>
              </div>
              <div className="banner-box__tickitz">
                <div className="tickitz-image">
                  <img
                    src="../../assets/img/tickitz1.png"
                    className="tickitz-image__accs"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="brand">
          <img
            src="../../assets/img/Tickitz2.png"
            className="brand__image"
            alt=""
          />
        </div>
        <div className="box-signin">
          <div className="box-signin2">
            <div className="title">Sign In</div>
            <div className="title__desc">
              Sign in with your data that you entered during your registration
            </div>
            <form>
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
              <div className="form-dua">
                <label for="password">Password</label>
                <br />
                <div className="form-dua__box">
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
            <div className="link">
              Forgot your password ? <a href="url">Reset now</a>
            </div>
            <div className="link">
              Don't have an account ? <a href="url">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;

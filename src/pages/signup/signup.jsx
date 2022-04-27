import React, { useState } from "react";
import "./signup.css";
import axios from "../../utils/axios";
import Tickitz1 from "../../assets/img/tickitz1.png";
import Tickitz2 from "../../assets/img/Tickitz2.png";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    noTelp: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  console.log(form);

  const handleChangeForm = (event) => {
    // console.log("User sedang mengetik");
    // console.log(event.target.name);
    // console.log(event.target.value);
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const resultRegister = await axios.post("auth/register", form);
      // navigate("/login");
      console.log(resultRegister);
      navigate("/login")
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      {/* SISI KIRI */}
      <div className="signup_container">
        <div className="signup_banner">
          <div className="signup_banner-filter">
            <div className="signup_banner-box">
              <div className="signup_banner-box__tag">
                <div className="signup_tag-line">
                  <span>wait, watch, wow!</span>
                </div>
              </div>
              <div className="signup_banner-box__tickitz">
                <div className="tickitz-image">
                  <img src={Tickitz1} className="tickitz-image__accs" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SISI KANAN */}
        <div className="box-signup">
          <div className="signup_brand">
            <img src={Tickitz2} className="signup_brand__image" alt="" />
          </div>
          <div className="box-signup2">
            <div className="signup_title">Sign Up</div>
            <div className="signup_title__desc">
              Sign in with your data that you entered during your registration
            </div>
            {/* SIGNUP */}
            <form onSubmit={handleSubmit} className="signup_form">
              <div className="signup_form-satu">
                <label for="firstName">First Name</label>
                <br />
                <input
                  type="First Name"
                  placeholder="Write your first name"
                  className="signup__input"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChangeForm}
                />
              </div>
              <br />
              <div className="signup_form-dua">
                <label for="lastName"> Last Name</label>
                <br />
                <input
                  type="Last Name"
                  placeholder="Write your last name"
                  className="signup__input"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChangeForm}
                />
              </div>
              <br />
              <div className="signup_form-tiga">
                <label for="noTelp">Phone Number</label>
                <br />
                <input
                  type="tel"
                  placeholder="Write your phone number"
                  className="signup__input"
                  name="noTelp"
                  value={form.noTelp}
                  onChange={handleChangeForm}
                />
              </div>
              <br />
              <div className="form-empat">
                <label for="email">Email</label>
                <br />
                <input
                  type="email"
                  placeholder="Write your email"
                  className="signup__input"
                  name="email"
                  value={form.email}
                  onChange={handleChangeForm}
                />
              </div>
              <br />
              <div className="form-lima">
                <label for="password">Password</label>
                <br />
                <div className="form-lima__box">
                  <input
                    type="password"
                    placeholder="Write your password"
                    className="signup__input"
                    name="password"
                    value={form.password}
                    onChange={handleChangeForm}
                  />
                  {/* <span className="eye">
                    <i id="hide1" className="far fa-eye"></i>
                    <i id="hide2" className="fa fa-eye-slash"></i>
                  </span> */}
                </div>
              </div>
              <br />
              <button type="submit" className="signup-btn">
                Sign Up
              </button>
            </form>

            {/* END OF SIGN UP */}

            <div className="signIn-link">
              Already have account ? <a href="url">Sign In</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;

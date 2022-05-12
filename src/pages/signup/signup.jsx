import React, { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../stores/action/auth";
import TickitzBrandOne from "../../assets/img1/tickitz1.png";
import TickitzBrandTwo from "../../assets/img1/Tickitz2.png";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    noTelp: "",
    email: "",
    password: ""
  });
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChangeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    try {
      // console.log("REGISTER IS RUNNING");
      event.preventDefault();
      const resultRegister = await dispatch(register(form));
      console.log("msg register", resultRegister.action.payload.data.msg);
      // // Output = suatu keadaan yang dapat diinfokan ke user bahwa proses sudah selesai
      setIsError(false);
      setMessage(resultRegister.action.payload.data.msg);
      navigate("/login");
    } catch (error) {
      console.log(error.response);
      setIsError(true);
      setMessage(error.response.data.msg);
      setForm({
        firstName: "",
        lastName: "",
        noTelp: "",
        email: "",
        password: ""
      });
    }
  };

  const handleReset = (event) => {
    // event.preventDefault();
    console.log("Reset Form");
    setForm({
      firstName: "",
      lastName: "",
      noTelp: "",
      email: "",
      password: ""
    });
  };

  return (
    <>
      <section id="signup">
        <div className="container-xxl signup_container">
          <div className="row">
            <div className="col-md-7 signup_banner text-center">
              <div className="signup_banner-filter d-flex flex-column">
                <img src={TickitzBrandOne} alt="brand1" />
                <p style={{ fontSize: "48px", fontWeight: 400, color: "white" }}>
                  wait, watch, wow!
                </p>
              </div>
            </div>
            <div className="col-md-5 m-auto px-5 signup_form">
              <div className="md-5 fade show">
                {!message ? null : isError ? (
                  <div
                    className="alert alert-danger alert-dismissible fade show text-center"
                    role="alert"
                  >
                    {message}
                  </div>
                ) : (
                  <div
                    className="alert alert-primary alert-dismissible fade show text-center"
                    role="alert"
                  >
                    {message}
                  </div>
                )}
              </div>
              <div className="mb-5 signup_form-title">
                <img className="signup_brand" src={TickitzBrandTwo} alt="brand2" />
                <h1>Sign Up</h1>
                <p>Fill your additional details</p>
              </div>
              <form className="signup_form-box" onSubmit={handleSubmit} onReset={handleReset}>
                <div className="mb-3 signup_input">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control border-rounded"
                    id="firstName"
                    placeholder="Write your first name"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChangeForm}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Write your last name"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChangeForm}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="noTelp" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="noTelp"
                    placeholder="Write your phone number"
                    name="noTelp"
                    value={form.noTelp}
                    onChange={handleChangeForm}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="email"
                    placeholder="Write your email"
                    name="email"
                    value={form.email}
                    onChange={handleChangeForm}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <div className="position-relative input-icon">
                    <input
                      type="password"
                      className="form-control"
                      id="paswword"
                      placeholder="Write your password"
                      name="password"
                      value={form.password}
                      onChange={handleChangeForm}
                    />
                    <i className="far fa-eye" id="togglePassword"></i>
                  </div>
                </div>
                <div className="d-grid mt-3 pt-3">
                  <button type="submit" className="btn btn btn-primary">
                    Sign Up
                  </button>
                </div>
              </form>
              <div className="signin-link text-center mt-3">
                <p>
                  Already have account ? <Link to="/login">Sign In</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;

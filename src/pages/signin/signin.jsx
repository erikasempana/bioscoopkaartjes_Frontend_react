import React, { useState } from "react";
import "./signin.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, isLogin } from "../../stores/action/auth";
import { getUserById } from "../../stores/action/user";
import TickitzBrandOne from "../../assets/img1/tickitz1.png";
import TickitzBrandTwo from "../../assets/img1/Tickitz2.png";

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  // console.log(form);

  const handleChangeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    try {
      // console.log("login is running");
      event.preventDefault();
      // const resultLogin = await axios.post("auth/login", form);
      // console.log(resultLogin);

      const resultLogin = await dispatch(login(form)); //by redux
      // Output = suatu keadaan yang dapat diinfokan ke user bahwa proses sudah selesai
      setIsError(false);
      setMessage(resultLogin.action.payload.data.msg);

      // console.log("res", resultLogin);
      localStorage.setItem("token", resultLogin.action.payload.data.data.token);
      dispatch(isLogin(false));
      // localStorage.setItem("refreshToken", resultLogin.data.data.refreshToken);
      // localStorage.setItem("role", resultLogin.data.data.role);

      // localStorage.setItem("dataUser", JSON.stringify(resultUser[0])); //ini LocalStorage
      // await dispatch(getUserById(resultLogin.action.payload.data.data.id)); //by redux
      navigate("/home");
    } catch (error) {
      console.log(error.response);
      setIsError(true);
      setMessage(error.response.data.msg);
      // setForm({
      //   email: "",
      //   password: ""
      // });
    }
  };

  const handleReset = (event) => {
    // event.preventDefault();
    // console.log("Reset Form");
    setForm({
      email: "",
      password: ""
    });
  };

  return (
    <>
      <section id="signin">
        <div className="container-xxl signin_container">
          <div className="row">
            <div className="col-md-7 signin_banner text-center">
              <div className="signin_banner-filter d-flex flex-column">
                <img src={TickitzBrandOne} alt="brand1" />
                <p style={{ fontSize: "48px", fontWeight: 400, color: "white" }}>
                  wait, watch, wow!
                </p>
              </div>
            </div>
            <div className="col-md-5 m-auto px-5 signin_form">
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
              <div className="mb-5 signin_form-title">
                <img className="signin_brand" src={TickitzBrandTwo} alt="brand2" />
                <h1>Sign In</h1>
                <p>Sign in with your data that you entered during your registration</p>
              </div>
              <form className="signin_form-box" onSubmit={handleSubmit} onReset={handleReset}>
                <div className="mb-3 signin_input">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="email"
                    placeholder="Write your email"
                    value={form.email}
                    name="email"
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
                  Forgot your password? <a to="/login">Reset Now</a>
                </p>
                <p>
                  {"Don't have an account?"} <Link to="/signup">Sign Up</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignIn;

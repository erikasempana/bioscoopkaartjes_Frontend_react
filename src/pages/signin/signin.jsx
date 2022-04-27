import React, { useState } from "react";
import "./signin.css";
import axios from "../../utils/axios";
import Tickitz1 from "../../assets/img/tickitz1.png";
import Tickitz2 from "../../assets/img/Tickitz2.png";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
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
      // console.log("Submit Login");
      // Input = email password di siapkan
      // console.log(form);
      // Proses = memanggil axios
      const resultLogin = await axios.post("auth/login", form);
      // proses get data user by id
      //   const resultUser = await axios.get(`user/${resultLogin.data.data.id}`)
      const resultUser = [
        {
          id: 1,
          name: "Bagus",
        },
      ];
      // Output = suatu keadaan yang dapat diinfokan ke user bahwa proses sudah selesai
      setIsError(false);
      setMessage(resultLogin.data.msg);
      localStorage.setItem("token", resultLogin.data.data.token);
      localStorage.setItem("refreshToken", resultLogin.data.data.refreshToken);
      localStorage.setItem("dataUser", JSON.stringify(resultUser[0]));
      navigate("/home");
      console.log(resultLogin);

      //   UNTUK GET DATA USER
      //   const dataUser = JSON.parse(localStorage.getItem(dataUser));
    } catch (error) {
      console.log(error.response);
      setIsError(true);
      setMessage(error.response.data.msg);
      setForm({
        email: "",
        password: "",
      });
    }
  };

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
            <form onSubmit={handleSubmit} className="signin_form">
              <div className="form-satu">
                <label for="email">Email</label>
                <br />
                <input
                  type="email"
                  placeholder="Write your email"
                  className="signIn__input"
                  value={form.email}
                  name="email"
                  onChange={handleChangeForm}
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
                    name="password"
                    onChange={handleChangeForm}
                  />
                  <span className="eye">
                    <i id="hide1" className="far fa-eye"></i>
                    <i id="hide2" className="fa fa-eye-slash"></i>
                  </span>
                </div>
              </div>
              <br />
              <button type="submit" className="signIn-btn">
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

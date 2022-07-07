import React, { useState, useEffect } from "react";
import "./afterlogin.css";
import Default from "../../assets/img1/default.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../stores/action/user";
import { isLogin } from "../../stores/action/auth";

function AfterLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isHide, setIsHide] = useState(false);
  const userData = useSelector((state) => state.login.data.id);
  const token = localStorage.getItem("token");
  const userImage = useSelector((state) => state.user.data.image);

  const getProfile = async () => {
    try {
      await dispatch(getUserById(userData, token)); //by redux
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleSearch = () => {
    setIsHide(!isHide);
  };

  const handleLogout = () => {
    localStorage.clear();
    dispatch(isLogin(true));
    navigate("/home");
  };

  useEffect(() => {
    getProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* input search dropdown in navbar */}
      {isHide ? (
        <input
          className="form-control pe-5 ps-4 navbar_form-rounded"
          type="search"
          placeholder="Search"
        />
      ) : null}

      <div className="dropdown navbar_dropdown-search">
        <button onClick={handleSearch} className="btn btn-white navbar_dropdown-search">
          <i className="fas fa-search navbar_fa-search"></i>
        </button>
      </div>
      {/* dropdown profile navbar */}
      <div className="dropdown navbar-dropdown-profile">
        <button
          className="btn btn-white"
          // role="button"
          type="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          // data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src={userImage ? process.env.REACT_APP_CLOUDINARY_URL + userImage : Default}
            alt="dropdown"
            className="img-responsive user_image"
          />
        </button>
        <ul
          className="dropdown-menu dropdown-menu-end text-center"
          aria-labelledby="dropdownMenuLink"
        >
          <li>
            <Link className="dropdown-item navbar-dropdown-profile-item" to="/profile">
              Profil
            </Link>
          </li>
          <li>
            <button
              className="dropdown-item navbar-dropdown-profile-item"
              onClick={() => handleLogout()}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
      {/* menu profile when burgermenu  */}
    </>
  );
}

export default AfterLogin;

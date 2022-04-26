import React from "react";
import "./navbar.css";
import Tickitz2 from "../../assets/img/Tickitz2.png";
import Elipse from "../../assets/img/Ellipse.png";

function Navbar() {
  return (
    <>
      {/* NAVBAR */}
      <div className="moviedetail_container-nav">
        <nav className="moviedetail_menu">
          <ul className="moviedetail_ul">
            <li className="moviedetail_li">
              <img src={Tickitz2} alt="" />
            </li>
            <li className="moviedetail_li">
              <a href="#home">Home</a>
            </li>
            <li className="moviedetail_li">
              <a href="#list-movie">List Movie</a>
            </li>
          </ul>
          <div className="moviedetail_nav-right">
            <div className="moviedetail_nav-profile-img">
              <img src={Elipse} alt="" />
            </div>
            <div className="moviedetail_nav-search">
              <form>
                <input
                  type="text"
                  placeholder="Search Movie Name"
                  name="search"
                />
                <button type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      {/* END OF NAVBAR */}
    </>
  );
}

export default Navbar;

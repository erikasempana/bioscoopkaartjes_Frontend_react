import React from "react";
import "./detail.css";
import Tickitz2 from "../../assets/img/Tickitz2.png";
import Elipse from "../../assets/img/Ellipse.png";
import Spiderman from "../../assets/img/spiderman.png";
import Ebuid from "../../assets/img/ebuid.png";
import Cineone from "../../assets/img/cineone21.png";
import Hiflix from "../../assets/img/hiflix.png";
import Facebook from "../../assets/img/facebook.png";
import Instagram from "../../assets/img/instagram.png";
import Twitter from "../../assets/img/twitter.png";
import Youtube from "../../assets/img/youtube.png";

export default function Detail() {
  return (
    <div className="moviedetail_container">
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

      {/* MAIN */}
      {/* MAIN - MOVIE DETAIL */}
      <main className="moviedetail_wrapping-main mx-auto">
        <div className="row mx-auto mt-2 mt-5 moviedetail_content jumbotron bg-white">
          <div className="col-md-3 mx-auto mt-5 mb-5">
            <div className="card p-4 mx-auto" style={{ width: "fit-content" }}>
              <img src={Spiderman} className="moviedetail_img-top" alt="..." />
            </div>
          </div>
          <div className="col-md-9 mt-5 mb-5 mx-auto">
            <h2 className="mb-3">
              <b>Spider-man Home Coming</b>
            </h2>
            <h5
              className="mb-5"
              style={{ color: "#4e4b66", fontWeight: "normal" }}
            >
              Adventure, Action, Sci-Fi
            </h5>
            <div className="row">
              <div className="col-md-4">
                <p>Release date</p>
                <p>
                  <b>June 28, 2017</b>
                </p>
                <p>Duration</p>
                <p>
                  <b>June 28, 2017</b>
                </p>
              </div>
              <div className="col-md-8">
                <p>Directed By</p>
                <p>
                  <b>Jon Watss</b>
                </p>
                <p>Casts</p>
                <p>
                  <b>Tom Holland, Michael Keaton, Robert Downey Jr., ...</b>
                </p>
              </div>
            </div>
            <div className="line-border"></div>
            <h6>
              <b>Synopsis</b>
            </h6>
            <p style={{ textAlign: "left" }}>
              Thrilled by his experience with the Avengers, Peter returns home,
              where he lives with his Aunt May, under the watchful eye of his
              new mentor Tony Stark, Peter tries to fall back into his normal
              daily routine - distracted by thoughts of proving himself to be
              more than just your friendly neighborhood Spider-Man - but when
              the Vulture emerges as a new villain, everything that Peter holds
              most important will be threatened.
            </p>
          </div>
        </div>
      </main>
      {/* MAIN - MOVIE DETAIL */}

      <h5 className="text-center mt-5 mb-5">
        <b>Showtimes and Tickets</b>
      </h5>

      {/* DATE AND LOCATION */}
      <form className="moviedetail_date-location">
        <div className="moviedetail_form-group-date mb-2">
          <input
            data-provide="datepicker"
            type="date"
            className="form-control moviedetail_set-box"
            placeholder="26/04/2022"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="moviedetail_location">
          <div className="moviedetail_iconmap">
            <i className="bi bi-pin-map-fill"></i>
          </div>
          <div className="dropdown moviedetail_set-box">
            <select name="location" className="moviedetail_dropdown-location">
              <option value="">Select Location</option>
              <option className="dropdown-item" value="jakarta">
                Purwokerto
              </option>
              <option className="dropdown-item" value="jakarta">
                Jakarta
              </option>
              <option className="dropdown-item" value="jakarta">
                Bandung
              </option>
              <option className="dropdown-item" value="jakarta">
                Surabaya
              </option>
            </select>
          </div>
        </div>
      </form>
      {/* END OF DATE AND LOCATION */}

      {/* CARD */}
      <div className="moviedetail_container-card mt-5 mx-auto">
        <div className="row mx-auto">
          {/* satu */}
          <div className="col-md-4 mb-2 moviedetail_card-schedule">
            <div className="card shadow mb-4">
              <div className="card-body">
                <div className="row mb-1">
                  <div className="col-md-6 d-flex flex-wrap align-items-center">
                    <img
                      src={Ebuid}
                      className="img"
                      height="auto"
                      width="80%"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-6">
                    <h4 className="font-weight-bold">ebv.id</h4>
                    <p style={{ fontSize: "12px", color: "#6e7191" }}>
                      Whatever street No.12, South Purwokerto
                    </p>
                  </div>
                </div>
                <hr />
                <div className="row mt-4 mb-2">
                  <div
                    className="col-md-3 mb-3"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#4e4b66",
                    }}
                  >
                    08:30am
                  </div>
                  <div
                    className="col-md-3 mb-3"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#6e7191",
                    }}
                  >
                    10:30am
                  </div>
                  <div
                    className="col-md-3 mb-3"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#a0a3bd",
                    }}
                  >
                    12:00pm
                  </div>
                  <div
                    className="col-md-3 mb-3"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#6e7191",
                    }}
                  >
                    02:00pm
                  </div>
                  <div
                    className="col-md-3 mb-3"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#6e7191",
                    }}
                  >
                    04.30pm
                  </div>
                  <div
                    className="col-md-3 mb-3"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#4e4b66",
                    }}
                  >
                    07:00pm
                  </div>
                  <div
                    className="col-md-3 mb-3"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#a0a3bd",
                    }}
                  >
                    08:30pm
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <h6
                    className="card-text"
                    style={{ fontSize: "16px", color: "#6b6b6b" }}
                  >
                    Price
                  </h6>
                  <h6 className="card-text" style={{ fontSize: "16px" }}>
                    <b>$10.00/Seat</b>
                  </h6>
                </div>

                <div className="d-flex justify-content-between">
                  <a
                    href={"#"}
                    className="btn btn-primary mx-auto moviedetail_btn-1"
                  >
                    Book now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* dua */}
          <div className="col-md-4 mb-2 moviedetail_card-schedule">
            <div className="card shadow mb-4">
              <div className="card-body">
                <div className="row mb-1">
                  <div className="col-md-6 d-flex flex-wrap align-items-center">
                    <img
                      src={Cineone}
                      width="90%"
                      height="auto"
                      className="img"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-6">
                    <h4 className="font-weight-bold">CineOne21</h4>
                    <p style={{ fontSize: "12px", color: "#6e7191" }}>
                      Downcare street No. 21, East Purwokerto
                    </p>
                  </div>
                </div>
                <hr />
                <div className="row mt-4 mb-2">
                  <div
                    className="col-md-3 mb-3"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#4e4b66",
                    }}
                  >
                    08:30am
                  </div>
                  <div
                    className="col-md-3 mb-3"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#6e7191",
                    }}
                  >
                    10:30am
                  </div>
                  <div
                    className="col-md-3 mb-3"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#a0a3bd",
                    }}
                  >
                    12:00pm
                  </div>
                  <div
                    className="col-md-3 mb-3"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#6e7191",
                    }}
                  >
                    02:00pm
                  </div>
                  <div
                    className="col-md-3 mb-3"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#6e7191",
                    }}
                  >
                    04.30pm
                  </div>
                  <div
                    className="col-md-3 mb-3"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#4e4b66",
                    }}
                  >
                    07:00pm
                  </div>
                  <div
                    className="col-md-3 mb-3"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#a0a3bd",
                    }}
                  >
                    08:30pm
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <h6
                    className="card-text"
                    style={{ fontSize: "16px", color: "#6b6b6b" }}
                  >
                    Price
                  </h6>
                  <h6 className="card-text" style={{ fontSize: "16px" }}>
                    <b>$10.00/Seat</b>
                  </h6>
                </div>

                <div className="d-flex justify-content-between">
                  <a
                    href={"#"}
                    className="btn btn-primary mx-auto moviedetail_btn-1"
                  >
                    Book now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* tiga */}
          <div className="col-md-4 mb-2 moviedetail_card-schedule">
            <div className="card shadow mb-4">
              <div className="card-body">
                <div className="row mb-1">
                  <div className="col-md-6 d-flex flex-wrap align-items-center">
                    <img
                      src={Hiflix}
                      className="img"
                      height="auto"
                      width="80%"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-6">
                    <h5 className="font-weight-bold">hiflix Cinema</h5>
                    <p style={{ fontSize: "12px", color: "#6e7191" }}>
                      Whatever street No.12, South Purwokerto
                    </p>
                  </div>
                </div>
                <hr />
                <div className="row mt-4 mb-2">
                  <div
                    className="col-md-3 mb-3"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#4e4b66",
                    }}
                  >
                    08:30am
                  </div>
                  <div
                    className="col-md-3 mb-3"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#6e7191",
                    }}
                  >
                    10:30am
                  </div>
                  <div
                    className="col-md-3 mb-3"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#a0a3bd",
                    }}
                  >
                    12:00pm
                  </div>
                  <div
                    className="col-md-3 mb-3"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#6e7191",
                    }}
                  >
                    02:00pm
                  </div>
                  <div
                    className="col-md-3 mb-3"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#6e7191",
                    }}
                  >
                    04.30pm
                  </div>
                  <div
                    className="col-md-3 mb-3"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#4e4b66",
                    }}
                  >
                    07:00pm
                  </div>
                  <div
                    className="col-md-3 mb-3"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#a0a3bd",
                    }}
                  >
                    08:30pm
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <h6
                    className="card-text"
                    style={{ fontSize: "16px", color: "#6b6b6b" }}
                  >
                    Price
                  </h6>
                  <h6 className="card-text" style={{ fontSize: "16px" }}>
                    <b>$10.00/Seat</b>
                  </h6>
                </div>

                <div className="d-flex justify-content-between">
                  <a
                    href={"#"}
                    className="btn btn-primary mx-auto moviedetail_btn-1"
                  >
                    Book now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="moviedetail_container-card mb-5 mx-auto">
        <div className="row mx-auto">
          {/* satu */}
          <div className="col-md-4 mb-2 moviedetail_card-schedule">
            <div className="card shadow mb-4">
              <div className="card-body">
                <div className="row mb-1">
                  <div className="col-md-6 d-flex flex-wrap align-items-center">
                    <img
                      src={Ebuid}
                      className="img"
                      height="auto"
                      width="90%"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-6">
                    <h4 className="font-weight-bold">ebv.id</h4>
                    <p style={{ fontSize: "12px", color: "#6e7191" }}>
                      Whatever street No.12, South Purwokerto
                    </p>
                  </div>
                </div>
                <hr />
                <div className="row mt-4 mb-2">
                  <div
                    className="col-md-3 mb-3"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#4e4b66",
                    }}
                  >
                    08:30am
                  </div>
                  <div
                    className="col-md-3 mb-3"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#6e7191",
                    }}
                  >
                    10:30am
                  </div>
                  <div
                    className="col-md-3 mb-3"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#a0a3bd",
                    }}
                  >
                    12:00pm
                  </div>
                  <div
                    className="col-md-3 mb-3"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#6e7191",
                    }}
                  >
                    02:00pm
                  </div>
                  <div
                    className="col-md-3 mb-3"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#6e7191",
                    }}
                  >
                    04.30pm
                  </div>
                  <div
                    className="col-md-3 mb-3"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#4e4b66",
                    }}
                  >
                    07:00pm
                  </div>
                  <div
                    className="col-md-3 mb-3"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#a0a3bd",
                    }}
                  >
                    08:30pm
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <h6
                    className="card-text"
                    style={{ fontSize: "16px", color: "#6b6b6b" }}
                  >
                    Price
                  </h6>
                  <h6 className="card-text" style={{ fontSize: "16px" }}>
                    <b>$10.00/Seat</b>
                  </h6>
                </div>

                <div className="d-flex justify-content-between">
                  <a
                    href={"#"}
                    className="btn btn-primary mx-auto moviedetail_btn-1"
                  >
                    Book now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* dua */}
          <div className="col-md-4 mb-2 moviedetail_card-schedule">
            <div className="card shadow mb-4">
              <div className="card-body">
                <div className="row mb-1">
                  <div className="col-md-6 d-flex flex-wrap align-items-center">
                    <img
                      src={Cineone}
                      width="90%"
                      height="auto"
                      className="img"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-6">
                    <h4 className="font-weight-bold">CineOne21</h4>
                    <p style={{ fontSize: "12px", color: "#6e7191" }}>
                      Downcare street No. 21, East Purwokerto
                    </p>
                  </div>
                </div>
                <hr />
                <div className="row mt-4 mb-2">
                  <div
                    className="col-md-3 mb-3"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#4e4b66",
                    }}
                  >
                    08:30am
                  </div>
                  <div
                    className="col-md-3 mb-3"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#6e7191",
                    }}
                  >
                    10:30am
                  </div>
                  <div
                    className="col-md-3 mb-3"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#a0a3bd",
                    }}
                  >
                    12:00pm
                  </div>
                  <div
                    className="col-md-3 mb-3"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#6e7191",
                    }}
                  >
                    02:00pm
                  </div>
                  <div
                    className="col-md-3 mb-3"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#6e7191",
                    }}
                  >
                    04.30pm
                  </div>
                  <div
                    className="col-md-3 mb-3"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#4e4b66",
                    }}
                  >
                    07:00pm
                  </div>
                  <div
                    className="col-md-3 mb-3"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#a0a3bd",
                    }}
                  >
                    08:30pm
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <h6
                    className="card-text"
                    style={{ fontSize: "16px", color: "#6b6b6b" }}
                  >
                    Price
                  </h6>
                  <h6 className="card-text" style={{ fontSize: "16px" }}>
                    <b>$10.00/Seat</b>
                  </h6>
                </div>

                <div className="d-flex justify-content-between">
                  <a
                    href={"#"}
                    className="btn btn-primary mx-auto moviedetail_btn-1"
                  >
                    Book now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* tiga */}
          <div className="col-md-4 mb-2 moviedetail_card-schedule">
            <div className="card shadow mb-4">
              <div className="card-body">
                <div className="row mb-1">
                  <div className="col-md-6 d-flex flex-wrap align-items-center">
                    <img
                      src={Hiflix}
                      className="img"
                      height="auto"
                      width="90%"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-6">
                    <h5 className="font-weight-bold">hiflix Cinema</h5>
                    <p style={{ fontSize: "12px", color: "#6e7191" }}>
                      Whatever street No.12, South Purwokerto
                    </p>
                  </div>
                </div>
                <hr />
                <div className="row mt-4 mb-2">
                  <div
                    className="col-md-3 mb-3"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#4e4b66",
                    }}
                  >
                    08:30am
                  </div>
                  <div
                    className="col-md-3 mb-3"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#6e7191",
                    }}
                  >
                    10:30am
                  </div>
                  <div
                    className="col-md-3 mb-3"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#a0a3bd",
                    }}
                  >
                    12:00pm
                  </div>
                  <div
                    className="col-md-3 mb-3"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#6e7191",
                    }}
                  >
                    02:00pm
                  </div>
                  <div
                    className="col-md-3 mb-3"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#6e7191",
                    }}
                  >
                    04.30pm
                  </div>
                  <div
                    className="col-md-3 mb-3"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#4e4b66",
                    }}
                  >
                    07:00pm
                  </div>
                  <div
                    className="col-md-3 mb-3"
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#a0a3bd",
                    }}
                  >
                    08:30pm
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <h6
                    className="card-text"
                    style={{ fontSize: "16px", color: "#6b6b6b" }}
                  >
                    Price
                  </h6>
                  <h6 className="card-text" style={{ fontSize: "16px" }}>
                    <b>$10.00/Seat</b>
                  </h6>
                </div>

                <div className="d-flex justify-content-between">
                  <a
                    href={"#"}
                    className="btn btn-primary mx-auto moviedetail_btn-1"
                  >
                    Book now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END OF CARD */}
      {/* END OF MAIN */}

      {/* FOOTER */}
      <div className="moviedetail_container-footer">
        <footer className="moviedetail_upper-footer">
          <div className="moviedetail_brand">
            <div className="moviedetail_brand-image">
              <img src={Tickitz2} alt="" />
            </div>
            <div className="moviedetail_brand-desc">
              <div>Stop waiting in line. Buy tickets</div>
              <div>conveniently, watch movies quietly.</div>
            </div>
          </div>

          <div className="moviedetail_explore">
            <div className="moviedetail_explore-title">Explore</div>
            <div className="moviedetail_wrap-explore">
              <div className="moviedetail_explore-home">
                <a href="home">Home</a>
              </div>
              <div className="moviedetail_footer-home">
                <a href="movie">Movie</a>
              </div>
            </div>
          </div>

          <div className="moviedetail_sponsor">
            <div className="moviedetail_sponsor-title">Our Sponsor</div>
            <div className="moviedetail_wrap-sponsor">
              <div>
                <img src={Ebuid} alt="" />
              </div>
              <div>
                <img src={Cineone} alt="" />
              </div>
              <div>
                <img src={Hiflix} alt="" />
              </div>
            </div>
          </div>

          <div className="moviedetail_follow ">
            <div className="moviedetail_follow-title">Follow Us</div>
            <div className="moviedetail_wrap-follow">
              <div className="moviedetail_wrap-set">
                <img src={Facebook} alt="" />
                <span>Tickitz Cinema id</span>
              </div>
              <div className="moviedetail_wrap-set">
                <img src={Instagram} alt="" />
                <span>tickitz.id</span>
              </div>
              <div className="moviedetail_wrap-set">
                <img src={Twitter} alt="" />
                <span>tickitz.id</span>
              </div>
              <div className="moviedetail_wrap-set">
                <img src={Youtube} alt="" />
                <span>Tickitz Cinema id</span>
              </div>
            </div>
            <div className="moviedetail-footer-img">
              <img src={Facebook} alt="" />
              <img src={Instagram} alt="" />
              <img src={Twitter} alt="" />
              <img src={Youtube} alt="" />
            </div>
          </div>
        </footer>
        <footer className="moviedetail_lower-footer mt-5 mb-0">
          © 2020 Tickitz. All Rights Reserved.
        </footer>
      </div>
      {/* END OF FOOTER */}
    </div>
  );
}

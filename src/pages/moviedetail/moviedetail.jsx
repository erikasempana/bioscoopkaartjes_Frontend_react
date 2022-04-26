import React from "react";
import "./moviedetail.css";
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

function MovieDetail() {
  return (
    <div className="container">
      <div className="container-nav">
        <nav className="menu">
          <ul>
            <li>
              <img src={Tickitz2} alt="" />
            </li>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#list-movie">List Movie</a>
            </li>
          </ul>
          <div className="nav-right">
            <div className="nav-profile-img">
              <img src={Elipse} alt="" />
            </div>
            <div className="nav-search">
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
      <div className="row mx-auto mt-2 mt-5 content jumbotron bg-white">
        <div className="col-md-4 mx-auto mt-5 mb-5">
          <div className="card p-4" style={{ width: "fit-content" }}>
            <img src={Spiderman} className="img-top" alt="..." />
          </div>
        </div>
        <div className="col-md-8 mx-auto mt-5 mb-5">
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
            where he lives with his Aunt May, under the watchful eye of his new
            mentor Tony Stark, Peter tries to fall back into his normal daily
            routine - distracted by thoughts of proving himself to be more than
            just your friendly neighborhood Spider-Man - but when the Vulture
            emerges as a new villain, everything that Peter holds most important
            will be threatened.
          </p>
        </div>
      </div>

      {/* date and location */}
      <h5 className="text-center mt-5 mb-5">
        <b>Showtimes and Tickets</b>
      </h5>

      <form className="">
        <div className="form-group mb-2">
          <input
            data-provide="datepicker"
            type="date"
            className="form-control set-box"
            placeholder="21/07/2020"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="location">
          <div className="iconmap">
            <i className="bi bi-pin-map-fill"></i>
          </div>
          <div className="dropdown set-box">
            <select name="location">
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

      {/* card schedule */}
      <div className="container mb-5 mt-5">
        <div className="row mb-5">
          {/* satu */}
          <div className="col-md-4 mb-2">
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
                  <a href={"#"} className="btn btn-primary btn-1">
                    Book now
                  </a>
                  <a href="#" className="btn btn-primary btn-2">
                    Add to chart
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* dua */}
          <div className="col-md-4 mb-2">
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
                  <a href="#" className="btn btn-primary btn-1">
                    Book now
                  </a>
                  <a href="#" className="btn btn-primary btn-2">
                    Add to chart
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* tiga */}
          <div className="col-md-4 mb-2">
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
                  <a href="#" className="btn btn-primary btn-1">
                    Book now
                  </a>
                  <a href="#" className="btn btn-primary btn-2">
                    Add to chart
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ulang - card */}
          {/* satu */}
          <div className="col-md-4 mb-2">
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
                  <a href={"#"} className="btn btn-primary btn-1">
                    Book now
                  </a>
                  <a href="#" className="btn btn-primary btn-2">
                    Add to chart
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* dua */}
          <div className="col-md-4 mb-2">
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
                  <a href="#" className="btn btn-primary btn-1">
                    Book now
                  </a>
                  <a href="#" className="btn btn-primary btn-2">
                    Add to chart
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* tiga */}
          <div className="col-md-4 mb-2">
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
                  <a href="#" className="btn btn-primary btn-1">
                    Book now
                  </a>
                  <a href="#" className="btn btn-primary btn-2">
                    Add to chart
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* END OF MAIN */}
        </div>
      </div>

      {/* FOOTER */}
      <div className="container-footer">
        <footer className="upper-footer">
          <div className="brand">
            <div className="brand-image">
              <img src={Tickitz2} alt="" />
            </div>
            <div className="brand-desc">
              <div>Stop waiting in line. Buy tickets</div>
              <div>conveniently, watch movies quietly.</div>
            </div>
          </div>

          <div className="explore">
            <div className="explore-title">Explore</div>
            <div className="wrap-explore">
              <div>
                <a href="home">Home</a>
              </div>
              <div>
                <a href="movie">Movie</a>
              </div>
            </div>
          </div>

          <div className="sponsor">
            <div className="sponsor-title">Our Sponsor</div>
            <div className="wrap-sponsor">
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

          <div className="follow">
            <div className="follow-title">Follow Us</div>
            <div className="wrap-follow">
              <div className="wrap-set">
                <img src={Facebook} alt="" />
                <span>Tickitz Cinema id</span>
              </div>
              <div className="wrap-set">
                <img src={Instagram} alt="" />
                <span>tickitz.id</span>
              </div>
              <div className="wrap-set">
                <img src={Twitter} alt="" />
                <span>tickitz.id</span>
              </div>
              <div className="wrap-set">
                <img src={Youtube} alt="" />
                <span>Tickitz Cinema id</span>
              </div>
            </div>
          </div>
        </footer>
        <footer className="lower-footer">
          © 2020 Tickitz. All Rights Reserved.
        </footer>
        {/* END OF FOOTER */}
      </div>
    </div>
  );
}

export default MovieDetail;

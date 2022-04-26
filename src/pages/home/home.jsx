import React from "react";
import Navbar from "../../components/basic/Navbar";
import "./home.css";

export default function Home() {
  return (
    <>
      <div className="container">
        {/* Navbar */}
        <Navbar />
        {/* END OF NAVBAR */}

        {/* OPENING */}
        <div className="opening">
          <div className="opening-tagline">
            <img src="../../assets/img/Nearest.png" alt="" />
          </div>
          <div className="opening-picture">
            <img src="../../assets/img/Group 14.png" alt="" />
          </div>
        </div>
        {/* END OF OPENING */}

        {/* MAIN */}
        <div className="now-showing">
          <div className="now-showing__link">
            <div className="now-showing__left">
              <a href="#now showing">
                <span style={{ textDecoration: "underline" }}>Now Showing</span>
              </a>
            </div>
            <div className="now-showing__right">
              <a href="view all">
                {" "}
                <span>View all</span>
              </a>
            </div>
          </div>

          <div className="now-showing__movie">
            <div className="movie-image">
              <img src="../../assets/img/Card Movies v1.png" alt="" />
            </div>
            <div className="movie-image">
              <img src="../../assets/img/Card Movies v2.png" alt="" />
            </div>
            <div className="movie-image">
              <img src="../../assets/img/Card Movies v3.png" alt="" />
            </div>
            <div className="movie-image">
              <img src="../../assets/img/Card Movies v1.png" alt="" />
            </div>
            <div className="movie-image">
              <img src="../../assets/img/Card Movies v2.png" alt="" />
            </div>
            <div className="movie-image"></div>
          </div>
        </div>

        <div className="upcoming-movie">
          <div className="upcoming-movie__link">
            <div className="upcoming-movie__left">
              <a href="#upcomingmovie" className="decorationline">
                <span>Upcoming Movie</span>
              </a>
            </div>
            <div className="upcoming-movie__right">
              <a href="view all" className="decorationline">
                <span>View all</span>
              </a>
            </div>
          </div>

          <div className="container-month">
            <div className="month">
              <button>September</button>
              <button>Oktober</button>
              <button>November</button>
              <button>Desember</button>
              <button>January</button>
              <button>February</button>
              <button>March</button>
              <button>April</button>
              <button>Mey</button>
              <button>June</button>
              <button>July</button>
              <button>August</button>
            </div>
          </div>

          <div className="upcoming-movie__main">
            <div className="card">
              <div className="header">
                <img src="../../assets/img/Rectangle2.png" alt="" />
              </div>
              <div className="content">
                <h3>Black Widow</h3>
                <p>Action, Adventure, Sci-Fi</p>
                <button>Detail</button>
              </div>
            </div>
            <div className="card">
              <div className="header">
                <img src="../../assets/img/Rectangle 139.png" alt="" />
              </div>
              <div className="content">
                <h3>The Witches</h3>
                <p>Adventure, Comedy, Family</p>
                <button>Detail</button>
              </div>
            </div>
            <div className="card">
              <div className="header">
                <img src="../../assets/img/Rectangle3.png" alt="" />
              </div>
              <div className="content">
                <h3>Tenet</h3>
                <p>Action, Sci-Fi</p>
                <button>Detail</button>
              </div>
            </div>
            <div className="card">
              <div className="header">
                <img src="../../assets/img/Rectangle2.png" alt="" />
              </div>
              <div className="content">
                <h3>Black Widow</h3>
                <p>Action, Adventure, Sci-Fi</p>
                <button>Detail</button>
              </div>
            </div>
            <div className="card">
              <div className="header">
                <img src="../../assets/img/Rectangle 139.png" alt="" />
              </div>
              <div className="content">
                <h3>The Witches</h3>
                <p>Adventure, Comedy, Family</p>
                <button>Detail</button>
              </div>
            </div>
          </div>
        </div>

        {/* END OF MAIN */}

        {/* JOIN A MEMBER */}
        <div className="container-member">
          <div className="member__title">
            <img
              src="../../assets/img/Be the vanguard of the Moviegoers.png"
              alt=""
            />
          </div>
          <div className="member__email">
            <form>
              <input
                type="email"
                id="email"
                name="email"
                value="Type your email"
                className="member__email-input1"
              />
              <input
                type="submit"
                value="Join Now"
                className="member__email-input2"
              />
            </form>
          </div>
          <div className="member__tagline">
            <div className="tagline1">By joining you as a Tickitz member,</div>
            <div className="tagline2">
              we will always send you the latest updates via email .
            </div>
          </div>
        </div>

        <div className="now-showing"></div>

        <div className="upcoming-movie"></div>

        {/* END OF JOIN A MEMBER */}

        {/* FOOTER */}
        <div className="container-footer">
          <footer className="upper-footer">
            <div className="brand">
              <div className="brand-image">
                <img src="../../assets/img/Tickitz2.png" alt="" />
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
                  <img src="../../assets/img/ebv.id 2.png" alt="" />
                </div>
                <div>
                  <img src="../../assets/img/CineOne21 2.png" alt="" />
                </div>
                <div>
                  <img src="../../assets/img/hiflix 2.png" alt="" />
                </div>
              </div>
            </div>

            <div className="follow">
              <div className="follow-title">Follow Us</div>
              <div className="wrap-follow">
                <div className="wrap-set">
                  <img src="../../assets/img/eva_facebook-outline.png" alt="" />
                  <span>Tickitz Cinema id</span>
                </div>
                <div className="wrap-set">
                  <img src="../../assets/img/bx_bxl-instagram.png" alt="" />
                  <span>tickitz.id</span>
                </div>
                <div className="wrap-set">
                  <img src="../../assets/img/eva_twitter-outline.png" alt="" />
                  <span>tickitz.id</span>
                </div>
                <div className="wrap-set">
                  <img src="../../assets/img/feather_youtube.png" alt="" />
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
    </>
  );
}

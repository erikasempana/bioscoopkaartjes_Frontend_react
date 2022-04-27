import React from "react";
import "./home.css";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import Nearest from "../../assets/img/Nearest.png";
import Jumbotron3pic from "../../assets/img/jumbotron3pic.png";
import Movie1 from "../../assets/img/Movie1.png";
import Movie2 from "../../assets/img/Movie2.png";
import Movie3 from "../../assets/img/Movie3.png";
import Rectangle2 from "../../assets/img/Rectangle2.png";
import Rectangle4 from "../../assets/img/Rectangle3.png";
import Rectangle3 from "../../assets/img/Rectangle4.png";
import Member from "../../components/Member/member";

export default function Home() {
  return (
    <>
      <div className="home_container">
        {/* Navbar */}
        <Navbar />
        {/* END OF NAVBAR */}

        {/* OPENING */}
        <div className="home_opening">
          <div className="home_opening-tagline">
            <img src={Nearest} alt="" />
          </div>
          <div className="home_opening-picture">
            <img src={Jumbotron3pic} alt="" />
          </div>
        </div>
        {/* END OF OPENING */}

        {/* MAIN */}
        <div className="home_now-showing">
          <div className="home_now-showing__link">
            <div className="home_now-showing__left">
              <a href="#now showing">
                <span style={{ textDecoration: "underline" }}>Now Showing</span>
              </a>
            </div>
            <div className="home_now-showing__right">
              <a href="view all">
                {" "}
                <span>View all</span>
              </a>
            </div>
          </div>

          <div className="home_now-showing__movie">
            <div className="home_movie-image">
              <img src={Movie1} alt="" />
            </div>
            <div className="home_movie-image">
              <img src={Movie2} alt="" />
            </div>
            <div className="home_movie-image">
              <img src={Movie3} alt="" />
            </div>
            <div className="home_movie-image">
              <img src={Movie1} alt="" />
            </div>
            <div className="home_movie-image">
              <img src={Movie2} alt="" />
            </div>
            <div className="home_movie-image"></div>
          </div>
        </div>

        <div className="home_upcoming-movie">
          <div className="home_upcoming-movie__link">
            <div className="home_upcoming-movie__left">
              <a href="#upcomingmovie" className="decorationline">
                <span>Upcoming Movie</span>
              </a>
            </div>
            <div className="home_upcoming-movie__right">
              <a href="view all" className="decorationline">
                <span>View all</span>
              </a>
            </div>
          </div>

          <div className="home_container-month">
            <div className="home_month">
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

          <div className="home_upcoming-movie__main">
            <div className="home_card">
              <div className="home_header">
                <img src={Rectangle2} alt="" />
              </div>
              <div className="home_content">
                <h3>Black Widow</h3>
                <p>Action, Adventure, Sci-Fi</p>
                <button>Detail</button>
              </div>
            </div>
            <div className="home_card">
              <div className="home_header">
                <img src={Rectangle4} alt="" />
              </div>
              <div className="home_content">
                <h3>The Witches</h3>
                <p>Adventure, Comedy, Family</p>
                <button>Detail</button>
              </div>
            </div>
            <div className="home_card">
              <div className="home_header">
                <img src={Rectangle3} alt="" />
              </div>
              <div className="home_content">
                <h3>Tenet</h3>
                <p>Action, Sci-Fi</p>
                <button>Detail</button>
              </div>
            </div>
            <div className="home_card">
              <div className="home_header">
                <img src={Rectangle2} alt="" />
              </div>
              <div className="home_content">
                <h3>Black Widow</h3>
                <p>Action, Adventure, Sci-Fi</p>
                <button>Detail</button>
              </div>
            </div>
            <div className="home_card">
              <div className="home_header">
                <img src={Rectangle4} alt="" />
              </div>
              <div className="home_content">
                <h3>The Witches</h3>
                <p>Adventure, Comedy, Family</p>
                <button>Detail</button>
              </div>
            </div>
          </div>
        </div>

        {/* END OF MAIN */}

        {/* JOIN A MEMBER */}
        <Member />

        {/* END OF JOIN A MEMBER */}

        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";
import "./home.css";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import Nearest from "../../assets/img1/nearest.png";
import JumbotroneImage from "../../assets/img1/group.png";
import Member from "../../components/Member/member";
import DefaultImage from "../../assets/img1/default.png";
import axios from "../../utils/axios";
import { Link, useNavigate } from "react-router-dom";
import dayjs from "dayjs";

export default function Home() {
  const navigate = useNavigate();
  const [nowShowing, setNowShowing] = useState([]);
  console.log("nowshowing", nowShowing);
  const [upComingMovie, setUpComingMovie] = useState([]);
  const monthList = [
    { id: 1, month: "January" },
    { id: 2, month: "February" },
    { id: 3, month: "March" },
    { id: 4, month: "April" },
    { id: 5, month: "Mey" },
    { id: 6, month: "June" },
    { id: 7, month: "July" },
    { id: 8, month: "August" },
    { id: 9, month: "September" },
    { id: 10, month: "October" },
    { id: 11, month: "November" },
    { id: 12, month: "December" }
  ];

  const getNowShowing = async () => {
    try {
      const month = new Date().getMonth();
      const resultNowShowing = await axios.get(`movie/?searchRelease=${month}`);
      setNowShowing(resultNowShowing.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const getUpComingMovie = async () => {
    try {
      const params = new Date().getMonth() + 1;
      const resultUpComingMovie = await axios.get(`movie/?searchRelease=${params}`);
      setUpComingMovie(resultUpComingMovie.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleMonth = async (id) => {
    try {
      const resultUpComingMovie = await axios.get(`movie/?searchRelease=${id}`);
      setUpComingMovie(resultUpComingMovie.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleDetailMovie = (id) => {
    console.log("ika", id);
    navigate(`/detail/${id}`);
  };

  useEffect(() => {
    getNowShowing();
    getUpComingMovie();
  }, []);

  return (
    <>
      <div className="home_container">
        {/* Navbar */}
        <Navbar />
        {/* END OF NAVBAR */}
        {/* OPENING */}
        <section id="home1">
          <div className="container bg-white">
            <div className="row m-auto home_hero">
              <div className="col m-auto home_hero-one">
                <img src={Nearest} alt="tagline" />
              </div>
              <div className="col m-auto home_hero-two">
                <img src={JumbotroneImage} alt="jumbotroneimage" />
              </div>
            </div>
          </div>
        </section>
        {/* END OF OPENING */}

        {/* MAIN */}
        <section id="nowshowing">
          <div className="container pt-5">
            <div className="row">
              <div className="col">
                <Link to="/home" className="h4">
                  No<u>w Show</u>ing
                </Link>
              </div>
              <div className="col text-end">
                <Link to="/viewall" classname="p">
                  view all
                </Link>
              </div>
            </div>
            <div className="d-flex flex-row py-5 justify-content-between nowshowing_overflow-movie">
              {nowShowing.map((el) => (
                <div key={el.id} className="wrapper">
                  <div className="card nowshowing_movie-card" style={{ width: "16rem" }}>
                    <img
                      src={process.env.REACT_APP_CLOUDINARY_URL + el.image}
                      className="card-img-top nowshowing_movie-img"
                      alt="..."
                    />

                    <div className="card-body text-center nowshowing_movie-detail pt-1">
                      <div className="title m-auto">
                        <h5
                          className="card-title pt-0 fs-5 fw-bolder"
                          style={{ color: "rgba(20, 20, 43, 1)" }}
                        >
                          {el.name}
                        </h5>
                      </div>
                      <div className="category">
                        <p className="card-text" style={{ color: "#a0a3bd", fontSize: "15px" }}>
                          {el.category}
                        </p>
                      </div>

                      <div className="detail">
                        <button
                          onClick={() => handleDetailMovie(el.id)}
                          className="btn btn-outline-primary btn-detail"
                        >
                          Detail
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <main id="upcomingmovie">
          <div className="container py-5">
            <div className="row">
              <div className="col">
                <Link to="/home" className="h4">
                  Upcoming Movie
                </Link>
              </div>
              <div className="col text-end">
                <Link to="/viewall" className="p">
                  view all
                </Link>
              </div>
            </div>

            <section id="monthbutton">
              <div className="container">
                <div className="row home_month-wrap overflow-auto mt-5">
                  <div className="col home_month">
                    {monthList.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={() => handleMonth(item.id)}
                      >
                        {item.month}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <div className="d-flex flex-row py-5 justify-content-between upcomingmovie_overflow-movie">
              {upComingMovie.map((item) => (
                <div key={item.id} className="pe-3 ">
                  <div className="card upcomingmovie-card" style={{ width: "16rem" }}>
                    <img
                      src={process.env.REACT_APP_CLOUDINARY_URL + item.image}
                      className="card-img-top upcomingmovie-img"
                      alt="image-movie"
                    />
                    <div className="card-body text-center upcomingmovie-detail py-1">
                      <div className="upcoming_title">
                        <h5
                          className="card-title pt-0 fs-5 fw-bolder"
                          style={{ color: "rgba(20, 20, 43, 1)" }}
                        >
                          {item.name}
                        </h5>
                      </div>
                      <div className="upcoming_category">
                        <p className="card-text" style={{ color: "#a0a3bd", fontSize: "15px" }}>
                          {item.category}
                        </p>
                      </div>
                      <div className="upcoming_detail">
                        <button
                          onClick={() => handleDetailMovie(item.id)}
                          className="btn btn-outline-primary"
                          style={{
                            width: "100%",
                            border: "2px solid rgba(95, 46, 234, 1)",
                            color: "rgba(95, 46, 234, 1)"
                          }}
                        >
                          Detail
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* END OF MAIN */}

        <Member />

        <Footer />
      </div>
    </>
  );
}

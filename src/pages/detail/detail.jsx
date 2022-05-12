import React, { useEffect, useState } from "react";
import "./detail.css";
import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar/navbar";
import Spiderman from "../../assets/img/spiderman.png";
import Ebuid from "../../assets/img/ebuid.png";
import Cineone from "../../assets/img/cineone21.png";
import Hiflix from "../../assets/img/hiflix.png";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../utils/axios";
import dayjs from "dayjs";

export default function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [detailMovie, setDetailMovie] = useState({});
  const [scheduleMovie, setScheduleMovie] = useState([]);
  console.log(scheduleMovie);

  const getDetailMovie = async () => {
    try {
      const resultDetailMovie = await axios.get(`movie/${id}`);
      console.log(resultDetailMovie.data.data[0]);
      setDetailMovie(resultDetailMovie.data.data[0]);
    } catch (error) {
      console.log(error.response);
    }
  };

  const getScheduleMovie = async () => {
    try {
      const resultSchedulelMovie = await axios.get(`schedule?limit=6&page=1`);
      console.log(resultSchedulelMovie);
      setScheduleMovie(resultSchedulelMovie.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  const handleBookNow = () => {
    navigate(`/order`);
  };

  useEffect(() => {
    getDetailMovie();
    getScheduleMovie();
  }, []);

  return (
    <div className="moviedetail_container">
      {/* NAVBAR */}
      <Navbar />

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
              <b>{detailMovie.name}</b>
            </h2>
            <h5
              className="mb-5"
              style={{ color: "#4e4b66", fontWeight: "normal" }}
            >
              {detailMovie.category}
            </h5>
            <div className="row">
              <div className="col-md-4">
                <p>Release date</p>
                <p>
                  <b>{dayjs(detailMovie.releaseDate).format("DD-MM-YYYY")}</b>
                </p>
                <p>Duration</p>
                <p>
                  <b>June 28, 2017</b>
                </p>
              </div>
              <div className="col-md-8">
                <p>Directed By</p>
                <p>
                  <b>{detailMovie.director}</b>
                </p>
                <p>Casts</p>
                <p>
                  <b>{detailMovie.casts}</b>
                </p>
              </div>
            </div>
            <div className="line-border"></div>
            <h6>
              <b>Synopsis</b>
            </h6>
            <p style={{ textAlign: "left" }}>{detailMovie.synopsis}</p>
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
          {scheduleMovie.map((item) => (
            <div
              key={item.id}
              className="col-md-4 mb-2 moviedetail_card-schedule"
            >
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
                      <h4 className="font-weight-bold">{item.premiere}</h4>
                      <p style={{ fontSize: "12px", color: "#6e7191" }}>
                        {item.location}
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
                      {item.time}
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
                      <b>Rp {item.price}/Seat</b>
                    </h6>
                  </div>

                  <div className="row-lg-0 d-flex justify-content-between">
                    <button
                      onClick={handleBookNow}
                      className="btn btn-primary mx-auto moviedetail_btn-1"
                    >
                      Book now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* END OF CARD */}
      {/* END OF MAIN */}

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

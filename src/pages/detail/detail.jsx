import React, { useEffect, useState } from "react";
import "./detail.css";
import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar/navbar";
import Default from "../../assets/img1/default.png";
import Ebuid from "../../assets/img/ebuid.png";
import Cineone from "../../assets/img/cineone21.png";
import Hiflix from "../../assets/img/hiflix.png";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovieByIdMovie } from "../../stores/action/movie";
import { getAllSchedule, dataOrder, getScheduleByMovieId } from "../../stores/action/schedule";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

export default function Detail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [detailMovie, setDetailMovie] = useState({});
  const [scheduleMovie, setScheduleMovie] = useState([]);
  const [dateBooking, setDateBooking] = useState("");
  const [dataDetailOrder, setDataDetailOrder] = useState({
    movieId: id
  });
  console.log("dataOrder", dataDetailOrder);

  // GET DATA MOVIE BY ID
  // GET DATA SCHEDULE FILER BY MOVIE ID & DATE BOOKING

  const changeDataBooking = (data) => {
    setDataDetailOrder({ ...dataDetailOrder, ...data, dateBooking });
  };

  const handleDateBooking = (e) => {
    setDateBooking(e.target.value);
  };

  // handleDateChange = ({ target: { name, value } }) => {
  //   this.setState({
  //     [name]: value
  //   });

  const getDetailMovie = async () => {
    try {
      const resultDetailMovie = await dispatch(getMovieByIdMovie(id));
      // const resultDetailMovie = await axios.get(`movie/${id}`);
      console.log(resultDetailMovie);
      setDetailMovie(resultDetailMovie.action.payload.data.data[0]);
    } catch (error) {
      console.log(error.response);
    }
  };

  const getScheduleMovie = async () => {
    try {
      const resultSchedulelMovie = await dispatch(getScheduleByMovieId(id));
      setScheduleMovie(resultSchedulelMovie.action.payload.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleBookNow = (price) => {
    const body = {
      ...dataDetailOrder,
      price
    };
    dispatch(dataOrder(body));
    navigate("/order");
  };

  function formatRupiah(money) {
    return new Intl.NumberFormat(
      "id-ID",
      { style: "currency", currency: "IDR", minimumFractionDigits: 0 } // diletakkan dalam object
    ).format(money);
  }

  useEffect(() => {
    getDetailMovie();
    getScheduleMovie();
  }, []);

  return (
    <div className="moviedetail_container">
      {/* NAVBAR */}
      <Navbar />

      {/* NEW MAIN */}
      <main className="m-0 p-0">
        <section id="moviedetail">
          <div className="container">
            <div className="row mx-auto mt-5 bg-white">
              <div className="col-lg-3 mx-auto my-5 text-center">
                <div className="card p-3 movie_detail-card">
                  <img
                    src={
                      detailMovie.image
                        ? process.env.REACT_APP_CLOUDINARY_URL + detailMovie.image
                        : Default
                    }
                    className="img-top"
                    alt="..."
                  />
                </div>
              </div>
              <div className="col-lg-9 mx-auto my-5 px-5 moviedetail_wrap">
                <h2 className="mb-3">
                  <b>{detailMovie.name}</b>
                </h2>
                <h5 className="mb-5" style={{ color: "#4e4b66", fontWeight: "normal" }}>
                  {detailMovie.category}
                </h5>
                <div className="d-flex flex-row text-start">
                  <div className="col-lg-6 pe-5 pb-3">
                    <p className="my-1">Release date</p>
                    <p>
                      <b>{dayjs(detailMovie.releaseDate).format("DD-MM-YYYY")}</b>
                    </p>
                  </div>
                  <div className="col-lg-6 pb-3">
                    <p className="my-1">Directed By</p>
                    <p>
                      <b>{detailMovie.director}</b>
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-row text-start">
                  <div className="col-lg-6 pe-5 pb-3">
                    <p className="my-1">Duration</p>
                    <p>
                      <b>{detailMovie.duration}</b>
                    </p>
                  </div>
                  <div className="col-lg-6 pb-3">
                    <p className="my-1">Casts</p>
                    <p className="">
                      <b className="d-inline">{detailMovie.casts}</b>
                    </p>
                  </div>
                </div>
                <div className="row moviedetail_synopsis">
                  <hr />
                  <h5>
                    <b>Synopsis</b>
                  </h5>
                  <span className="text-start">{detailMovie.synopsis}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="showtimes">
          <div className="container showtimes">
            <div className="row text-center showtimes_title">
              <h4>
                <b>Showtimes and Tickets</b>
              </h4>
            </div>
            <div className="row pt-3 showtimes-wrap">
              <div className="col-lg-6 showtimes_date">
                <form>
                  <input
                    data-provide="datepicker"
                    type="date"
                    className="form-control moviedetail_set-box"
                    placeholder="20/05/2022"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={handleDateBooking}
                  />
                </form>
              </div>
              <div className="col-lg-6 showtimes_location">
                <div className="d-flex flex-row showtimes_location-flex">
                  <img src="./assets/img/map.png" alt="" />
                  <form>
                    <div className="col dropdown moviedetail_set-box">
                      <select name="location" className="moviedetail_dropdown-location">
                        <option>Select Location</option>
                        {scheduleMovie.map((el) => (
                          <option key={el.id} className="dropdown-item" value={el.location}>
                            {el.location}
                          </option>
                        ))}
                      </select>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="schedule">
          <div className="container pb-5">
            <div className="row d-flex justify-content-center pb-5 shedule-card-wrapper">
              {/* satu */}
              {scheduleMovie.map((item) => (
                <div key={item.id} className="col-lg-4 mb-2 d-flex schedule_column">
                  <div className="card shadow d-flex mb-4 justify-content-center schedule_card">
                    <div className="card-body shcedule_card-body">
                      <div className="row mb-1">
                        <div className="col-lg-6 d-flex flex-wrap align-items-center premiere_brand">
                          {item.premiere === "Hiflix" ? (
                            <img src={Hiflix} className="img" height="auto" width="90%" alt="..." />
                          ) : null}
                          {item.premiere === "cineOne21" ? (
                            <img
                              src={Cineone}
                              className="img"
                              height="auto"
                              width="90%"
                              alt="..."
                            />
                          ) : null}
                          {item.premiere === "Ebu.id" ? (
                            <img src={Ebuid} className="img" height="auto" width="90%" alt="..." />
                          ) : null}
                        </div>
                        <div className="col-lg-6 premiere_name">
                          <h4 className="font-weight-bold">{item.premiere} </h4>
                          <p
                            className="text-truncate"
                            style={{ fonSize: "13px", color: "#6e7191" }}
                          >
                            {item.location}
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="row mt-4  pt-2 schedule-time">
                        {item.time.split(",").map((itemTime) => (
                          <button
                            key={itemTime}
                            onClick={() =>
                              changeDataBooking({ timeBooking: itemTime, scheduleId: item.id })
                            }
                            className="col-3 mb-3 btn btn-white  time"
                          >
                            {dayjs(itemTime, "HH:mm").format("hh:mm a")}
                          </button>
                        ))}
                      </div>
                      <div className="d-flex pt-3">
                        <div className="col-6 price text-start">
                          <h6 className="card-text" style={{ fontSize: "16px", color: "#6b6b6b" }}>
                            Price
                          </h6>
                        </div>
                        <div className="col-6 money text-end">
                          <h6 className="card-text" style={{ fontSize: "16px" }}>
                            <span>
                              <b>{formatRupiah(item.price)} /seat</b>
                            </span>
                          </h6>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center pt-3">
                        <button
                          disabled={item.id === dataDetailOrder.scheduleId ? false : true}
                          onClick={() => handleBookNow(item.price)}
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
        </section>
      </main>
      {/* END NEW MAIN */}

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

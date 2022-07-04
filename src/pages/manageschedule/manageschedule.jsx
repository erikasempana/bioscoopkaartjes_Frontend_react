import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import "./manageschedule.css";
import DefaultPict from "../../assets/img1/default.png";
import Ebuid from "../../assets/img1/ebuid.png";
import Hiflix from "../../assets/img1/hiflix.png";
import Cineone from "../../assets/img1/cineone.png";
import Pagination from "react-paginate";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import axios from "../../utils/axios";
import CurrencyFormat from "react-currency-format";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

import { getAllMovie, getMovieByIdMovie } from "../../stores/action/movie";
import { getScheduleByMovieId } from "../../stores/action/schedule";

function ManageSchedule() {
  const dispatch = useDispatch();
  const SortList = [
    { id: 1, sort: "ASC" },
    { id: 2, sort: "DESC" }
  ];
  const sortLocation = [
    { id: 1, location: "Bandung" },
    { id: 2, location: "Bogor" },
    { id: 3, location: "DKI Jakarta" },
    { id: 4, location: "Lampung" },
    { id: 5, location: "Tangerang" }
  ];
  const sortPremiere = [
    { id: 1, premiere: Cineone },
    { id: 2, premiere: Ebuid },
    { id: 3, premiere: Hiflix }
  ];
  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(1);
  const [movieId, setMovieId] = useState("");
  const [location, setLocation] = useState("");
  const [sort, setSort] = useState("ASC");
  const [sortBy, setSortBy] = useState("id");
  const [allMovie, setAllMovie] = useState([]);
  const [movie, setMovie] = useState({});
  const [allSchedule, setAllSchedule] = useState([]);
  const [pageInfo, setPageInfo] = useState({});

  const dataSchedule = async () => {
    try {
      const resultSchedule = await axios.get(
        `schedule?limit=${limit}&page=${page}&searchMovieId=${movieId}&searchLocation=${location}&sort=${sort}&sortBy=${sortBy}`
      );
      setAllSchedule(resultSchedule.data.data);
      setPageInfo(resultSchedule.data.pagination);
    } catch (error) {
      alert(error.response);
    }
  };

  const dataMovie = async () => {
    try {
      const result = await dispatch(getAllMovie(page, limit));
      setAllMovie(result.action.payload.data.data);
    } catch (error) {
      alert(error.response);
    }
  };

  const handleSelectMovie = async (e) => {
    try {
      const id = e.target.value;
      const result = await dispatch(getMovieByIdMovie(id));
      const schedule = await dispatch(getScheduleByMovieId(id));
      setMovieId(id);
      setMovie(result.action.payload.data.data[0]);
      setSchedule(schedule.action.payload.data.data);
    } catch (error) {
      alert(error.response);
    }
  };

  const handlePagination = (data) => {
    console.log(data.selected + 1);
    setPage(data.selected + 1);
  };

  useEffect(() => {
    dataSchedule();
    dataMovie();
  }, []);

  // did Update
  useEffect(() => {
    dataSchedule();
  }, [movieId, page]);

  return (
    <>
      <Navbar />
      <section id="manageschedule">
        <div className="container">
          <div className="row">
            <h4>
              <b>
                <b>Form Schedule</b>
              </b>
            </h4>
            <div className="col">
              <div className="card manageschedule_border">
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col-lg-3 manageschedule_image-card m-auto">
                        <div className="card" style={{ width: "240px" }}>
                          <div className="card-body m-auto manageschedule_image">
                            <input type="file" name="image" style={{ width: "fit-content" }} />
                            <img
                              className="manageschedule_image-movie"
                              src={
                                movie.image
                                  ? process.env.REACT_APP_CLOUDINARY_URL + movie.image
                                  : DefaultPict
                              }
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 manageschedule_data-movie-one m-auto">
                        <div className="mb-3 select-movie-wrapper">
                          <label htmlFor="movie-name" className="form-label">
                            Movie Name
                          </label>
                          <select
                            className="form-select overflow-auto select-movie"
                            aria-label="Default select example"
                            onChange={handleSelectMovie}
                          >
                            <option selected>Select Movie</option>
                            {allMovie.map((item) => (
                              <option key={item.id} value={item.id}>
                                {item.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="director" className="form-label">
                            Price
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="price"
                            placeholder={movie.price ? movie.price : "movie Price..."}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="releasedate" className="form-label">
                            Premiere
                          </label>
                          <div className="premiere_wrap">
                            {sortPremiere.map((item) => (
                              <div key={item.id} className="">
                                <button className="btn btn-outline-white premiere_button">
                                  <img
                                    src={item.premiere}
                                    alt="premiere"
                                    className="premiere_img"
                                  />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 manageschedule_data-movie-two m-auto">
                        <div className="mb-3">
                          <label htmlFor="category" className="form-label">
                            Location
                          </label>
                          <select className="form-select" aria-label="Default select example">
                            <option selected>Select Location</option>
                            {sortLocation.map((item) => (
                              <option key={item.id} value={item.id}>
                                {item.location}
                              </option>
                            ))}
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <div className="row">
                            <div className="col-6">
                              <label htmlFor="duration-hour" className="form-label">
                                Date Start
                              </label>
                              <input type="date" className="form-control" />
                            </div>
                            <div className="col-6">
                              <label htmlFor="duration-minute" className="form-label">
                                Date End
                              </label>
                              <input type="date" className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <div className="row m-1">
                            <label htmlFor="duration-hour" className="ps-0 form-label">
                              Time
                            </label>

                            <div className="manage_time">
                              <button className="col me-0 time-plus btn btn-outline-primary">
                                +
                              </button>
                              <button className="col">08:30 am</button>
                              <button className="col">08:30 am</button>
                              <button className="col">08:30 am</button>
                              <button className="col">08:30 am</button>
                              <button className="col">08:30 am</button>
                              <button className="col">08:30 am</button>
                              <button className="col">08:30 am</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-end button-manageschedule-wrap">
                      <div className="reset-manageschedule">
                        <button
                          type="submit"
                          className="btn btn-outline-primary reset-manageschedule-button"
                        >
                          Reset
                        </button>
                      </div>
                      <div className="submit-manageschedule">
                        <button
                          type="submit"
                          className="col-lg-6 btn btn-outline-primary submit-manageschedule-button"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="dataschedule_filter">
        <div className="container">
          <div className="row">
            <div className="col-6 m-auto">
              <h4>
                <b>Data Schedule</b>
              </h4>
            </div>
            <div className="col-2">
              <select className="form-select" aria-label="Default select example">
                <option selected>Sort</option>
                {SortList.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.sort}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-2">
              <select className="form-select" aria-label="Default select example">
                <option selected>Location</option>
                {allSchedule
                  ? allSchedule.map((item) => (
                      <option key={item.id} value={item.location}>
                        {item.location}
                      </option>
                    ))
                  : schedule.location}
              </select>
            </div>
            <div className="col-2">
              <select className="form-select" aria-label="Default select example">
                <option selected>Movie</option>
                {allMovie
                  ? allMovie.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.id}
                      </option>
                    ))
                  : movieId}
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      <section id="manageschedule-movie">
        <div className="container manageschedule_wrap-card">
          <div className="row">
            {allSchedule.map((item) => (
              <div key={item.id} className="col-lg-4 p-2">
                <div className="card p-2 manageschedule_card ">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-6 m-auto text-center">
                        {item.premiere === "Hiflix" ? (
                          <img src={Hiflix} className="img" height="auto" width="90%" alt="..." />
                        ) : null}
                        {item.premiere === "cineOne21" ? (
                          <img src={Cineone} className="img" height="auto" width="90%" alt="..." />
                        ) : null}
                        {item.premiere === "Ebu.id" ? (
                          <img src={Ebuid} className="img" height="auto" width="90%" alt="..." />
                        ) : null}
                      </div>
                      <div className="col-6">
                        <div className="row">
                          <h4>
                            <b>{item.premiere}</b>
                          </h4>
                        </div>
                        <div className="row">
                          <p>{item.location}</p>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="row py-3 manageschedule_time-wrapper">
                      {/* {item.time} */}
                      {item.time.split(", ").map((itemTime) => (
                        <div key={itemTime} className="col-3 py-2 manageschedule_time">
                          {dayjs(itemTime, "HH:mm").format("hh:mm a")}
                        </div>
                      ))}
                    </div>
                    <div className="row pt-2 pb-4">
                      <div className="col-3 text-start">
                        <h5>Price</h5>
                      </div>
                      <div className="col-9 text-end">
                        <h5>
                          <b>
                            <CurrencyFormat
                              value={item.price}
                              displayType={"text"}
                              thousandSeparator={"."}
                              decimalSeparator={","}
                              prefix={"Rp "}
                              suffix={" /seat"}
                            />
                          </b>
                        </h5>
                      </div>
                    </div>
                    <div className="row p-auto">
                      <div className="col-6 text-start">
                        <button className="btn btn-outline-primary managedataschedule_update-button">
                          Update
                        </button>
                      </div>
                      <div className="col-6 text-end">
                        <button className="btn btn-outline-danger managedataschedule_delete-button">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Pagination
        previousLabel={"<<"}
        nextLabel={">>"}
        breakLabel={"..."}
        pageCount={pageInfo.totalPage}
        onPageChange={handlePagination}
        // marginPagesDisplayed={3}
        // pageRangeDisplayed={4}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
      {/* <Pagination /> */}
      <Footer />
    </>
  );
}

export default ManageSchedule;

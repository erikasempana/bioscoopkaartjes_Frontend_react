import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import Pagination from "react-paginate";
import "./manageschedule.css";
import axios from "../../utils/axios";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

import DefaultPict from "../../assets/img1/default.png";
import Ebuid from "../../assets/img1/ebuid.png";
import Hiflix from "../../assets/img1/hiflix.png";
import Cineone from "../../assets/img1/cineone.png";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";

import { getAllMovie, getMovieByIdMovie } from "../../stores/action/movie";

function ManageSchedule() {
  const dispatch = useDispatch();
  const SortList = [
    { label: "ASC", value: "ASC" },
    { label: "DESC", value: "DESC" }
  ];
  const sortLocation = [
    { label: "Bandung", value: "Bandung" },
    { label: "Bogor", value: "Bogor" },
    { label: "DKI Jakarta", value: "DKI Jakarta" },
    { label: "Lampung", value: "Lampung" },
    { label: "Tangerang", value: "Tangerang" }
  ];
  const sortPremiere = [
    { id: 1, premiere: Cineone, name: "cineOne21" },
    { id: 2, premiere: Ebuid, name: "Ebu.id" },
    { id: 3, premiere: Hiflix, name: "Hiflix" }
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
  const [form, setForm] = useState({
    movieId: "",
    premiere: "",
    price: "",
    location: "",
    dateStart: "",
    dateEnd: "",
    time: ""
  });
  // update
  const [hide, setHide] = useState(true);
  const [isUpdate, setIsUpdate] = useState(false);
  const [newMovieId, setNewMovieId] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");
  const [selectedPremiere, setSelectedPremiere] = useState("");
  const [updateLocation, setUpdateLocation] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [formTime, setFormTime] = useState({ time: "" });

  const dataSchedule = async () => {
    try {
      const resultSchedule = await axios.get(
        `schedule?limit=${limit}&page=${page}&searchMovieId=${movieId}&searchLocation=${location}&sort=${sort}&sortBy=${sortBy}`
      );
      setAllSchedule(resultSchedule.data.data);
      setPageInfo(resultSchedule.data.pagination);
    } catch (error) {
      console.log(error.response);
    }
  };

  const dataMovie = async () => {
    try {
      const result = await dispatch(getAllMovie(page, limit));
      setAllMovie(result.action.payload.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleSelectMovie = async (e) => {
    try {
      const id = e.target.value;
      const result = await dispatch(getMovieByIdMovie(id));
      setMovie(result.action.payload.data.data[0]);
      setNewMovieId(id);
    } catch (error) {
      console.log(error.response);
    }
  };

  // Filter
  const handleSort = (event) => {
    setSortBy("premiere");
    console.log(event.target.value);
    setSort(event.target.value);
  };

  const handleSortMovieId = (event) => {
    setMovieId(event.target.value);
  };

  const handleSortLocation = (event) => {
    setLocation(event.target.value);
  };

  const handlePagination = (data) => {
    console.log(data.selected + 1);
    setPage(data.selected + 1);
  };

  //SUBMIT NEW DATA
  const handleChangeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = {
      movieId: newMovieId,
      premiere: selectedPremiere,
      price: form.price,
      location: selectedPremiere,
      dateStart: form.dateStart,
      dateEnd: form.dateEnd,
      time: formTime.time
    };
  };

  // UPDATE
  const handlePrice = () => {
    setTicketPrice();
  };
  const handleSelectPremiere = (e, name) => {
    e.preventDefault();
    setSelectedPremiere(name);
  };
  const handleUpdateLocation = (e) => {
    setUpdateLocation(e.target.value);
  };

  const handleDate = () => {
    setDateStart();
    setDateEnd();
  };

  const handleFormTime = (event) => {
    e.preventDefault();
    if (event.key === "Enter" || event.key === 13) {
      setFormTime({ ...form, [event.target.name]: event.target.value });
      setHide(true);
    }
  };
  console.log(formTime.time);

  const onClickPlus = (e) => {
    e.preventDefault();
    setHide(false);
  };

  function formatRupiah(money) {
    return new Intl.NumberFormat(
      "id-ID",
      { style: "currency", currency: "IDR", minimumFractionDigits: 0 } // diletakkan dalam object
    ).format(money);
  }

  useEffect(() => {
    dataSchedule();
    dataMovie();
  }, []);

  // did Update
  useEffect(() => {
    dataSchedule();
  }, [movieId, page, sort, location]);

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
                          <div className="card-body manageschedule_image">
                            <img
                              className="manageschedule_image-movie"
                              src={
                                movie.image
                                  ? process.env.REACT_APP_CLOUDINARY_URL + movie.image
                                  : DefaultPict
                              }
                              alt="movie-picture"
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
                            placeholder="movie Price..."
                            onChange={(event) => handleChangeForm(event)}
                            value={form.price}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="releasedate" className="form-label">
                            Premiere
                          </label>
                          <div className="premiere_wrap">
                            {sortPremiere.map((item) => (
                              <div key={item.id}>
                                <button
                                  onClick={(e) => handleSelectPremiere(e, item.name)}
                                  name={item.name}
                                  type="button"
                                  className="btn btn-outline-white premiere_button"
                                >
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
                          <select
                            onChange={handleUpdateLocation}
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Select Location</option>
                            {sortLocation.map((item) => (
                              <option key={item.id} value={item.value}>
                                {item.label}
                              </option>
                            ))}
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
                              <button
                                className="col me-0 time-plus btn btn-outline-primary"
                                onClick={(e) => onClickPlus(e)}
                              >
                                +
                              </button>
                              <input
                                type="time"
                                placeholder="00:00"
                                className={
                                  hide === true
                                    ? "manageschedule_input-new-time__hide"
                                    : "manageschedule_input-new-time"
                                }
                                name="time"
                                onChange={(event) => handleFormTime(event)}
                              />
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
                    <div className="d-flex flex-row justify-content-end button-manageschedule-wrap">
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
              <select
                onChange={handleSort}
                className="form-select"
                aria-label="Default select example"
                name="sort"
                id="sort"
                value={sort}
              >
                <option selected>Sort</option>
                {SortList.map((item) => (
                  <option key={item} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-2">
              <select
                onChange={handleSortLocation}
                className="form-select"
                aria-label="Default select example"
                name="location"
                id="location"
                value={location}
              >
                <option selected>Location</option>
                {sortLocation.map((item) => (
                  <option key={item} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-2">
              <select
                onChange={handleSortMovieId}
                className="form-select"
                aria-label="Default select example"
                name="movieId"
                id="movieId"
                value={movieId}
              >
                <option selected>Movie</option>
                {allMovie
                  ? allMovie.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.id}
                      </option>
                    ))
                  : movieId}
              </select>
            </div>
          </div>
        </div>
      </section>
      <section id="manageschedule-movie">
        <div className="container manageschedule_wrap-card">
          <div className="row">
            {allSchedule[0] ? (
              allSchedule.map((item) => (
                <div key={item.id} className="col-lg-4 p-2">
                  <div className="card p-2 manageschedule_card ">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-6 m-auto text-center">
                          {item.premiere === "Hiflix" ? (
                            <img src={Hiflix} className="img_premiere" alt="..." />
                          ) : item.premiere === "cineOne21" ? (
                            <img src={Cineone} className="img_premiere" alt="..." />
                          ) : item.premiere === "Ebu.id" ? (
                            <img src={Ebuid} className="img_premiere" alt="..." />
                          ) : (
                            ""
                          )}
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
                            <b>{formatRupiah(item.price)} /seat</b>
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
              ))
            ) : (
              <h4 className="no_data">THERE IS NO SCHEDULE DATA</h4>
            )}
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

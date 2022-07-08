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
import { createSchedule, deleteSchedule, updateSchedule } from "../../stores/action/schedule";

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

  // update
  const [hide, setHide] = useState(true);
  const [isUpdate, setIsUpdate] = useState(false);
  const [newMovieId, setNewMovieId] = useState("");
  const [formPrice, setFormPrice] = useState({ price: "" });
  const [selectedPremiere, setSelectedPremiere] = useState("");
  const [updateLocation, setUpdateLocation] = useState("");
  const [formDate, setFormDate] = useState({
    dateStart: "",
    dateEnd: ""
  });
  const [formTime, setFormTime] = useState({
    time: []
  });
  const [dataUpdatingSchedule, setDataUpdatingSchedule] = useState();
  const [dataMovieUpdate, setDataMovieUpdate] = useState();

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

    setSort(event.target.value);
  };

  const handleSortMovieId = (event) => {
    setMovieId(event.target.value);
  };

  const handleSortLocation = (event) => {
    setLocation(event.target.value);
  };

  const handlePagination = (data) => {
    // console.log(data.selected + 1);
    setPage(data.selected + 1);
  };

  //SUBMIT NEW DATA

  const handleSubmit = (event) => {
    try {
      event.preventDefault();

      const body = {
        movieId: newMovieId,
        premiere: selectedPremiere,
        price: formPrice.price,
        location: updateLocation,
        dateStart: formDate.dateStart,
        dateEnd: formDate.dateEnd,
        time: formTime.time.join(", ")
      };
      dispatch(createSchedule(body));
      handleReset();
      dataSchedule();
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleDeleteSchedule = async (item) => {
    try {
      await alert();
      const id = item.id;
      dispatch(deleteSchedule(id));
      dataSchedule();
      alert(`Success Delete schedule with id: ${id} in ${item.premiere} cinema`);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleReset = () => {
    setNewMovieId("");
    setSelectedPremiere("");
    setFormPrice({ price: "" });
    setUpdateLocation("");
    setFormDate({ dateStart: "", dateEnd: "" });
    setFormTime({ time: [] });
  };

  // UPDATE
  const handlePrice = (event) => {
    setFormPrice({ ...formPrice, price: event.target.value });
  };
  const handleSelectPremiere = (e, name) => {
    e.preventDefault();
    setSelectedPremiere(name);
  };
  const handleUpdateLocation = (e) => {
    setUpdateLocation(e.target.value);
  };

  const handleChangeFormDate = (event) => {
    setFormDate({ ...formDate, [event.target.name]: event.target.value });
  };

  const handleFormTime = (event) => {
    if (event.key === "Enter") {
      setHide(true);
      setFormTime({ ...formTime, time: [...formTime.time, event.target.value] });
    }
  };

  const onClickPlus = (e) => {
    e.preventDefault();
    setHide(false);
  };

  const handleClickUpdateButton = async (item) => {
    try {
      setIsUpdate(true);
      setDataUpdatingSchedule(item);
      const result = await dispatch(getMovieByIdMovie(item.movieId));
      setDataMovieUpdate(result.action.payload.data.data[0]);

      setSelectedPremiere(dataUpdatingSchedule.premiere);
      setFormPrice({ price: dataUpdatingSchedule.price });
      setUpdateLocation(dataUpdatingSchedule.location);
      setFormDate({
        dateStart: dataUpdatingSchedule.dateStart.split("T")[0],
        dateEnd: dataUpdatingSchedule.dateEnd.split("T")[0]
      });
      setFormTime({
        time: dataUpdatingSchedule.time.split(", ")
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  console.log(
    "From Clicking Update Button 1",
    selectedPremiere,
    formPrice,
    updateLocation,
    formDate,
    formTime
  );

  const handleUpdate = async (event) => {
    try {
      event.preventDefault();

      const id = dataUpdatingSchedule.id;
      const body = {
        movieId: dataUpdatingSchedule.movieId,
        premiere: selectedPremiere ?? "",
        price: formPrice.price ?? "",
        location: updateLocation ?? "",
        dateStart: formDate.dateStart ?? "",
        dateEnd: formDate.dateEnd ?? "",
        time: formTime.time.join(", ") ?? ""
      };
      console.log("Data Send", body);
      await dispatch(updateSchedule(id, body));
      alert("Success Update Data Schedule");
      handleReset();
      dataSchedule();
      setIsUpdate(false);
    } catch (error) {
      console.log(error.response);
      alert("Something wrong with the server");
    }
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
                      <div className="col-lg-3 manageschedule_image-card mt-4 ms-4">
                        <div className="card" style={{ width: "240px", height: "305px" }}>
                          <div className="card-body manageschedule_image">
                            {isUpdate ? (
                              <img
                                className="manageschedule_image-movie"
                                src={
                                  dataMovieUpdate
                                    ? process.env.REACT_APP_CLOUDINARY_URL + dataMovieUpdate.image
                                    : DefaultPict
                                }
                                alt="movie-picture"
                              />
                            ) : (
                              <img
                                className="manageschedule_image-movie"
                                src={
                                  movie.image
                                    ? process.env.REACT_APP_CLOUDINARY_URL + movie.image
                                    : DefaultPict
                                }
                                alt="movie-picture"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 manageschedule_data-movie-one ms-3 mt-4">
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
                            {isUpdate ? (
                              <option selected value={dataUpdatingSchedule.movieId}>
                                {dataUpdatingSchedule.name}
                              </option>
                            ) : (
                              allMovie.map((item) => (
                                <option key={item.id} value={item.id}>
                                  {item.name}
                                </option>
                              ))
                            )}
                          </select>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="director" className="form-label">
                            Price
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="price"
                            placeholder="movie Price..."
                            value={formPrice.price}
                            name="price"
                            onChange={handlePrice}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="releasedate" className="form-label">
                            Premiere
                          </label>
                          <div className="premiere_wrap">
                            {sortPremiere.map((item) => (
                              <div key={item.id}>
                                {selectedPremiere === item.name ? (
                                  <button
                                    onClick={(e) => handleSelectPremiere(e, item.name)}
                                    name={item.name}
                                    type="button"
                                    className="btn btn-outline-primary premiere_button"
                                  >
                                    <img
                                      src={item.premiere}
                                      alt="premiere"
                                      className="premiere_img"
                                    />
                                  </button>
                                ) : (
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
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 manageschedule_data-movie-two ms-4 mt-4">
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
                            {isUpdate ? (
                              <option selected value={dataUpdatingSchedule.location.value}>
                                {dataUpdatingSchedule.location}
                              </option>
                            ) : (
                              sortLocation.map((item) => (
                                <option key={item.id} value={item.value}>
                                  {item.label}
                                </option>
                              ))
                            )}
                          </select>
                        </div>
                        <div className="mb-3">
                          <div className="row">
                            <div className="col-6">
                              <label htmlFor="date" className="form-label">
                                Date Start
                              </label>
                              <input
                                type="date"
                                className="form-control"
                                value={formDate.dateStart}
                                name="dateStart"
                                onChange={handleChangeFormDate}
                              />
                            </div>
                            <div className="col-6">
                              <label htmlFor="date" className="form-label">
                                Date End
                              </label>
                              <input
                                type="date"
                                className="form-control"
                                value={formDate.dateEnd}
                                name="dateEnd"
                                onChange={handleChangeFormDate}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mb-2">
                          <div className="row m-1">
                            <label htmlFor="duration-hour" className="ps-0 mb-0 form-label">
                              Time
                            </label>

                            <div className="manage_time mt-1 ">
                              {hide ? (
                                <button
                                  className="col-6 me-0  time-plus btn btn-outline-primary"
                                  onClick={(e) => onClickPlus(e)}
                                >
                                  +
                                </button>
                              ) : (
                                <input
                                  type="time"
                                  placeholder="00:00"
                                  className={"col-6  manageschedule_input-new-time"}
                                  name="time"
                                  value={formTime.time}
                                  onKeyPress={handleFormTime}
                                />
                              )}

                              <div className="row timewrapper" style={{ minHeight: "70px" }}>
                                {formTime
                                  ? formTime.time.map((item, index) => (
                                      <button key={index} className="col-4 ">
                                        {dayjs(item, "HH:mm").format("hh:mm a")}
                                      </button>
                                    ))
                                  : ""}
                              </div>
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
                          onClick={handleReset}
                        >
                          Reset
                        </button>
                      </div>
                      {isUpdate ? (
                        <div className="submit-manageschedule">
                          <button
                            type="submit"
                            className="col-lg-6 btn btn-outline-primary submit-manageschedule-button"
                            onClick={handleUpdate}
                          >
                            Update
                          </button>
                        </div>
                      ) : (
                        <div className="submit-manageschedule">
                          <button
                            type="submit"
                            className="col-lg-6 btn btn-outline-primary submit-manageschedule-button"
                            onClick={handleSubmit}
                          >
                            Submit
                          </button>
                        </div>
                      )}
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
                {SortList.map((item, index) => (
                  <option key={index} value={item.value}>
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
                {sortLocation.map((item, index) => (
                  <option key={index} value={item.value}>
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
                          <button
                            className="btn btn-outline-primary managedataschedule_update-button"
                            onClick={() => handleClickUpdateButton(item)}
                          >
                            Update
                          </button>
                        </div>
                        <div className="col-6 text-end">
                          <button
                            className="btn btn-outline-danger managedataschedule_delete-button"
                            onClick={() => handleDeleteSchedule(item)}
                          >
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

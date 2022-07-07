import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  postMovie,
  updateMovie,
  getAllMovie,
  getMovieByIdMovie,
  deleteMovie
} from "../../stores/action/movie";
import Pagination from "react-paginate";
import axios from "../../utils/axios";
import "./managemovie.css";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";

import DefaultImage from "../../assets/img1/default.png";
import SpidermanImage from "../../assets/img1/spiderman.png";

function ManageMovie() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [items] = useState([
    { label: "ASC", value: "ASC" },
    { label: "DESC", value: "DESC" }
  ]);
  const [limit] = useState(6);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("ASC");
  const [sortBy, setSortBy] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [searchName, setSearchName] = useState("");
  const [pageInfo, setPageInfo] = useState({});
  const [image, setImage] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
  const [idMovieUpdate, setIdMovieUpdate] = useState("");
  const [form, setForm] = useState({
    name: "",
    category: "",
    director: "",
    casts: "",
    releaseDate: "",
    duration_hours: "",
    duration_minutes: "",
    synopsis: "",
    image: ""
  });

  const getAllDataMovie = async () => {
    try {
      const resultMovie = await axios.get(
        `movie/?limit=${limit}&page=${page}&sort=${sort}&sortBy=${sortBy}&searchRelease=${releaseDate}&searchName=${searchName}`
      );
      setData(resultMovie.data.data);
      setPageInfo(resultMovie.data.pagination);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handlePagination = (data) => {
    console.log(data.selected + 1);
    setPage(data.selected + 1);
  };

  const handleSearch = (searchValue) => {
    const searchInput = searchValue.toLowerCase();
    setSearchName(searchInput);
  };

  const handleSort = (event) => {
    setSortBy("name");
    setSort(event.target.value);
  };

  const handleChangeForm = (event) => {
    const { name, value, files } = event.target;
    if (name === "image") {
      setForm({ ...form, [name]: files[0] });
      setImage(URL.createObjectURL(files[0]));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // NEW MOVIE

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = {
      name: form.name,
      category: form.category,
      director: form.director,
      casts: form.casts,
      releaseDate: form.releaseDate,
      duration: form.duration,
      synopsis: form.synopsis,
      image: form.image
    };
    const formData = new FormData();
    for (const data in body) {
      formData.append(data, body[data]);
    }
    // console.log(postMovie(formData));
    dispatch(postMovie(formData));
    getAllDataMovie();
    setImage(null);
    handleResetForm();
  };

  // NEW UPDATE
  const handleClickUpdate = async (data) => {
    try {
      console.log("data", data);
      setForm({
        ...form,
        name: data.name,
        category: data.category,
        director: data.director,
        casts: data.casts,
        releaseDate: data.releaseDate.split("T")[0],
        duration: data.duration,
        synopsis: data.synopsis,
        image: process.env.REACT_APP_CLOUDINARY_URL + data.image
      });
      console.log(data.releaseDate);
      dispatch(getMovieByIdMovie(data.id));
      setIsUpdate(true);
      setIdMovieUpdate(data.id);
    } catch (error) {
      console.log(error.response);
    }
  };

  const HandleUpdateDataMovie = (event) => {
    event.preventDefault();
    const id = idMovieUpdate;
    const body = {
      name: form.name,
      category: form.category,
      director: form.director,
      casts: form.casts,
      releaseDate: form.releaseDate,
      duration: form.duration,
      synopsis: form.synopsis,
      image: form.image
    };
    const formData = new FormData();
    for (const data in body) {
      formData.append(data, body[data]);
    }
    dispatch(updateMovie(id, formData));
    getAllDataMovie();
    setIsUpdate(false);
    setImage(null);
    handleResetForm();
  };

  const handleResetForm = () => {
    setForm({
      name: "",
      category: "",
      director: "",
      casts: "",
      releaseDate: "",
      duration_hours: "",
      duration_minutes: "",
      synopsis: "",
      image: ""
    });
  };
  // END OF NEW UPDATE

  // DELETE MOVIE
  const handleDeleteMovie = async (id) => {
    try {
      await dispatch(deleteMovie(id));
      getAllDataMovie();
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    getAllDataMovie();
  }, []);

  useEffect(() => {
    getAllDataMovie();
  }, [page, searchName, sort]);

  return (
    <>
      <Navbar />

      <section id="managemovie">
        <div className="container">
          <div className="row">
            <h4>
              <b>Form Movie</b>
            </h4>
            <div className="col">
              <div className="card p-4">
                <div className="card-body">
                  <form onSubmit={isUpdate === true ? HandleUpdateDataMovie : handleSubmit}>
                    <div className="row">
                      <div className="col-lg-3 manage_image-card m-auto">
                        <div className="card" style={{ width: "240px" }}>
                          <div className="card-body manage_image">
                            <img
                              src={image ? image : form.image ? form.image : DefaultImage}
                              alt="Image Movie Preview"
                              className="manage_image-movie"
                            />

                            <input
                              type="file"
                              name="image"
                              onChange={(event) => handleChangeForm(event)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 manage_data-movie-one m-auto">
                        <div className="mb-3">
                          <label htmlFor="movie-name" className="form-label">
                            Movie Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="movie-name"
                            placeholder="Movie name..."
                            name="name"
                            onChange={(event) => handleChangeForm(event)}
                            value={form.name}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="director" className="form-label">
                            Director
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="director"
                            placeholder="Director..."
                            value={form.director}
                            name="director"
                            onChange={handleChangeForm}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="releasedate" className="form-label">
                            Release date
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            id="releasedate"
                            placeholder="dd/mm/yyyy..."
                            value={form.releaseDate}
                            name="releaseDate"
                            onChange={handleChangeForm}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 manage_data-movie-two m-auto">
                        <div className="mb-3">
                          <label htmlFor="category" className="form-label">
                            Category
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="category"
                            placeholder="Category..."
                            value={form.category}
                            name="category"
                            onChange={handleChangeForm}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="casts" className="form-label">
                            Casts
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="casts"
                            placeholder="Casts..."
                            value={form.casts}
                            name="casts"
                            onChange={handleChangeForm}
                          />
                        </div>
                        <div className="mb-3">
                          <div className="row">
                            <div className="col-6">
                              <label htmlFor="duration-hour" className="form-label">
                                Duration
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="duration"
                                placeholder="00h 00m"
                                value={form.duration}
                                name="duration"
                                onChange={handleChangeForm}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row text-start">
                      <div className="mb-3 pt-3 m-auto manage_data-movie-three m-auto">
                        <label htmlFor="synopsis" className="form-label">
                          Synopsis
                        </label>
                        <textarea
                          className="form-control"
                          id="synopsis"
                          rows="3"
                          placeholder="Synopsis..."
                          value={form.synopsis}
                          name="synopsis"
                          onChange={handleChangeForm}
                        ></textarea>
                      </div>
                    </div>
                    <div className="row text-end">
                      <div className="col-lg button-manage">
                        <span className="reset-manage">
                          <button
                            type="submit"
                            className="btn btn-outline-primary reset-manage-button"
                          >
                            Update
                          </button>
                        </span>
                        <span className="submit-manage">
                          <button
                            type="submit"
                            className="btn btn-outline-primary submit-manage-button"
                          >
                            Submit
                          </button>
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="manage_viewall-filter">
        <div className="container">
          <div className="row manage_viewall-filter-wrap">
            <div className="col-6 my-auto">
              <h4>Data Movie</h4>
            </div>
            <div className="col-6">
              <div className="d-flex flex-row">
                <div className="col-lg text-end datamovie_sort">
                  <form>
                    <select onChange={handleSort} name="sort" id="sort" value={sort}>
                      <option selected>Sort</option>
                      {items.map((el) => (
                        <option key={el} value={el.value}>
                          {el.label}
                        </option>
                      ))}
                    </select>
                  </form>
                </div>
                <div className="col-lg text-end datamovie_search">
                  <div className="form-outline">
                    <input
                      type="search"
                      id="form1"
                      className="form-control manage_viewall_input"
                      placeholder="Search Movie Name ..."
                      aria-label="Search"
                      name="search"
                      onChange={(event) => handleSearch(event.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="manage_viewall">
        <div className="container">
          <div className="card bg-white manage_viewall-wrap">
            <div className="row manage_viewall_overflow-movie">
              {data[0] ? (
                data.map((elemen, index) => (
                  <div key={index} className="col d-lg-3 d-sm-6 d-md-3 manage_viewall_border-card ">
                    <div className="card manage_viewall-card">
                      <img
                        src={process.env.REACT_APP_CLOUDINARY_URL + elemen.image}
                        className="card-img-top manage_viewall-img m-auto"
                        alt="..."
                      />
                      <div className="card-body row text-center align-items-end manage_viewall-detail py-1">
                        <div className="align-self-end py-1">
                          <h5
                            className="card-title pt-2 fs-5 fw-bolder text-truncate"
                            style={{ color: "rgba(20, 20, 43, 1)" }}
                          >
                            {elemen.name}
                          </h5>
                        </div>
                        <div className="align-self-start pb-2">
                          <p
                            className="card-text text-truncate"
                            style={{ color: "#a0a3bd", fontSize: "15px" }}
                          >
                            {elemen.category}
                          </p>
                        </div>
                        <div className="align-items-end pb-2">
                          <button
                            className="btn btn-outline-primary"
                            style={{
                              width: "100%",
                              border: "2px solid rgba(95, 46, 234, 1)",
                              color: "rgba(95, 46, 234, 1)"
                            }}
                            onClick={() => handleClickUpdate(elemen)}
                          >
                            Update
                          </button>
                          <div className="align-items-end pt-2 pb-2">
                            <button
                              className="btn btn-outline-danger"
                              style={{
                                width: "100%",
                                border: "2px solid red",
                                color: "red"
                              }}
                              onClick={() => handleDeleteMovie(elemen.id)}
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
                <h4 className="no_data">
                  <b>THERE IS NO MOVIE</b>
                </h4>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* manage_viewall pagination */}
      <Pagination
        previousLabel={"<<"}
        nextLabel={">>"}
        breakLabel={"..."}
        pageCount={pageInfo.totalPage}
        onPageChange={handlePagination}
        marginPagesDisplayed={3}
        pageRangeDisplayed={4}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
      {/* end of manage_viewall pagination */}
      <Footer />
    </>
  );
}

export default ManageMovie;

import React, { useState } from "react";
import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar/navbar";
import "./managemovie.css";
import DefaultImage from "../../assets/img1/default.png";
import SpidermanImage from "../../assets/img1/spiderman.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postMovie, updateMovie, getAllMovie } from "../../stores/action/movie";

function ManageMovie() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
  const [idMovie, setIdMovie] = useState("");
  const [image, setImage] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);

  const handleChangeForm = (event) => {
    const { name, value, files } = event.target;
    if (name === "image") {
      setForm({ ...form, [name]: files[0] });
      setImage(URL.createObjectURL(files[0]));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("form yukss", form);
    const body = {
      name: form.name,
      category: form.category,
      director: form.director,
      casts: form.casts,
      releaseDate: form.releaseDate,
      duration: form.duration_hours + "h" + form.duration_minutes + "m",
      synopsis: form.synopsis,
      image: form.image
    };
    const formData = new FormData();
    for (const data in body) {
      formData.append(data, body[data]);
    }
    // console.log(postMovie(formData));
    dispatch(postMovie(formData));
    // setImage(null);
  };

  // NEW UPDATE
  const allMovie = useSelector((state) => state.getAllMovie.data);
  console.log("movie", allMovie);

  const setUpdate = (data) => {
    const { id, name, category, synopsis, image } = data;
    setForm({
      ...form,
      name,
      category,
      synopsis,
      image
    });

    setIdMovie(id);
    setIsUpdate(true); //update data lama
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(form);
    console.log(idMovie);
    const formData = new FormData();
    for (const data in form) {
      formData.append(data.form[data]);
    }
    // formData.append("name", form.name)
    // axios.post("...", formData);

    dispatch(updateMovie(idMovie, formData));
    getAllMovie(); //supaya datanya lgsg terupdate di getdatamovie (home)

    setIsUpdate(false);
    setImage(null);
  };

  // END OF NEW UPDATE

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
                  <form onSubmit={isUpdate ? handleUpdate : handleSubmit}>
                    <div className="row">
                      <div className="col-lg-4 manage_image-card m-auto">
                        <div className="card" style={{ width: "fit-content" }}>
                          <div className="card-body m-auto manage_image">
                            <input
                              type="file"
                              name="image"
                              onChange={(event) => handleChangeForm(event)}
                            />
                            {image && (
                              <img
                                src={image}
                                alt="Image Movie Preview"
                                className="manage_image-movie"
                              />
                            )}
                            {/* <img className="manage_image-movie" src={SpidermanImage} alt="" /> */}
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
                                Duration Hour
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="duration_hours"
                                placeholder="hour..."
                                value={form.duration}
                                name="duration_hours"
                                onChange={handleChangeForm}
                              />
                            </div>
                            <div className="col-6">
                              <label htmlFor="duration-minute" className="form-label">
                                Duration Minute
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="duration_minutes"
                                placeholder="minute..."
                                value={form.duration}
                                name="duration_minutes"
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
                    <select name="sort" id="sort" value="Sort">
                      <option value="">Sort</option>
                      <option value="ASC">Ascending</option>
                      <option value="DESC">Descending</option>
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
              {allMovie.map((item) => (
                <div key={item.id} className="col d-lg-3 d-sm-6 d-md-3 manage_viewall_border-card ">
                  <div className="card manage_viewall-card">
                    <img
                      src={process.env.REACT_APP_CLOUDINARY_URL + item.image}
                      className="card-img-top manage_viewall-img m-auto"
                      alt="..."
                    />
                    <div className="card-body row text-center align-items-end manage_viewall-detail py-1">
                      <div className="align-self-end py-1">
                        <h5
                          className="card-title pt-0 fs-5 fw-bolder"
                          style={{ color: "rgba(20, 20, 43, 1)" }}
                        >
                          {item.name}
                        </h5>
                      </div>
                      <div className="align-self-start pb-2">
                        <p className="card-text" style={{ color: "#a0a3bd", fontSize: "15px" }}>
                          {item.category}
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
                          onClick={setUpdate}
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
                          >
                            Reset
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* manage_viewall pagination */}
      <section id="pagination">
        <div className="container">
          <div className="row">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className="page-item px-1">
                  <button className="page-link btn-outline-primary">1</button>
                </li>
                <li className="page-item px-1">
                  <button className="page-link btn-outline-primary">2</button>
                </li>
                <li className="page-item px-1">
                  <button className="page-link btn-outline-primary">3</button>
                </li>
                <li className="page-item px-1">
                  <button className="page-link btn-outline-primary">4</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      {/* end of manage_viewall pagination */}
      <Footer />
    </>
  );
}

export default ManageMovie;

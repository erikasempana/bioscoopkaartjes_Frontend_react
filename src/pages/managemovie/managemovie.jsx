import React from "react";
import Footer from "../../components/Footer/footer";
import NavbarAdmin from "../../components/Navbar/navbarAdmin";
import "./managemovie.css";
import SpidermanImage from "../../assets/img1/spiderman.png";

function ManageMovie() {
  return (
    <>
      <NavbarAdmin />

      <section id="managemovie">
        <div className="container">
          <div className="row">
            <h4>
              <b>Form Movie</b>
            </h4>
            <div className="col">
              <div className="card p-4">
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col-lg-4 manage_image-card m-auto">
                        <div className="card" style={{ width: "fit-content" }}>
                          <div className="card-body m-auto manage_image">
                            <img className="manage_image-movie" src={SpidermanImage} alt="" />
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
                          />
                        </div>
                        <div className="mb-3">
                          <div className="row">
                            <div className="col-6">
                              <label htmlFor="duration-hour" className="form-label">
                                Duration Hour
                              </label>
                              <input
                                type="time-hours"
                                className="form-control"
                                id="duration-hour"
                                placeholder="hour..."
                              />
                            </div>
                            <div className="col-6">
                              <label htmlFor="duration-minute" className="form-label">
                                Duration Minute
                              </label>
                              <input
                                type="time-minutes"
                                className="form-control"
                                id="duration-minute"
                                placeholder="minute..."
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
              <div className="col d-lg-3 d-sm-6 d-md-3 manage_viewall_border-card ">
                <div className="card manage_viewall-card">
                  <img
                    src={SpidermanImage}
                    className="card-img-top manage_viewall-img m-auto"
                    alt="..."
                  />
                  <div className="card-body row text-center align-items-end manage_viewall-detail py-1">
                    <div className="align-self-end py-1">
                      <h5
                        className="card-title pt-0 fs-5 fw-bolder"
                        style={{ color: "rgba(20, 20, 43, 1)" }}
                      >
                        Lion King
                      </h5>
                    </div>
                    <div className="align-self-start pb-2">
                      <p className="card-text" style={{ color: "#a0a3bd", fontSize: "15px" }}>
                        Acion, Adventure, Sci-FI
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
              <div className="col d-lg-3 d-sm-6 d-md-3 manage_viewall_border-card">
                <div className="card manage_viewall-card">
                  <img
                    src={SpidermanImage}
                    className="card-img-top manage_viewall-img m-auto"
                    alt="..."
                  />
                  <div className="card-body row text-center align-items-end manage_viewall-detail py-1">
                    <div className="align-self-end py-1">
                      <h5
                        className="card-title pt-0 fs-5 fw-bolder"
                        style={{ color: "rgba(20, 20, 43, 1)" }}
                      >
                        Lion King
                      </h5>
                    </div>
                    <div className="align-self-start pb-2">
                      <p className="card-text" style={{ color: "#a0a3bd", fontSize: "15px" }}>
                        Acion, Adventure, Sci-FI
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
              <div className="col d-lg-3 d-sm-6 d-md-3 manage_viewall_border-card">
                <div className="card manage_viewall-card">
                  <img
                    src={SpidermanImage}
                    className="card-img-top manage_viewall-img pt-4 m-auto"
                    alt="..."
                  />
                  <div className="card-body row text-center align-items-end manage_viewall-detail py-1">
                    <div className="align-self-end py-1">
                      <h5
                        className="card-title pt-0 fs-5 fw-bolder"
                        style={{ color: "rgba(20, 20, 43, 1)" }}
                      >
                        Lion King
                      </h5>
                    </div>
                    <div className="align-self-start pb-2">
                      <p className="card-text" style={{ color: "#a0a3bd", fontSize: "15px" }}>
                        Acion, Adventure, Sci-FI
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
              <div className="col d-lg-3 d-sm-6 d-md-3 manage_viewall_border-card">
                <div className="card manage_viewall-card">
                  <img
                    src={SpidermanImage}
                    className="card-img-top manage_viewall-img pt-4 m-auto"
                    alt="..."
                  />
                  <div className="card-body row text-center align-items-end manage_viewall-detail py-1">
                    <div className="align-self-end py-1">
                      <h5
                        className="card-title pt-0 fs-5 fw-bolder"
                        style={{ color: "rgba(20, 20, 43, 1)" }}
                      >
                        Lion King
                      </h5>
                    </div>
                    <div className="align-self-start pb-2">
                      <p className="card-text" style={{ color: "#a0a3bd", fontSize: "15px" }}>
                        Acion, Adventure, Sci-FI
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
              <div className="col d-lg-3 d-sm-6 d-md-3 manage_viewall_border-card">
                <div className="card manage_viewall-card">
                  <img
                    src={SpidermanImage}
                    className="card-img-top manage_viewall-img pt-4 m-auto"
                    alt="..."
                  />
                  <div className="card-body row text-center align-items-end manage_viewall-detail py-1">
                    <div className="align-self-end py-1">
                      <h5
                        className="card-title pt-0 fs-5 fw-bolder"
                        style={{ color: "rgba(20, 20, 43, 1)" }}
                      >
                        Lion King
                      </h5>
                    </div>
                    <div className="align-self-start pb-2">
                      <p className="card-text" style={{ color: "#a0a3bd", fontSize: "15px" }}>
                        Acion, Adventure, Sci-FI
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
              <div className="col d-lg-3 d-sm-6 d-md-3 manage_viewall_border-card">
                <div className="card manage_viewall-card">
                  <img
                    src={SpidermanImage}
                    className="card-img-top manage_viewall-img pt-4 m-auto"
                    alt="..."
                  />
                  <div className="card-body row text-center align-items-end manage_viewall-detail py-1">
                    <div className="align-self-end py-1">
                      <h5
                        className="card-title pt-0 fs-5 fw-bolder"
                        style={{ color: "rgba(20, 20, 43, 1)" }}
                      >
                        Lion King
                      </h5>
                    </div>
                    <div className="align-self-start pb-2">
                      <p className="card-text" style={{ color: "#a0a3bd", fontSize: "15px" }}>
                        Acion, Adventure, Sci-FI
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
              <div className="col d-lg-3 d-sm-6 d-md-3 manage_viewall_border-card">
                <div className="card manage_viewall-card">
                  <img
                    src={SpidermanImage}
                    className="card-img-top manage_viewall-img pt-4 m-auto"
                    alt="..."
                  />
                  <div className="card-body row text-center align-items-end manage_viewall-detail py-1">
                    <div className="align-self-end py-1">
                      <h5
                        className="card-title pt-0 fs-5 fw-bolder"
                        style={{ color: "rgba(20, 20, 43, 1)" }}
                      >
                        Lion King
                      </h5>
                    </div>
                    <div className="align-self-start pb-2">
                      <p className="card-text" style={{ color: "#a0a3bd", fontSize: "15px" }}>
                        Acion, Adventure, Sci-FI
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
              <div className="col d-lg-3 d-sm-6 d-md-3 manage_viewall_border-card">
                <div className="card manage_viewall-card">
                  <img
                    src={SpidermanImage}
                    className="card-img-top manage_viewall-img pt-4 m-auto"
                    alt="..."
                  />
                  <div className="card-body row text-center align-items-end manage_viewall-detail py-1">
                    <div className="align-self-end py-1">
                      <h5
                        className="card-title pt-0 fs-5 fw-bolder"
                        style={{ color: "rgba(20, 20, 43, 1)" }}
                      >
                        Lion King
                      </h5>
                    </div>
                    <div className="align-self-start pb-2">
                      <p className="card-text" style={{ color: "#a0a3bd", fontSize: "15px" }}>
                        Acion, Adventure, Sci-FI
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

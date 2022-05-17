import React from "react";
import "./manageschedule.css";
import SpidermanImage from "../../assets/img1/spiderman.png";
import Ebuid from "../../assets/img1/ebuid.png";
import Hiflix from "../../assets/img1/hiflix.png";
import Cineone from "../../assets/img1/cineone.png";
import Pagination from "../../components/pagination/pagination";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";

function ManageSchedule() {
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
                              src={SpidermanImage}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 manageschedule_data-movie-one m-auto">
                        <div className="mb-3">
                          <label htmlFor="movie-name" className="form-label">
                            Movie Name
                          </label>
                          <select className="form-select" aria-label="Default select example">
                            <option selected>Select Movie</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
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
                            placeholder="Price..."
                          />
                        </div>

                        {}
                        <div className="mb-3">
                          <label htmlFor="releasedate" className="form-label">
                            Premiere
                          </label>
                          <div className="premiere_wrap">
                            <div className="">
                              <button className="btn btn-outline-primary premiere_button">
                                <img src={Ebuid} alt="premiere" className="premiere_img" />
                              </button>
                            </div>
                            <div className="">
                              <button className="btn btn-outline-primary premiere_button">
                                <img src={Hiflix} alt="premiere" className="premiere_img" />
                              </button>
                            </div>
                            <div className="">
                              <button className="btn btn-outline-primary premiere_button">
                                <img src={Cineone} alt="premiere" className="premiere_img" />
                              </button>
                            </div>
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
                            <option value="1">One</option>
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
                          <div className="row">
                            <div className="col">
                              <label htmlFor="duration-hour" className="form-label">
                                Time
                              </label>
                            </div>
                            <div className="row manage_time">
                              <div className="col-3">
                                <button className="time-plus btn btn-outline-primary">+</button>
                              </div>
                              <div className="col-3">08:30 am</div>
                              <div className="col-3">08:30 am</div>
                              <div className="col-3">08:30 am</div>
                              <div className="col-3">08:30 am</div>
                              <div className="col-3">08:30 am</div>
                              <div className="col-3">08:30 am</div>
                              <div className="col-3">08:30 am</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row text-end button-manageschedule-wrap">
                      <div className="col-lg button-manageschedule">
                        <div className=" col-lg-6 reset-manageschedule">
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
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col-2">
              <select className="form-select" aria-label="Default select example">
                <option selected>Location</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col-2">
              <select className="form-select" aria-label="Default select example">
                <option selected>Movie</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section id="manageschedule-movie">
        <div className="container manageschedule_wrap-card p-4">
          <div className="row">
            <div className="col-lg-4 p-2">
              <div className="card p-2 manageschedule_card ">
                <div className="card-body">
                  <div className="row">
                    <div className="col-6 m-auto text-center">
                      <img src={Hiflix} alt="premiere" />
                    </div>
                    <div className="col-6">
                      <div className="row">
                        <h4>
                          <b>hiflix Cinema</b>
                        </h4>
                      </div>
                      <div className="row">
                        <p>Colonel Street No. 2. East Purwokerto</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row py-3">
                    <div className="col-3 py-2">08:30am</div>
                    <div className="col-3 py-2">08:30am</div>
                    <div className="col-3 py-2">08:30am</div>
                    <div className="col-3 py-2">08:30am</div>
                    <div className="col-3 py-2">08:30am</div>
                    <div className="col-3 py-2">08:30am</div>
                  </div>
                  <div className="row pt-2 pb-4">
                    <div className="col-6 text-start">
                      <h5>Price</h5>
                    </div>
                    <div className="col-6 text-end">
                      <h5>
                        <b>$10.00/seat</b>
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
            <div className="col-lg-4 p-2">
              <div className="card p-2 manageschedule_card ">
                <div className="card-body">
                  <div className="row">
                    <div className="col-6 m-auto text-center">
                      <img src={Hiflix} alt="premiere" />
                    </div>
                    <div className="col-6">
                      <div className="row">
                        <h4>
                          <b>hiflix Cinema</b>
                        </h4>
                      </div>
                      <div className="row">
                        <p>Colonel Street No. 2. East Purwokerto</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row py-3">
                    <div className="col-3 py-2">08:30am</div>
                    <div className="col-3 py-2">08:30am</div>
                    <div className="col-3 py-2">08:30am</div>
                    <div className="col-3 py-2">08:30am</div>
                    <div className="col-3 py-2">08:30am</div>
                    <div className="col-3 py-2">08:30am</div>
                  </div>
                  <div className="row pt-2 pb-4">
                    <div className="col-6 text-start">
                      <h5>Price</h5>
                    </div>
                    <div className="col-6 text-end">
                      <h5>
                        <b>$10.00/seat</b>
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
            <div className="col-lg-4 p-2">
              <div className="card p-2 manageschedule_card ">
                <div className="card-body">
                  <div className="row">
                    <div className="col-6 m-auto text-center">
                      <img src={Hiflix} alt="premiere" />
                    </div>
                    <div className="col-6">
                      <div className="row">
                        <h4>
                          <b>hiflix Cinema</b>
                        </h4>
                      </div>
                      <div className="row">
                        <p>Colonel Street No. 2. East Purwokerto</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row py-3">
                    <div className="col-3 py-2">08:30am</div>
                    <div className="col-3 py-2">08:30am</div>
                    <div className="col-3 py-2">08:30am</div>
                    <div className="col-3 py-2">08:30am</div>
                    <div className="col-3 py-2">08:30am</div>
                    <div className="col-3 py-2">08:30am</div>
                  </div>
                  <div className="row pt-2 pb-4">
                    <div className="col-6 text-start">
                      <h5>Price</h5>
                    </div>
                    <div className="col-6 text-end">
                      <h5>
                        <b>$10.00/seat</b>
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
            <div className="col-lg-4 p-2">
              <div className="card p-2 manageschedule_card ">
                <div className="card-body">
                  <div className="row">
                    <div className="col-6 m-auto text-center">
                      <img src={Hiflix} alt="premiere" />
                    </div>
                    <div className="col-6">
                      <div className="row">
                        <h4>
                          <b>hiflix Cinema</b>
                        </h4>
                      </div>
                      <div className="row">
                        <p>Colonel Street No. 2. East Purwokerto</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row py-3">
                    <div className="col-3 py-2">08:30am</div>
                    <div className="col-3 py-2">08:30am</div>
                    <div className="col-3 py-2">08:30am</div>
                    <div className="col-3 py-2">08:30am</div>
                    <div className="col-3 py-2">08:30am</div>
                    <div className="col-3 py-2">08:30am</div>
                  </div>
                  <div className="row pt-2 pb-4">
                    <div className="col-6 text-start">
                      <h5>Price</h5>
                    </div>
                    <div className="col-6 text-end">
                      <h5>
                        <b>$10.00/seat</b>
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
            <div className="col-lg-4 p-2">
              <div className="card p-2 manageschedule_card ">
                <div className="card-body">
                  <div className="row">
                    <div className="col-6 m-auto text-center">
                      <img src={Hiflix} alt="premiere" />
                    </div>
                    <div className="col-6">
                      <div className="row">
                        <h4>
                          <b>hiflix Cinema</b>
                        </h4>
                      </div>
                      <div className="row">
                        <p>Colonel Street No. 2. East Purwokerto</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row py-3">
                    <div className="col-3 py-2">08:30am</div>
                    <div className="col-3 py-2">08:30am</div>
                    <div className="col-3 py-2">08:30am</div>
                    <div className="col-3 py-2">08:30am</div>
                    <div className="col-3 py-2">08:30am</div>
                    <div className="col-3 py-2">08:30am</div>
                  </div>
                  <div className="row pt-2 pb-4">
                    <div className="col-6 text-start">
                      <h5>Price</h5>
                    </div>
                    <div className="col-6 text-end">
                      <h5>
                        <b>$10.00/seat</b>
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
            <div className="col-lg-4 p-2">
              <div className="card p-2 manageschedule_card ">
                <div className="card-body">
                  <div className="row">
                    <div className="col-6 m-auto text-center">
                      <img src={Hiflix} alt="premiere" />
                    </div>
                    <div className="col-6">
                      <div className="row">
                        <h4>
                          <b>hiflix Cinema</b>
                        </h4>
                      </div>
                      <div className="row">
                        <p>Colonel Street No. 2. East Purwokerto</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row py-3">
                    <div className="col-3 py-2">08:30am</div>
                    <div className="col-3 py-2">08:30am</div>
                    <div className="col-3 py-2">08:30am</div>
                    <div className="col-3 py-2">08:30am</div>
                    <div className="col-3 py-2">08:30am</div>
                    <div className="col-3 py-2">08:30am</div>
                  </div>
                  <div className="row pt-2 pb-4">
                    <div className="col-6 text-start">
                      <h5>Price</h5>
                    </div>
                    <div className="col-6 text-end">
                      <h5>
                        <b>$10.00/seat</b>
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
          </div>
        </div>
      </section>
      <Pagination />
      <Footer />
    </>
  );
}

export default ManageSchedule;

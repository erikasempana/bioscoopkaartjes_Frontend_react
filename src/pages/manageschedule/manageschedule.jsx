import React from "react";
import SpidermanImage from "../../assets/img1/spiderman.png";

function ManageSchedule() {
  return (
    <>
      <section id="manageschedule">
        <div className="container">
          <div className="row">
            <h4>
              <b>Form Schedule</b>
            </h4>
            <div className="col">
              <div className="card p-4">
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col-lg-4 manageschedule_image-card m-auto">
                        <div className="card" style={{ width: "fit-content" }}>
                          <div className="card-body m-auto manageschedule_image">
                            <input />
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
                          <input
                            type="text"
                            className="form-control"
                            id="movie-name"
                            placeholder="Movie name..."
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="director" className="form-label">
                            Price
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
                            Premiere
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            id="releasedate"
                            placeholder="dd/mm/yyyy..."
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 manageschedule_data-movie-two m-auto">
                        <div className="mb-3">
                          <label htmlFor="category" className="form-label">
                            Location
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
                                type="text"
                                className="form-control"
                                id="duration_hours"
                                placeholder="hour..."
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
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row text-start">
                      <div className="mb-3 pt-3 m-auto manageschedule_data-movie-three m-auto">
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
                      <div className="col-lg button-manageschedule">
                        <span className="reset-manageschedule">
                          <button
                            type="submit"
                            className="btn btn-outline-primary reset-manageschedule-button"
                          >
                            Update
                          </button>
                        </span>
                        <span className="submit-manageschedule">
                          <button
                            type="submit"
                            className="btn btn-outline-primary submit-manageschedule-button"
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
    </>
  );
}

export default ManageSchedule;

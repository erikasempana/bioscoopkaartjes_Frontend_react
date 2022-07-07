import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./order.css";
import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar/navbar";
import Ebuid from "../../assets/img/ebuid.png";
import Cineone from "../../assets/img/cineone21.png";
import Hiflix from "../../assets/img/hiflix.png";
import Seat from "../../components/Seat/index";
import { useSelector, useDispatch } from "react-redux";
import { dataOrder, getScheduleById } from "../../stores/action/schedule";
import dayjs from "dayjs";

function Order() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const dispatch = useDispatch();
  const listSeat = ["A", "B", "C", "D", "E", "F", "G"];
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [reservedSeat, setReservedSeat] = useState(["A1", "C2", "B11"]);
  const detailOrder = useSelector((state) => state.dataOrder.dataOrder);
  const movieById = useSelector((state) => state.getMovieByIdMovie.data);
  const userId = useSelector((state) => state.user.data.id);

  const handlePremiereName = async () => {
    try {
      const id = detailOrder.scheduleId;
      await dispatch(getScheduleById(id));
    } catch (error) {
      console.log(error);
    }
  };

  //   PROSES GET SEAT
  const handleSelectSeat = (seat) => {
    console.log(seat);
    if (selectedSeat.includes(seat)) {
      const deleteSeat = selectedSeat.filter((el) => {
        return el !== seat;
      });
      setSelectedSeat(deleteSeat);
    } else {
      setSelectedSeat([...selectedSeat, seat]);
      setReservedSeat([...reservedSeat, selectedSeat]);
    }
  };

  const handleCheckout = () => {
    try {
      // console.log(state);
      console.log("selectedSeat", selectedSeat);
      const body = {
        ...detailOrder,
        selectedSeat,
        totalPayment: selectedSeat.length * detailOrder.price,
        userId
      };
      console.log(body);
      dispatch(dataOrder(body));

      navigate("/payment");
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleChangeMovie = () => {
    navigate("/home");
  };

  function formatRupiah(money) {
    return new Intl.NumberFormat(
      "id-ID",
      { style: "currency", currency: "IDR", minimumFractionDigits: 0 } // diletakkan dalam object
    ).format(money);
  }

  return (
    <>
      <div className="order_container-satu">
        {/* NAVBAR */}
        <Navbar />

        {/* NEW MAIN */}
        <main id="order">
          <section id="order">
            <div className="container">
              <div className="row m-auto order-wrapper">
                <div className="col-lg-8">
                  <div className="wrap-card order_movie-wrap">
                    <h4>
                      <b>Movie Selected</b>
                    </h4>

                    <div className="card order_card-movie">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-8">
                            <h5 className="card-title m-0">
                              <b>{movieById.name}</b>
                            </h5>
                          </div>
                          <div className="col-4 text-end">
                            <button className="btn btn-outline-primary" onClick={handleChangeMovie}>
                              Change movie
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="wrap-card pt-5 order_seat-wrap">
                    <h4>
                      <b>Choose Your Seat</b>
                    </h4>
                    <div className="wrap">
                      <div className="card text-center order_card-seat">
                        <div className="card-body">
                          <p>Screen</p>
                          <div className="screen-line"></div>

                          <br />
                          <div className="row text-center">
                            {listSeat.map((item) => (
                              <div key={item}>
                                <Seat
                                  rowSeat={item}
                                  selectedSeat={handleSelectSeat}
                                  reserved={reservedSeat}
                                  selected={selectedSeat}
                                />
                              </div>
                            ))}
                          </div>

                          <div className="row text-start">
                            <div className="col">
                              <div className="order_seating-key">
                                <h6>
                                  <b>Seating Key</b>
                                </h6>
                                <div className="row-seating-key m-auto md-8 m-5">
                                  <span className="order_key-available me-3">
                                    <span className="square-available d-lg-h6">nn</span>
                                    <span style={{ fontSize: "14px" }}> available </span>
                                  </span>
                                  <span className="order_key-selected me-3">
                                    <span className="square-selected  ">nn</span>
                                    <span style={{ fontSize: "14px" }}> selected </span>
                                  </span>
                                  <span className="order_key-sold">
                                    <span className="square-sold">nn</span>
                                    <span style={{ fontSize: "14px" }}> sold </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 order_info">
                  <h4>
                    <b>Order Info</b>
                  </h4>
                  <div className="wrap">
                    <div className="card order_card-info" style={{ width: "22rem" }}>
                      <div className="card-body order_card-info-body">
                        <img
                          className="mx-auto d-block premiere-img "
                          src={
                            detailOrder.premiere === "Hiflix"
                              ? Hiflix
                              : detailOrder.premiere === "cineOne21"
                              ? Cineone
                              : detailOrder.premiere === "Ebu.id"
                              ? Ebuid
                              : ""
                          }
                          alt=""
                        />
                        <h4 className="card-title text-center fw-bolder premiere-name">
                          {detailOrder.premiere} Cinema
                        </h4>
                        <div className="row">
                          <div className="col-6">
                            <p className="fs-6">Movie Selected</p>
                          </div>
                          <div className="col-6 text-end">
                            <p className="fs-6">
                              <b>{movieById.name}</b>
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-6">
                            <p className="fs-6">
                              {dayjs(detailOrder.dateBooking).format("dddd, DD MMMM YYYY")}
                            </p>
                          </div>
                          <div className="col-6 text-end">
                            <p className="fs-6">
                              <b>{dayjs(detailOrder.timeBooking, "HH:mm").format("hh:mm a")}</b>
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-6">
                            <p className="fs-6">One ticket Price</p>
                          </div>
                          <div className="col-6 text-end">
                            <p className="fs-6">
                              <b>{formatRupiah(detailOrder.price)}</b>
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-6">
                            <p className="fs-6">Seat Choosed</p>
                          </div>
                          <div className="col-6 text-end">
                            <p className="fs-6">
                              <b>{selectedSeat.toString()}</b>
                            </p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-6">
                            <h5>
                              <b>Total Payment</b>
                            </h5>
                          </div>
                          <div className="col-6 text-end">
                            <h4>
                              <b>{formatRupiah(selectedSeat.length * detailOrder.price)}</b>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8">
                  <div className="wrap-button d-lg-flex pt-3">
                    <div className="col text-start ms-3">
                      <button
                        className="btn btn-outline-primary lower-button-change"
                        onClick={handleChangeMovie}
                      >
                        Change your movie
                      </button>
                    </div>
                    <div className="col text-end order_checkout-btn">
                      <button
                        className="btn btn-outline-primary lower-button-checkout"
                        onClick={handleCheckout}
                      >
                        Checkout now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        {/* END OF NEW MAIN */}

        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
}

export default Order;

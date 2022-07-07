import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import dayjs from "dayjs";
import { postBooking } from "../../stores/action/booking";
import { Link, useNavigate } from "react-router-dom";
import "./payment.css";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import Googlepay from "../../assets/img1/googlepay.png";
import Visa from "../../assets/img1/visa.png";
import Gopay from "../../assets/img1/GoPay.png";
import Paypal from "../../assets/img1/paypal.png";
import Dana from "../../assets/img1/DANA.png";
import BCA from "../../assets/img1/BCA.png";
import BRI from "../../assets/img1/BRI.png";
import OVO from "../../assets/img1/OVO.png";

function Payment() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const detailOrder = useSelector((state) => state.dataOrder.dataOrder);
  const dataSchedule = useSelector((state) => state.schedule.data[0]);
  const personalInfo = useSelector((state) => state.user.data);
  const movieOrder = useSelector((state) => state.getMovieByIdMovie.data);
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleGooglepay = () => {
    setPaymentMethod("googlepay");
  };

  const handleVisa = () => {
    setPaymentMethod("visa");
  };

  const handleGopay = () => {
    setPaymentMethod("gopay");
  };

  const handlePaypal = () => {
    setPaymentMethod("paypal");
  };

  const handleDana = () => {
    setPaymentMethod("dana");
  };

  const handleBca = () => {
    setPaymentMethod("bca");
  };

  const handleBri = () => {
    setPaymentMethod("bri");
  };

  const handleOvo = () => {
    setPaymentMethod("ovo");
  };

  const handlePayOrder = async () => {
    try {
      const body = {
        userId: detailOrder.userId,
        scheduleId: detailOrder.scheduleId,
        dateBooking: detailOrder.dateBooking,
        timeBooking: detailOrder.timeBooking,
        paymentMethod,
        totalPayment: detailOrder.totalPayment,
        seat: detailOrder.selectedSeat
      };
      // console.log("body", body);
      const resultBooking = await dispatch(postBooking(body));
      window.open(resultBooking.action.payload.data.data.redirectUrl);
    } catch (error) {
      console.log(error.response);
    }
  };

  function formatRupiah(money) {
    return new Intl.NumberFormat(
      "id-ID",
      { style: "currency", currency: "IDR", minimumFractionDigits: 0 } // diletakkan dalam object
    ).format(money);
  }

  return (
    <>
      <Navbar />

      <main id="main-payment">
        <section id="payment">
          <div className="container">
            <div className="row m-auto payment-wrapper">
              <div className="col-lg-8">
                <div className="warp-card payment_movie-wrap">
                  <h4>
                    <b>Movie Selected</b>
                  </h4>

                  <div className="card payment_card-movie p-4 mt-3">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-4">
                          <p>Date and time</p>
                        </div>
                        <div className="col-8 text-end">
                          <p>
                            <b>
                              {dayjs(detailOrder.dateBooking).format("dddd, DD MMMM YYYY")} at{" "}
                              {dayjs(detailOrder.timeBooking, "HH:mm").format("hh:mm a")}
                            </b>
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="row align-items-center">
                        <div className="col-4">
                          <p>Movie title</p>
                        </div>
                        <div className="col-8 text-end">
                          <p>
                            <b>{movieOrder.name}</b>
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="row align-items-center">
                        <div className="col-4">
                          <p>Cinema name</p>
                        </div>
                        <div className="col-8 text-end">
                          <p>
                            <b>{dataSchedule.premiere} Cinema</b>
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="row align-items-center">
                        <div className="col-4">
                          <p>Number of tickets</p>
                        </div>
                        <div className="col-8 text-end">
                          <p>
                            <b>{detailOrder.selectedSeat.length} pieces</b>
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="row align-items-center">
                        <div className="col-4">
                          <p>Total payment</p>
                        </div>
                        <div className="col-8 text-end">
                          <h5>
                            <b>{formatRupiah(detailOrder.totalPayment)}</b>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="wrap-card pt-5 payment_btn-wrap">
                  <h4>
                    <b>Choose a Payment Method</b>
                  </h4>
                  <div className="wrap">
                    <div className="card text-center payment_card-btn py-4 px-1 mt-3">
                      <div className="card-body">
                        <div className="row payment_btn-pay">
                          <div className="col-3 pay-btn pb-4">
                            <button
                              className="btn btn-outline-primary"
                              onClick={() => handleGooglepay()}
                            >
                              <img src={Googlepay} alt="" />
                            </button>
                          </div>
                          <div className="col-3 pay-btn pb-4">
                            <button
                              className="btn btn-outline-primary"
                              onClick={() => handleVisa()}
                            >
                              <img src={Visa} alt="" />
                            </button>
                          </div>
                          <div className="col-3 pay-btn pb-4">
                            <button
                              className="btn btn-outline-primary"
                              onClick={() => handleGopay()}
                            >
                              <img src={Gopay} alt="" />
                            </button>
                          </div>
                          <div className="col-3 pay-btn pb-4">
                            <button
                              className="btn btn-outline-primary"
                              onClick={() => handlePaypal()}
                            >
                              <img src={Paypal} alt="" />
                            </button>
                          </div>
                          <div className="col-3 pay-btn">
                            <button
                              className="btn btn-outline-primary"
                              onClick={() => handleDana()}
                            >
                              <img src={Dana} alt="" />
                            </button>
                          </div>
                          <div className="col-3 pay-btn">
                            <button className="btn btn-outline-primary" onClick={() => handleBca()}>
                              <img src={BCA} alt="" />
                            </button>
                          </div>
                          <div className="col-3 pay-btn">
                            <button className="btn btn-outline-primary" onClick={() => handleBri()}>
                              <img src={BRI} alt="" />
                            </button>
                          </div>
                          <div className="col-3 pay-btn">
                            <button className="btn btn-outline-primary" onClick={() => handleOvo()}>
                              <img src={OVO} alt="" />
                            </button>
                          </div>
                          <div className="line-or pt-4">
                            <p>or</p>
                          </div>
                          <div className="pay-cash">
                            <p>
                              <b>Pay via cash. </b>
                              <Link to="/home">
                                <b> See how it work</b>
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 personal_info">
                <h4>
                  <b>Personal Info</b>
                </h4>
                <div className="wrap">
                  <div className="card payment_card-info pt-4 mt-3" style={{ width: "22rem" }}>
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <form>
                            <div className="mb-3">
                              <label htmlFor="fullname" className="form-label">
                                Full Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="fullname"
                                aria-describedby="fullname"
                                placeholder={`${personalInfo.firstName} ${personalInfo.lastName}`}
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="email" className="form-label">
                                Email
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={personalInfo.email}
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="phonenumber" className="form-label">
                                Phone Number
                              </label>
                              <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">
                                  +62
                                </span>
                                <input
                                  type="tel"
                                  className="form-control"
                                  placeholder="phonenumber"
                                  aria-label="phonenumber"
                                  aria-describedby="basic-addon1"
                                  value={personalInfo.noTelp}
                                />
                              </div>
                            </div>
                          </form>
                          {/* <div className="alert alert-warning" role="alert">
                            <i className="fas fa-exclamation-triangle"></i>
                            Fill your data correctly.
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <div className="wrap-button d-lg-flex pt-3 px-2">
                  <div className="col text-start">
                    <button className="btn btn-outline-primary lower-button-change">
                      Previous step
                    </button>
                  </div>
                  <div className="col text-end payment_pay-btn">
                    <button
                      className="btn btn-outline-primary lower-button-checkout"
                      onClick={() => handlePayOrder()}
                    >
                      Pay your order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
export default Payment;

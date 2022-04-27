import React from "react";
import "./payment.css";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import Vector from "../../assets/img/Vector.png";
import Vector1 from "../../assets/img/Vector-1.png";
import Vector2 from "../../assets/img/Vector-2.png";
import Vector3 from "../../assets/img/Vector-3.png";
import Vector4 from "../../assets/img/Vector-4.png";
import Vector5 from "../../assets/img/Vector-5.png";
import Vector6 from "../../assets/img/Vector-6.png";
import Vector7 from "../../assets/img/vector-7.png";

function Payment() {
  return (
    <>
      <Navbar />
      <div className=" payment_container-two text-center container">
        <main className="row">
          <div className="col-md-8">
            <div className="payment_title-desc px-3 py-3">
              <p className="text-start fw-bold h5">Payment Info</p>
            </div>
            <section className="payment_info card-body col bg-white">
              <div className="payment_info-card card border-0">
                <div className="payment_detail-info ms-4 me-4">
                  <div className="payment_detail-date row">
                    <p className="text-start h6 col">Date and time</p>
                    <p className="text-end h6 col">
                      Tuesday, 07 July 2020 at 02:00{" "}
                    </p>
                  </div>
                  <div className="payment_detail-movie-title row">
                    <p className="text-start h6 col">Movie title</p>
                    <p className="text-end h6 col">Spider-Man: Homecoming</p>
                  </div>
                  <div className="payment_detail-premiere row">
                    <p className="text-start h6 col">Cinema name</p>
                    <p className="text-end h6 col">CineOne21 Cinema</p>
                  </div>
                  <div className="payment_detail-premiere row">
                    <p className="text-start h6 col">Cinema name</p>
                    <p className="text-end h6 col">CineOne21 Cinema</p>
                  </div>
                  <div className="payment_detail-number-tickets row">
                    <p className="text-start h6 col">Number of tickets</p>
                    <p className="text-end h6 col">3 pieces</p>
                  </div>
                  <hr className="border border-1 border-dark" />
                  <div className="payment_detail-number-tickets row">
                    <p className="text-start h6 col">Total payment</p>
                    <p className="text-end h6 fw-bold col">$ 30</p>
                  </div>
                </div>
              </div>
            </section>
            <div className="payment_title-desc px-3 py-3">
              <p className="text-start fw-bold h5">Choose a Payment Method</p>
            </div>
            <section className="payment_info card-body bg-white">
              <div className="payment_card-method card ">
                <button type="button" className="btn btn-outline-primary ">
                  <img src={Vector} alt="" />
                </button>
                <button type="button" className="btn btn-outline-primary ">
                  <img src={Vector1} alt="" />
                </button>
                <button type="button" className="btn btn-outline-primary ">
                  <img src={Vector4} alt="" />
                </button>
              </div>
              <div className="payment_card-method card ">
                <button type="button" className="btn btn-outline-primary ">
                  <img src={Vector5} alt="" />
                </button>
                <button type="button" className="btn btn-outline-primary ">
                  <img src={Vector6} alt="" />
                </button>
                <button type="button" className="btn btn-outline-primary ">
                  <img src={Vector7} alt="" />
                </button>
              </div>
              <div className="paymet_step">
                <br />
                <p>or</p>
                <p className="h6">Pay via cash. See how it work</p>
              </div>
            </section>
            <div className="order_button-nextstep row mx-auto gap-5 px-3 py-3 ">
              <button className="btn btn-light btn-outline-primary text-center col">
                Previous step
              </button>
              <button className="btn  btn-light btn-outline-primary text-center col">
                Pay your order
              </button>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="payment_title-desc py-4">
              <p className="text-start fw-bold h5">Order Info</p>
            </div>
            <section className="payment_order-info px-4 bg-white ">
              <div className="row gx-5 ">
                <form className="pb-4">
                  <div className="col">
                    <label className="row">Full Name</label>
                    <input
                      className="form-control row"
                      type="fullname"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="col">
                    <label className="row">Email</label>
                    <input
                      className="form-control row"
                      type="email"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="col">
                    <label className="row">Phone Number</label>
                    <div class="input-group">
                      <div class="input-group-text">+62</div>
                      <input
                        type="phone number"
                        className="form-control"
                        placeholder="your phone number"
                      />
                    </div>
                  </div>
                </form>
                <span class=" payment-personal-info-danger border-1 round-1 mx-a px-1 py-1">
                  Fill your data correctly.
                </span>
              </div>
            </section>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
export default Payment;

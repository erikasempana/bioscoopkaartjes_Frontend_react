import React from "react";
import "./order.css";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import Cineone21 from "../../assets/img/cineone21.png";

function Order() {
  return (
    <>
      {/* NAVBAR */}
      <div className="order_container">
        {/* <Navbar /> */}
        <div className="text-center container">
          <hr />
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="order_title-movie-selected">
                  <p className="text-start h6">Movie Selected</p>
                </div>
                <div className="order_movie-title px-4">
                  <div class="row gx-5">
                    <div class="col">
                      <p className="text-start h6">Spider-Man: Homecoming</p>
                    </div>
                    <div class="text-end col">
                      <button>Change movie</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">Screen</div>
                <div className="card-body">seat</div>
              </div>
              <button className="btn btn-primary" /*onClick={handleBooking}*/>
                Booking
              </button>
            </div>
            <div className="col-md-4">
              <div className="card">
                <p className="text-start h6">Order Info</p>
              </div>
              <div className="order_detail card">
                <img src={Cineone21} className="img-thumbnail" alt="" />
                <p className="h6">CineOne21 Cinema</p>
                <div className="order_more-detail">
                  <div className="row">
                    <div className="text-start ms-2 col">
                      <p>Movie selected</p>
                      <p>Tuesday, 07 July 2020</p>
                      <p>One ticket price</p>
                      <p>Seat choosed</p>
                    </div>
                    <div className="text-end me-2 col">
                      <p>Spider-Man: Homecoming</p>
                      <p>02:00</p>
                      <p>$10</p>
                      <p>C4, C5, C6</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default Order;

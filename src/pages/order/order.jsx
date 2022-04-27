import React, { useState } from "react";
import { useLocation /*useNavigate*/, useNavigate } from "react-router-dom";
import "./order.css";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import Cineone21 from "../../assets/img/cineone21.png";
import Seat from "../../components/Seat/index";

function Order() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const listSeat = ["A", "B", "C", "D", "E", "F", "G"];
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [reservedSeat /*setReservedSeat*/] = useState(["A1", "C2", "B11"]);

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
    }
  };

  const handleBooking = (event) => {
    try {
      console.log(state);
      console.log(selectedSeat);

      event.preventDefault();
      // const resultBooking = await axios.post("auth/register", form);
      // navigate("/login");
    
      navigate("/payment");
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <>
      <div className="order_container-satu">
        {/* NAVBAR */}
        <Navbar />

        {/* MAIN */}
        <div className="text-center order-container-dua pt-auto py-auto ">
          <main className="row">
            <section className="col-md-9">
              <div className="card">
                <div className="order_title-movie-selected">
                  <p className="text-start h6">Movie Selected</p>
                </div>
                <div className="order_movie-title px-4 py-2 ">
                  <div className="row gx-5">
                    <div className="col">
                      <p className="text-start mx-auto h6">
                        Spider-Man: Homecoming
                      </p>
                    </div>
                    <div className="text-end mx-auto col">
                      <button className="btn btn-light btn-outline-primary">
                        Change movie
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body border-2 border-top">
                  <p className="h6">Screen</p>
                  <hr className="border border-5 border-dark ms-4 me-4" />
                </div>
                <div className="container-float seat_card-body ms-2 me-2 gap-1">
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
                <div className="order_seating-key text-start ms-4">
                  <p className="h6">Seating Key</p>

                  <div className="row-seating-key md-8  mb-5">
                    <span className="order_key-available me-3">
                      <button className="btn rounded border-5 w-5 p-2 mx-2"></button>
                      <span>available</span>
                    </span>
                    <span className="order_key-selected me-3">
                      <button className="btn rounded border-5 w-5 p-2 mx-2"></button>
                      <span>selected</span>
                    </span>
                    <span className="order_key-sold me-3">
                      <button className="btn rounded border-5 w-5 p-2 mx-2"></button>
                      <span>sold</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="order_button-nextstep row mx-auto gap-5 pt-3 pb-3">
                <button className="btn btn-light btn-outline-primary text-center col">
                  Change Your Movie
                </button>
                <button
                  type="submit"
                  className="btn  btn-light btn-outline-primary text-center col"
                  onClick={handleBooking}
                >
                  Checkout Now
                </button>
              </div>
            </section>

            <section className="col-md-3">
              <div className="card order_info-card pt-2 py-2">
                <p className="text-start bg-transparent h6">Order Info</p>
              </div>
              <div className="order_detail card pt-2">
                <div className="order_img-premier md-4">
                  <img
                    src={Cineone21}
                    className="img-fluid img-thumbnail border-0"
                    width="70%"
                    alt=""
                  />
                </div>
                <p className="h5">CineOne21 Cinema</p>
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
                    <div className="order_total-payment">
                      <hr />
                      <div className="row">
                        <div className="col">
                          <p className="order_total text-start fw-bolder ms-2">
                            Total Payment
                          </p>
                        </div>
                        <div className="col text-end fw-bolder me-2">$30</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>

        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
}

export default Order;

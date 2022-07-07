import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStatusBooking } from "../../stores/action/booking";
import { useParams } from "react-router-dom";
import "./tickets.css";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar/navbar";

import brandTickits from "../../assets/img1/tickitz1.png";
import QrCode from "../../assets/img1/QRCode.png";

export default function Tickets() {
  const dispatch = useDispatch();
  const detailTickets = useSelector((state) => state.bookingById.data);
  // react-router-dom
  // [1] menangkap data page lain dari URL params => useSearchParams
  // const [searchParams] = useSearchParams();
  // console.log(Object.fromEntries([...searchParams]));

  // [2] menangkap data page lain dari useLocation
  // const { id } = useLocation;
  // const bookingId = state.id;

  // [3] menangkap data dengan menambahkan path=> :id di url App.js
  const params = useParams();
  // console.log(params.id);
  // --------------------

  const handleTicketStatus = async () => {
    try {
      console.log("UPDATE STATUS");
      const bookingId = params.id;
      await dispatch(updateStatusBooking(bookingId));
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
      <div className="container tickets_container">
        <div className="card tickets_card">
          <div className="card-body tickets_card-body">
            <p className="tickets_title">Proof of Payment</p>
            <div className="line-v">
              <div className="circleup"></div>
              <div className="dash"></div>
              <div className="circlebottom"></div>
            </div>
            <div className="card tickets-result_card">
              <div className="card-body tickets-result_card-body">
                <div className="row tickets-result_header">
                  <div className="col-6">
                    <img className="tickets-result_brand-image" src={brandTickits} alt="brand" />
                  </div>
                  <div className="col-3 ">
                    <p className="tickets-result_Admit">Admit One</p>
                  </div>
                  <div className="col-3 m-auto d-flex flex-row justify-content-center">
                    <img className="tickets-result_brand-image" src={brandTickits} alt="brand" />
                  </div>
                </div>
              </div>
            </div>

            <div className="card tickets-result-content_card">
              <div className="card-body tickets-result-content_card-body">
                <div className="row content_detail">
                  <div className="col-9">
                    <p className="content_title">Movie</p>
                    <p className="content_value">{detailTickets.name}</p>
                    <div className="row content_detail-top">
                      <div className="col-4">
                        <p className="content_title">Date</p>
                        <p className="content_value">
                          {dayjs(detailTickets.dateBooking).format("DD MMMM")}
                        </p>
                      </div>
                      <div className="col-4">
                        <p className="content_title">Time</p>
                        <p className="content_value">
                          {dayjs(detailTickets.timeBooking, "HH:mm:ss").format("hh:mm a")}
                        </p>
                      </div>
                      <div className="col-4">
                        <p className="content_title">Category</p>
                        <p className="content_value">{detailTickets.category}</p>
                      </div>
                    </div>
                    <div className="row content_detail-bottom">
                      <div className="col-4">
                        <p className="content_title">Count</p>
                        <p className="content_value">{detailTickets.seat.length} pieces</p>
                      </div>
                      <div className="col-4">
                        <p className="content_title">Seats</p>
                        <p className="content_value">{detailTickets.seat.join(", ")}</p>
                      </div>
                      <div className="col-4">
                        <p className="content_title">Price</p>
                        <p className="content_value-total">
                          {formatRupiah(detailTickets.totalPayment)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-3 d-flex flex-row justify-content-center align-items-center">
                    {detailTickets.statusUsed === "active" ? (
                      <img
                        className="content_barcode"
                        src={QrCode}
                        alt="barcode"
                        onClick={handleTicketStatus}
                      />
                    ) : (
                      <div className="content_barcode-used border bg-light d-flex px-4 text-center align-items-center">
                        Ticket Already Used
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

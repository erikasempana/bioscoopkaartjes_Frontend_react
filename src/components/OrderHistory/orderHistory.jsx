/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Pagination from "react-paginate";
import { getBookingById } from "../../stores/action/booking";
import "./orderHistory.css";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

import CineOne from "../../assets/img1/cineone.png";
import Hiflix from "../../assets/img1/hiflix.png";
import Ebuid from "../../assets/img1/ebuid.png";

export default function orderHistory(props) {
  const history = useSelector((state) => state.orderHistory.data);

  const [data, setData] = useState(history);
  const [perPage] = useState(3);
  const [page, setPage] = useState(0);
  const dataOpen = page * perPage;
  const totalPage = Math.ceil(data.length / perPage);

  const displayOrderHistory = data.slice(dataOpen, dataOpen + perPage).map((item) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [IdBooking, setIdBooking] = useState("");

    const handleHistorySelected = async (item) => {
      try {
        await dispatch(getBookingById(item.id));
        setIdBooking(item.id);
        navigate(`/tickets/${item.id}`);
      } catch (error) {
        console.log(error.response);
      }
    };

    return (
      <div key={item.id} className="card history_card">
        <div className="card-body history_card-body">
          <div className="row history_detail-wrapper">
            <div className="col-8 history_detail">
              <p className="history_date">
                {dayjs(item.dateBooking).format("dddd, D MMMM YYYY")} -{" "}
                {dayjs(item.timeBooking, "HH:mm:ss").format("hh:mm a")}
              </p>
              <p className="history_movie-title">{item.name}</p>
            </div>
            {item.premiere === "Hiflix" ? (
              <img className="col-4 history_premiere" src={Hiflix} alt="" />
            ) : item.premiere === "cineOne21" ? (
              <img className="col-4 history_premiere" src={CineOne} alt="" />
            ) : item.premiere === "Ebu.id" ? (
              <img className="col-4 history_premiere" src={Ebuid} alt="" />
            ) : null}
          </div>
          <hr />
          <div className="row">
            <div className="col-6 history_button">
              {item.statusUsed === "notActive" ? (
                <button className="button_tickets-status-used" disabled>
                  Ticket in active
                </button>
              ) : (
                <button className="button_tickets-status-active" disabled>
                  Ticket in active
                </button>
              )}
            </div>
            <div className="col-6 history_info-detail">
              <p className="info-detail" onClick={() => handleHistorySelected(item)}>
                See details
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const handlePageClick = ({ selected }) => {
    setPage(selected);
  };

  return (
    <>
      <div className="history_wrapper">
        {displayOrderHistory}
        <Pagination
          previousLabel={"<<"}
          nextLabel={">>"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={totalPage}
          onPageChange={handlePageClick}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    </>
  );
}

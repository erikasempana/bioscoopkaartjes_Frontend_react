import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import "./dasboard.css";

function Dasboard() {
  return (
    <>
      <Navbar />
      <div className="container dashboard_container">
        <div className="row">
          <div className="col-9 dashboard">
            <h4>
              <b>Dashboard</b>
            </h4>
            <div className="card dashboard_card">
              <div className="card-body dashboard_card-body">
                <p>DASHBOARD</p>
              </div>
            </div>
          </div>
          <div className="col-3 filtered">
            <h4>
              <b>Filtered</b>
            </h4>
            <div className="card filtered_card">
              <div className="card-body filtered_card-body">
                <div className="filter_select-movie">
                  <select name="" id="" className="filter_input-select">
                    <option selected>Select Movie</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div className="filter_select-premiere">
                  <select name="" id="" className="filter_input-select">
                    <option selected>Select Premiere</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div className="filter_select-location">
                  <select name="" id="" className="filter_input-select">
                    <option selected>Select Location</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div className="filter_button">
                  <button className="filter_button-style">Filter</button>
                </div>
                <div className="filter_button">
                  <button className="filter_button-style">Reset</button>
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

export default Dasboard;

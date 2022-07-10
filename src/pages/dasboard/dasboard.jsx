import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "../../utils/axios";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import "./dasboard.css";

function Dasboard() {
  const filterMovie = useSelector((state) => state.getAllMovie.data);
  const filterPremiere = ["cineOne21", "Ebu.id", "Hiflix"];
  const filterLocation = [
    { label: "Bandung", value: "Bandung" },
    { label: "Bogor", value: "Bogor" },
    { label: "DKI Jakarta", value: "DKI Jakarta" },
    { label: "Lampung", value: "Lampung" },
    { label: "Tangerang", value: "Tangerang" }
  ];
  const [sellingData, setSellingData] = useState({});
  const [movie, setMovie] = useState("");
  const [premiere, setPremiere] = useState("");
  const [Location, setLocation] = useState("");

  const dashboardData = async () => {
    try {
      const result = await axios.get(
        "booking/dashboard?scheduleId=35&movieId=34&location=Tangerang"
      );
      setSellingData(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(sellingData);
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mey", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "monthly income",
        data: [15000, 9000, 7000, 10000, 10000, 9000, 13000, 8000, 8000, 9000, 7000, 12000],
        backgroundColor: "white",
        borderColor: "rgba(95, 46, 234, 1)",
        pointBorderColors: "rgba(95, 46, 234, 1)"
      }
    ]
  };

  useEffect(() => {
    dashboardData();
  }, []);

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
                <Line data={data} />
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
                    {filterMovie.map((item) => (
                      <option key={item.id} value="item.id">
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="filter_select-premiere">
                  <select name="" id="" className="filter_input-select">
                    <option selected>Select Premiere</option>
                    {filterPremiere.map((item, index) => (
                      <option key={index} value="item">
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="filter_select-location">
                  <select name="" id="" className="filter_input-select">
                    <option selected>Select Location</option>
                    {filterLocation.map((item, index) => (
                      <option key={index} value={item.value}>
                        {item.label}
                      </option>
                    ))}
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

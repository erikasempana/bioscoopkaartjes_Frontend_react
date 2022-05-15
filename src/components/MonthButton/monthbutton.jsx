import React from "react";
import "./monthbutton.css";

function MonthButton() {
  const monthList = [
    { id: 1, month: "January" },
    { id: 2, month: "February" },
    { id: 3, month: "March" },
    { id: 4, month: "April" },
    { id: 5, month: "Mey" },
    { id: 6, month: "June" },
    { id: 7, month: "July" },
    { id: 8, month: "August" },
    { id: 9, month: "September" },
    { id: 10, month: "October" },
    { id: 11, month: "November" },
    { id: 12, month: "December" }
  ];

  const handleMonth = async (id) => {
    try {
      const resultUpComingMovie = await axios.get(`movie/?searchRelease=${id}`);
      console.log("upcomingmovie", resultUpComingMovie.data.data);
      setUpComingMovie(resultUpComingMovie.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <section id="monthbutton">
        <div className="container">
          <div className="row home_month-wrap overflow-auto mt-5">
            <div className="col home_month">
              <button type="button" className="btn btn-outline-primary btn-white">
                september
              </button>
              <button type="button" className="btn btn-outline-primary btn-white">
                Oktober
              </button>
              <button type="button" className="btn btn-outline-primary btn-white">
                November
              </button>
              <button type="button" className="btn btn-outline-primary btn-white">
                Desember
              </button>
              <button type="button" className="btn btn-outline-primary btn-white">
                January
              </button>
              <button type="button" className="btn btn-outline-primary btn-white">
                February
              </button>
              <button type="button" className="btn btn-outline-primary btn-white">
                March
              </button>
              <button type="button" className="btn btn-outline-primary btn-white">
                April
              </button>
              <button type="button" className="btn btn-outline-primary btn-white">
                Mey
              </button>
              <button type="button" className="btn btn-outline-primary btn-white">
                June
              </button>
              <button type="button" className="btn btn-outline-primary btn-white">
                July
              </button>
              <button type="button" className="btn btn-outline-primary btn-white">
                August
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MonthButton;

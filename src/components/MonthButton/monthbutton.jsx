import React from "react";
import "./monthbutton.css";

function MonthButton(props) {
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

  const handlePressMonth = (item) => {
    props.sortMonth(item.id);
  };

  return (
    <>
      <section id="monthbutton">
        <div className="container">
          <div className="row home_month-wrap overflow-auto mt-5">
            <div className="col home_month">
              {monthList.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="btn btn-outline-primary btn-white"
                  onClick={() => handlePressMonth(item)}
                >
                  {item.month}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MonthButton;

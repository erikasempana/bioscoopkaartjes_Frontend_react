import React from "react";
import { Link } from "react-router-dom";
import "./pagination.css";

function Pagination() {
  return (
    <>
      <section id="pagination">
        <div className="container text-center">
          <button className="btn btn-outline-primary p-auto mx-2">
            <Link to="#page1">1</Link>
          </button>
          <button className="btn btn-outline-primary p-auto mx-2">
            <Link to="#page2">2</Link>
          </button>
          <button className="btn btn-outline-primary p-auto mx-2">
            <Link to="#page3">3</Link>
          </button>
          <button className="btn btn-outline-primary p-auto mx-2">
            <Link to="#page4">4</Link>
          </button>
        </div>
      </section>
    </>
  );
}

export default Pagination;

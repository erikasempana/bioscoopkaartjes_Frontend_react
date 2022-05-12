import React, { useState, useEffect } from "react";
import "./viewall.css";
import Navbar from "../../components/Navbar/navbar";
import { Link } from "react-router-dom";
import Pagination from "react-paginate";
import Footer from "../../components/Footer/footer";
import Rectangle2 from "../../assets/img/Rectangle2.png";
import axios from "../../utils/axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovie } from "../../stores/action/viewAllMovie";

function ViewAll() {
  const dispatch = useDispatch();
  const allMovie = useSelector((state) => state.getAllMovie.data);

  const limit = 6;
  const [page, setPage] = useState(1);
  const [data, setData] = useState(allMovie);
  // console.log("allMovie", data);
  // const [pageInfo, setPageInfo] = useState({});
  useEffect(() => {
    getdataMovie();
  }, []);

  const getdataMovie = async () => {
    console.log("GET DATA MOVIE");
    try {
      // input
      // console.log(limit);
      // console.log(page);
      // kalau log nya sudah selesai dan data sudah dapat di lihat, hapus lognya

      // proses
      // const resultMovie = await axios.get(`movie?page=${page}&limit=${limit}`);
      const resultMovie = await dispatch(getAllMovie(page, limit));
      // console.log(resultMovie);
      // output
      setData(resultMovie); //resultMovie ini bisa di cek dengan me-log resultMovie terlebih dahulu
      // setPageInfo(resultMovie.data.pagination);
    } catch (error) {
      console.log(error.response);
      // gunakan alert atau toas untuk nampilin messegenya
    }
  };
  // log ini ambil diluar fungsi tempat datanya di set agar datanya bisa diambil
  // console.log(data); //ini dari setData(resultMovie)
  // console.log(pageInfo); //ini dari setPageInfo

  return (
    <div className="viewall_container">
      <Navbar />

      {/* END OF NAVBAR */}

      {/* MAIN */}
      <section id="viewall_filter">
        <div className="container">
          <div className="row viewall_filter-wrap">
            <div className="col-6 my-auto">
              <h4>List Movie</h4>
            </div>
            <div className="col-6">
              <div className="d-flex flex-row">
                <div className="col-md text-end">
                  <form action="/action_page.php">
                    <select name="sort" id="sort" value="Sort">
                      <option value="">Sort</option>
                      <option value="ASC">Ascending</option>
                      <option value="DESC">Descending</option>
                    </select>
                  </form>
                </div>
                <div className="col-md text-end">
                  <div className="form-outline">
                    <input
                      type="search"
                      id="form1"
                      className="form-control viewall_input2"
                      placeholder="Search Movie Name ..."
                      aria-label="Search"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AKHIR MAIN */}
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
        {/* Akhir Month */}
      </section>

      <section id="viewall">
        <div className="container">
          <div className="row viewall_overflow-movie">
            {allMovie.map((item) => (
              <div key={item.id} className="col d-md-1 m-2 px-4 py-5 viewall_border-card">
                <div className="card viewall-card" style={{ width: "16rem" }}>
                  <img src={item.image} className="card-img-top viewall-img" alt="..." />
                  <div className="card-body row text-center align-items-end viewall-detail py-1">
                    <div className="align-self-end py-1">
                      <h5
                        className="card-title pt-0 fs-5 fw-bolder"
                        style={{ color: "rgba(20, 20, 43, 1)" }}
                      >
                        {item.name}
                      </h5>
                    </div>
                    <div className="align-self-start pb-2">
                      <p className="card-text" style={{ color: "#a0a3bd", fontSize: "15px" }}>
                        {item.category}
                      </p>
                    </div>
                    <div className="align-items-end pb-2">
                      <Link
                        to="/detailmovie"
                        className="btn btn-outline-primary"
                        style={{
                          width: "100%",
                          border: "2px solid rgba(95, 46, 234, 1)",
                          color: "rgba(95, 46, 234, 1)"
                        }}
                      >
                        Detail
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
      {/* AKHIR MAIN */}

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default ViewAll;

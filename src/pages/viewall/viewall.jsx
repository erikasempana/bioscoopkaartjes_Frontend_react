import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import "./viewall.css";

import Rectangle2 from "../../assets/img/Rectangle2.png";

import { getAllMovie } from "../../stores/action/movie";
import Footer from "../../components/Footer/footer";
import MonthButton from "../../components/MonthButton/monthbutton";
import Navbar from "../../components/Navbar/navbar";
import Pagination from "react-paginate";

function ViewAll(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allMovie = useSelector((state) => state.getAllMovie.data);

  const [items, setItems] = useState([
    { label: "ASC", value: "ASC" },
    { label: "DESC", value: "DESC" }
  ]);
  const [limit, setLimit] = useState(6);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("ASC");
  const [sortBy, setSortBy] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [searchName, setSearchName] = useState("");
  const [selectMovie, setSelectMovie] = useState("");
  const [pageInfo, setPageInfo] = useState({});

  const getDataMovie = async () => {
    try {
      const resultMovie = await axios.get(
        `movie/?limit=${limit}&page=${page}&sort=${sort}&sortBy=${sortBy}&searchRelease=${releaseDate}&searchName=${searchName}`
      );
      setData(resultMovie.data.data);
      setPageInfo(resultMovie.data.pagination);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handlePagination = (data) => {
    console.log(data.selected + 1);
    setPage(data.selected + 1);
  };

  const handleClickDetail = (id) => {
    console.log(id);
    navigate(`/detail/${id}`);
  };

  const handleMonth = async (sortMonth) => {
    try {
      setReleaseDate(sortMonth);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleSearch = (searchValue) => {
    const searchInput = searchValue.toLowerCase();
    setSearchName(searchInput);
  };

  const handleSort = (event) => {
    setSortBy("name");
    setSort(event.target.value);
  };

  useEffect(() => {
    getDataMovie();
  }, []);

  useEffect(() => {
    getDataMovie();
  }, [page, releaseDate, searchName, sort]);

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
                    <select onChange={handleSort} name="sort" id="sort" value={sort}>
                      <option>Sort</option>
                      {items.map((el) => (
                        <option key={el} value={el.value}>
                          {el.label}
                        </option>
                      ))}
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
                      name="search"
                      onChange={(event) => handleSearch(event.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AKHIR MAIN */}
        <MonthButton sortMonth={handleMonth} />

        {/* Akhir Month */}
      </section>

      <section id="viewall">
        <div className="container">
          <div className="row viewall_overflow-movie">
            {data[0] ? (
              data.map((item) => (
                <div key={item.id} className="col d-md-1 m-2 px-4 py-5 viewall_border-card">
                  <div className="card viewall-card m-auto" style={{ width: "16rem" }}>
                    <img
                      src={process.env.REACT_APP_CLOUDINARY_URL + item.image}
                      className="card-img-top m-auto viewall-img"
                      alt="..."
                    />
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
                        <button
                          to="/detail"
                          onClick={() => handleClickDetail(item.id)}
                          className="btn btn-outline-primary"
                          style={{ width: "100%" }}
                        >
                          Detail
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h4 className="no_data">
                <b>THERE IS NO MOVIE</b>
              </h4>
            )}
          </div>
        </div>
      </section>

      <Pagination
        previousLabel={"<<"}
        nextLabel={">>"}
        breakLabel={"..."}
        pageCount={pageInfo.totalPage}
        onPageChange={handlePagination}
        // marginPagesDisplayed={3}
        // pageRangeDisplayed={4}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />

      {/* AKHIR MAIN */}

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default ViewAll;

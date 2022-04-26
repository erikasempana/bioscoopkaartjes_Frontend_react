import React from "react";
import "./viewall.css";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import Rectangle2 from "../../assets/img/Rectangle2.png";

function ViewAll() {
  return (
    <div className="viewall_container">
      <Navbar />

      {/* END OF NAVBAR */}

      {/* MAIN */}
      <div className="viewall_main">
        <div className="viewall_guide">
          <div className="viewall_guide-left">
            <h3>List Movie</h3>
          </div>
          <div className="viewall_guide-right">
            <div className="viewall_input1">
              <form action="/action_page.php">
                <select
                  name="sort"
                  id="sort"
                  value="Sort"
                  className="viewall_input1"
                >
                  <option value="">Sort</option>
                  <option value="ASC">Ascending</option>
                  <option value="DESC">Descending</option>
                </select>
              </form>
            </div>
            <div>
              <form action="/action_page.php">
                <input
                  type="text"
                  placeholder="Search Movie Name"
                  name="search"
                  className="viewall_input2"
                />
              </form>
            </div>
          </div>
        </div>

        <div className="viewall_container-month">
          <div className="viewall_month">
            <button>September</button>
            <button>Oktober</button>
            <button>November</button>
            <button>Desember</button>
            <button>January</button>
            <button>February</button>
            <button>March</button>
            <button>April</button>
            <button>Mey</button>
            <button>June</button>
            <button>July</button>
            <button>August</button>
          </div>
        </div>

        <div className="viewall_movie">
          <div className="viewall-satu">
            <div className="viewall_card">
              <div className="viewall_header">
                <img src={Rectangle2} alt="" />
              </div>
              <div className="viewall_content">
                <h3>Black Widow</h3>
                <p>Action, Adventure, Sci-Fi</p>
                <button>Detail</button>
              </div>
            </div>
            <div className="viewall_card">
              <div className="viewall_header">
                <img src={Rectangle2} alt="" />
              </div>
              <div className="viewall_content">
                <h3>Black Widow</h3>
                <p>Action, Adventure, Sci-Fi</p>
                <button>Detail</button>
              </div>
            </div>
            <div className="viewall_card">
              <div className="viewall_header">
                <img src={Rectangle2} alt="" />
              </div>
              <div className="viewall_content">
                <h3>Black Widow</h3>
                <p>Action, Adventure, Sci-Fi</p>
                <button>Detail</button>
              </div>
            </div>
            <div className="viewall_card">
              <div className="viewall_header">
                <img src={Rectangle2} alt="" />
              </div>
              <div className="viewall_content">
                <h3>Black Widow</h3>
                <p>Action, Adventure, Sci-Fi</p>
                <button>Detail</button>
              </div>
            </div>
          </div>
          <div className="viewall-dua">
            <div className="viewall_card">
              <div className="viewall_header">
                <img src={Rectangle2} alt="" />
              </div>
              <div className="viewall_content">
                <h3>Black Widow</h3>
                <p>Action, Adventure, Sci-Fi</p>
                <button>Detail</button>
              </div>
            </div>
            <div className="viewall_card">
              <div className="viewall_header">
                <img src={Rectangle2} alt="" />
              </div>
              <div className="viewall_content">
                <h3>Black Widow</h3>
                <p>Action, Adventure, Sci-Fi</p>
                <button>Detail</button>
              </div>
            </div>
            <div className="viewall_card">
              <div className="viewall_header">
                <img src={Rectangle2} alt="" />
              </div>
              <div className="viewall_content">
                <h3>Black Widow</h3>
                <p>Action, Adventure, Sci-Fi</p>
                <button>Detail</button>
              </div>
            </div>
            <div className="viewall_card">
              <div className="viewall_header">
                <img src={Rectangle2} alt="" />
              </div>
              <div className="viewall_content">
                <h3>Black Widow</h3>
                <p>Action, Adventure, Sci-Fi</p>
                <button>Detail</button>
              </div>
            </div>
          </div>
        </div>

        <div className="viewall_button-page">
          <button>
            <a href="#page1">1</a>
          </button>
          <button>
            <a href="#page2">2</a>
          </button>
          <button>
            <a href="#page3">3</a>
          </button>
          <button>
            <a href="#page4">4</a>
          </button>
        </div>
      </div>
      {/* END OF MAIN */}

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default ViewAll;

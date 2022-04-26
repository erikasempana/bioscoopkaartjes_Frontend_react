import React from "react";
import "./viewall.css";

function ViewAll() {
  return (
    <div className="container">
      <div className="container-nav">
        <nav className="menu">
          <ul>
            <li>
              <img src="../../assets/img/Tickitz2.png" alt="" />
            </li>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#list-movie">List Movie</a>
            </li>
          </ul>
          <div className="nav-right">
            <div className="nav-profile-img">
              <img src="../../assets/img/Ellipse 11.png" alt="" />
            </div>
            <div className="nav-search">
              <form>
                <input
                  type="text"
                  placeholder="Search Movie Name"
                  name="search"
                />
                <button type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>

      {/* END OF NAVBAR */}

      {/* MAIN */}
      <div className="main">
        <div className="guide">
          <div className="guide-left">
            <h3>List Movie</h3>
          </div>
          <div className="guide-right">
            <div className="input1">
              <form action="/action_page.php">
                <select name="sort" id="sort" value="Sort" className="input1">
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
                  className="input2"
                />
              </form>
            </div>
          </div>
        </div>

        <div className="container-month">
          <div className="month">
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

        <div className="viewall-movie">
          <div className="viewall-satu">
            <div className="card">
              <div className="header">
                <img src="../../assets/img/Rectangle2.png" alt="" />
              </div>
              <div className="content">
                <h3>Black Widow</h3>
                <p>Action, Adventure, Sci-Fi</p>
                <button>Detail</button>
              </div>
            </div>
            <div className="card">
              <div className="header">
                <img src="../../assets/img/Rectangle2.png" alt="" />
              </div>
              <div className="content">
                <h3>Black Widow</h3>
                <p>Action, Adventure, Sci-Fi</p>
                <button>Detail</button>
              </div>
            </div>
            <div className="card">
              <div className="header">
                <img src="../../assets/img/Rectangle2.png" alt="" />
              </div>
              <div className="content">
                <h3>Black Widow</h3>
                <p>Action, Adventure, Sci-Fi</p>
                <button>Detail</button>
              </div>
            </div>
            <div className="card">
              <div className="header">
                <img src="../../assets/img/Rectangle2.png" alt="" />
              </div>
              <div className="content">
                <h3>Black Widow</h3>
                <p>Action, Adventure, Sci-Fi</p>
                <button>Detail</button>
              </div>
            </div>
          </div>
          <div className="viewall-dua">
            <div className="card">
              <div className="header">
                <img src="../../assets/img/Rectangle2.png" alt="" />
              </div>
              <div className="content">
                <h3>Black Widow</h3>
                <p>Action, Adventure, Sci-Fi</p>
                <button>Detail</button>
              </div>
            </div>
            <div className="card">
              <div className="header">
                <img src="../../assets/img/Rectangle2.png" alt="" />
              </div>
              <div className="content">
                <h3>Black Widow</h3>
                <p>Action, Adventure, Sci-Fi</p>
                <button>Detail</button>
              </div>
            </div>
            <div className="card">
              <div className="header">
                <img src="../../assets/img/Rectangle2.png" alt="" />
              </div>
              <div className="content">
                <h3>Black Widow</h3>
                <p>Action, Adventure, Sci-Fi</p>
                <button>Detail</button>
              </div>
            </div>
            <div className="card">
              <div className="header">
                <img src="../../assets/img/Rectangle2.png" alt="" />
              </div>
              <div className="content">
                <h3>Black Widow</h3>
                <p>Action, Adventure, Sci-Fi</p>
                <button>Detail</button>
              </div>
            </div>
          </div>
        </div>

        <div className="button-page">
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
      <div className="container-footer">
        <footer className="upper-footer">
          <div className="brand">
            <div className="brand-image">
              <img src="../../assets/img/Tickitz2.png" alt="" />
            </div>
            <div className="brand-desc">
              <div>Stop waiting in line. Buy tickets</div>
              <div>conveniently, watch movies quietly.</div>
            </div>
          </div>

          <div className="explore">
            <div className="explore-title">Explore</div>
            <div className="wrap-explore">
              <div>
                <a href="home">Home</a>
              </div>
              <div>
                <a href="movie">Movie</a>
              </div>
            </div>
          </div>

          <div className="sponsor">
            <div className="sponsor-title">Our Sponsor</div>
            <div className="wrap-sponsor">
              <div>
                <img src="../../assets/img/ebv.id 2.png" alt="" />
              </div>
              <div>
                <img src="../../assets/img/CineOne21 2.png" alt="" />
              </div>
              <div>
                <img src="../../assets/img/hiflix 2.png" alt="" />
              </div>
            </div>
          </div>

          <div className="follow">
            <div className="follow-title">Follow Us</div>
            <div className="wrap-follow">
              <div className="wrap-set">
                <img src="../../assets/img/eva_facebook-outline.png" alt="" />
                <span>Tickitz Cinema id</span>
              </div>
              <div className="wrap-set">
                <img src="../../assets/img/bx_bxl-instagram.png" alt="" />
                <span>tickitz.id</span>
              </div>
              <div className="wrap-set">
                <img src="../../assets/img/eva_twitter-outline.png" alt="" />
                <span>tickitz.id</span>
              </div>
              <div className="wrap-set">
                <img src="../../assets/img/feather_youtube.png" alt="" />
                <span>Tickitz Cinema id</span>
              </div>
            </div>
          </div>
        </footer>
        <footer className="lower-footer">
          © 2020 Tickitz. All Rights Reserved.
        </footer>
        {/* END OF FOOTER */}
      </div>
    </div>
  );
}

export default ViewAll;

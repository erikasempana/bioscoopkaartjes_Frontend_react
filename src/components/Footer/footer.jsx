import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import TickitzBrandTwo from "../../assets/img1/Tickitz2.png";
import Facebook from "../../assets/img1/facebook.png";
import Instagram from "../../assets/img1/instagram.png";
import Twitter from "../../assets/img1/twitter.png";
import Youtube from "../../assets/img1/youtube.png";
import Ebuid from "../../assets/img1/ebuid.png";
import Cineone from "../../assets/img1/cineone.png";
import Hiflix from "../../assets/img1/hiflix.png";

function Footer() {
  return (
    <>
      {/*  Footer */}
      <section id="footer">
        <footer className="bg-white text-secondary text-center text-md-start pt-5">
          <div className="container ">
            <div className="row">
              <div className="col-lg-3 col-md-12 mb-4 mb-md-0 footer_brand">
                <img className="mb-lg-4" src={TickitzBrandTwo} alt="brand2" />
                <p>Stop waiting in line. Buy tickets conveniently, watch movies quietly.</p>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 footer_explore">
                <h5 className="fw-bold text-dark mb-lg-5">Explore</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <Link to="/home" className="pb-3">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/viewall" className="pb-3">
                      List Movie
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 footer_sponsor">
                <h5 className="fw-bold text-dark mb-lg-5">Our Sponsor</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <Link to="/home">
                      <img className="pb-3" src={Ebuid} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/home">
                      <img className="pb-3" src={Cineone} alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/home">
                      <img className="pb-3" src={Hiflix} alt="" />
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 footer_followus">
                <h5 className="fw-bold text-dark mb-lg-5">Follow us</h5>

                <ul className="list-unstyled">
                  <li className="pb-3">
                    <img src={Facebook} alt="" />
                    <Link to="/home">Tickitz Cinema id</Link>
                  </li>
                  <li className="pb-3">
                    <img src={Instagram} alt="" />
                    <Link to="/home">tickitz.id</Link>
                  </li>
                  <li className="pb-3">
                    <img src={Twitter} alt="" />
                    <Link to="/home">tickitz.id</Link>
                  </li>
                  <li className="pb-1">
                    <img src={Youtube} alt="" />
                    <Link to="/home">Tickitz Cinema id</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center p-3" style={{ backgroundColor: "#fff" }}>
            <p className="footer_copyright">© 2020 Tickitz. All Rights Reserved.</p>
          </div>
        </footer>
      </section>
      {/* Akhir Footer */}
    </>
  );
}

export default Footer;

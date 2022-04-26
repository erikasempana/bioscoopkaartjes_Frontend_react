import React from "react";
import "./footer.css";
import Tickitz2 from "../../assets/img/Tickitz2.png";
import Facebook from "../../assets/img/facebook.png";
import Instagram from "../../assets/img/instagram.png";
import Twitter from "../../assets/img/twitter.png";
import Youtube from "../../assets/img/youtube.png";
import Ebuid from "../../assets/img/ebuid.png";
import Cineone from "../../assets/img/cineone21.png";
import Hiflix from "../../assets/img/hiflix.png";

function Footer() {
  return (
    <>
      {/* FOOTER */}
      <div className="moviedetail_container-footer">
        <footer className="moviedetail_upper-footer">
          <div className="moviedetail_brand">
            <div className="moviedetail_brand-image">
              <img src={Tickitz2} alt="" />
            </div>
            <div className="moviedetail_brand-desc">
              <div>Stop waiting in line. Buy tickets</div>
              <div>conveniently, watch movies quietly.</div>
            </div>
          </div>

          <div className="moviedetail_explore">
            <div className="moviedetail_explore-title">Explore</div>
            <div className="moviedetail_wrap-explore">
              <div className="moviedetail_explore-home">
                <a href="home">Home</a>
              </div>
              <div className="moviedetail_footer-home">
                <a href="movie">Movie</a>
              </div>
            </div>
          </div>

          <div className="moviedetail_sponsor">
            <div className="moviedetail_sponsor-title">Our Sponsor</div>
            <div className="moviedetail_wrap-sponsor">
              <div>
                <img src={Ebuid} alt="" />
              </div>
              <div>
                <img src={Cineone} alt="" />
              </div>
              <div>
                <img src={Hiflix} alt="" />
              </div>
            </div>
          </div>

          <div className="moviedetail_follow ">
            <div className="moviedetail_follow-title">Follow Us</div>
            <div className="moviedetail_wrap-follow">
              <div className="moviedetail_wrap-set">
                <img src={Facebook} alt="" />
                <span>Tickitz Cinema id</span>
              </div>
              <div className="moviedetail_wrap-set">
                <img src={Instagram} alt="" />
                <span>tickitz.id</span>
              </div>
              <div className="moviedetail_wrap-set">
                <img src={Twitter} alt="" />
                <span>tickitz.id</span>
              </div>
              <div className="moviedetail_wrap-set">
                <img src={Youtube} alt="" />
                <span>Tickitz Cinema id</span>
              </div>
            </div>
            <div className="moviedetail-footer-img">
              <img src={Facebook} alt="" />
              <img src={Instagram} alt="" />
              <img src={Twitter} alt="" />
              <img src={Youtube} alt="" />
            </div>
          </div>
        </footer>
        <footer className="moviedetail_lower-footer mt-5 mb-0">
          © 2020 Tickitz. All Rights Reserved.
        </footer>
      </div>
      {/* END OF FOOTER */}
    </>
  );
}

export default Footer;

import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import Default from "../../assets/img1/default.png";
import "./profile.css";

export default function profile() {
  const handleClickDetailHistory = () => {};

  return (
    <>
      <Navbar />
      <div className="container profile_container">
        <div className="row">
          <div className="col-3 profile_info">
            <div className="card info_card">
              <div className="card-body info_card-body">
                <h4>INFO</h4>
                <img src={Default} className="profile_img d-flex" />
                <h5 className="profile_name">
                  <b>Jonas El Rodriguez</b>
                </h5>
                <p className="profile_role">Moviegoers</p>
                <hr />
                <button className="button_logout">Logout</button>
              </div>
            </div>
          </div>
          <div className="col-9 profile_navigation">
            <div className="card navigation_card">
              <div className="card-body navigation_card-body">
                <button className="navigation_button">Account Settings</button>
                <button className="navigation_button">Order History</button>
              </div>
            </div>
            <div className="card detail-information_card">
              <div className="card-body detail-information_card-body">
                <p className="detail_title">Details Information</p>
                <hr />
                <form className="row">
                  <div className="col-6 d-flex flex-column">
                    <div>
                      <label className="detail_label-input">First Name</label>
                      <input type="text" placeholder="Jonas" className="detail_input" />
                    </div>
                    <div>
                      <label className="detail_label-input">Email</label>
                      <input type="text" placeholder="Jonas" className="detail_input" />
                    </div>
                  </div>

                  <div className="col-6 d-flex flex-column">
                    <div>
                      <label className="detail_label-input">Last Name</label>
                      <input type="text" placeholder="Jonas" className="detail_input" />
                    </div>
                    <div>
                      <label className="detail_label-input">Phone Number</label>
                      <input type="text" placeholder="Jonas" className="detail_input" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="mt-4 mb-5">
              <button className="update_button">Update changes</button>
            </div>
            <div className="card privacy_card">
              <div className="card-body privacy_card-body">
                <p className="detail_title">Account and Privacy</p>
                <hr />
                <form className="row">
                  <div className="col-6 d-flex flex-column">
                    <label className="detail_label-input">New Password</label>
                    <input type="text" placeholder="Jonas" className="detail_input" />
                  </div>

                  <div className="col-6 d-flex flex-column">
                    <label className="detail_label-input">Confirm Password</label>
                    <input type="text" placeholder="Jonas" className="detail_input" />
                  </div>
                </form>
              </div>
            </div>
            <div className="mt-4 mb-5">
              <button className="update_button">Update changes</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

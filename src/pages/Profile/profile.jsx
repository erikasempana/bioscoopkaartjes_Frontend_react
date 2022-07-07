/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Tabs, Tab } from "react-bootstrap";

import { isLogin } from "../../stores/action/auth";
import { UpdateImage, getUserById } from "../../stores/action/user";
import { getBookingByUserId } from "../../stores/action/booking";

import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import Default from "../../assets/img1/default.png";

import ProfileDetail from "../../components/ProfileDetail/profileDetail";
import OrderHistory from "../../components/OrderHistory/orderHistory";
import "./profile.css";

export default function profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = localStorage.getItem("id");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const profile = useSelector((state) => state.user.data);
  const [image, setImage] = useState(null);
  const [form, setForm] = useState({
    image: ""
  });

  const handleChangeForm = (event) => {
    const { name, files } = event.target;
    setForm({ ...form, [name]: files[0] });
    setImage(URL.createObjectURL(files[0]));
  };
  console.log(form);

  const handleUpdateImage = async (event) => {
    try {
      event.preventDefault();
      const body = {
        image: form.image
      };
      const formData = new FormData();
      for (const data in body) {
        formData.append(data, body[data]);
      }
      const result = await dispatch(UpdateImage(id, formData));
      setIsError(false);
      setMessage(result.action.payload.data.msg);
      getUserById(id);
    } catch (error) {
      console.log(error.response);
      setIsError(true);
      setMessage(error.response);
    }
  };

  const handleOrderHistory = async () => {
    try {
      const userId = id;
      await dispatch(getBookingByUserId(userId));
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    dispatch(isLogin(true));
    navigate("/home");
  };

  const handleTickets = () => {
    navigate("/tickets");
  };

  useEffect(() => {
    handleOrderHistory();
  }, []);

  return (
    <>
      <Navbar />

      <div className="container profile_container">
        <div className="md-5 fade show d-flex m-auto">
          {!message ? null : isError ? (
            <div
              className="alert alert-danger alert-dismissible fade show text-center"
              role="alert"
            >
              {message}
            </div>
          ) : (
            <div
              className="alert alert-primary alert-dismissible fade show text-center"
              role="alert"
            >
              {message}
            </div>
          )}
        </div>

        {/* MODAL */}
        <div id="myModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">UPDATE IMAGE</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>

              <div className="modal-body ">
                <p>Form change Profil Image ?</p>
                <input type="file" name="image" onChange={(event) => handleChangeForm(event)} />
                {image && (
                  <img src={image} alt="Image Movie Preview" className="manage_image-movie" />
                )}

                <p className="text-secondary">
                  <small>If you dont save, your changes will be lost.</small>
                </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" onClick={handleUpdateImage}>
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* END MODAL */}
        <div className="row">
          <div className="col-3 profile_info">
            <div className="card info_card">
              <div className="card-body info_card-body">
                <h4>INFO</h4>
                <a
                  href="#myModal"
                  data-bs-toggle="modal"
                  className="bg-white d-flex flex-row m-auto"
                >
                  <img
                    src={
                      profile.image ? process.env.REACT_APP_CLOUDINARY_URL + profile.image : Default
                    }
                    className="profile_img d-flex"
                  />
                </a>
                <h5 className="profile_name">
                  <b>{profile.firstName + " " + profile.lastName}</b>
                </h5>
                <p className="profile_role">{profile.role} Moviegoers</p>
                <hr />
                <button className="button_logout" onClick={() => handleLogout()}>
                  Logout
                </button>
              </div>
            </div>
          </div>
          <div className="col-9 profile_navigation">
            <div className="card navigation_card">
              <Tabs
                defaultActiveKey="Account Settings"
                transition={false}
                id="noanim-tab-example"
                className="navigation_button mb-4 mt-2 mx-3  "
              >
                <Tab
                  className="detail-information_card"
                  eventKey="Account Settings"
                  title="Account Settings"
                >
                  <ProfileDetail profile={profile} />
                </Tab>
                <Tab eventKey="Order History" title="Order History">
                  <OrderHistory detailTickets={handleTickets} />
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

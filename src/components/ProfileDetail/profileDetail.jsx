/* eslint-disable react-hooks/rules-of-hooks */
import { Toast } from "bootstrap";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdatePassword, UpdateProfile } from "../../stores/action/user";
import "./profileDetail.css";

export default function profileDetail(props) {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const profile = props.profile;

  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    noTelp: ""
  });

  const handleChangeUser = (event) => {
    // e.target.value || e.target.name;
    console.log("change user");
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleUpdateDataUser = async () => {
    try {
      const id = profile.id;
      console.log(profile);
      const result = await dispatch(UpdateProfile(id, user));
      setIsError(false);
      setMessage(result.action.payload.data.msg);
    } catch (error) {
      console.log(error);
      setIsError(false);
      setMessage(error.response.msg);
      setUser({
        firstName: "",
        lastName: "",
        noTelp: ""
      });
    }
  };
  const handleResetDataUser = () => {
    setForm({ firstName: "", lastName: "", noTelp: "" });
  };

  const handleChangeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleUpdatePassword = async (event) => {
    try {
      console.log("UPDATE PASSWORD");
      event.preventDefault();
      if (form.oldPassword === "" || form.newPassword === "" || form.confirmPassword === "") {
        setIsError(true);
        setMessage("Please fill your password correctly");
      } else {
        const result = await dispatch(UpdatePassword(form));
        setIsError(false);
        setMessage(result.action.payload.data.msg);
      }
    } catch (error) {
      console.log(error.response);
      setIsError(true);
      setMessage(error.response.data.msg);
      setForm({
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
      });
    }
  };

  const handleResetPassword = () => {
    setForm({ oldPassword: "", newPassword: "", confirmPassword: "" });
  };

  console.log(form);

  return (
    <>
      <div className="md-5 fade show d-flex m-auto text-center d-flex align-items-center">
        {!message ? null : isError ? (
          <div className="alert alert-danger alert-dismissible fade show text-center" role="alert">
            {message}
          </div>
        ) : (
          <div className="alert alert-primary alert-dismissible fade show text-center" role="alert">
            {message}
          </div>
        )}
      </div>
      <div className="card detail-information_card">
        <div className="card-body detail-information_card-body">
          <p className="detail_title">Details Information</p>
          <hr />
          <form className="row">
            <div className="col-6 d-flex flex-column">
              <div>
                <label className="detail_label-input">First Name</label>
                <input
                  type="text"
                  placeholder={profile.firstName}
                  className="detail_input"
                  name="firstName"
                  value={user.firstName}
                  onChange={handleChangeUser}
                />
              </div>
              <div>
                <label className="detail_label-input">Email</label>
                <input type="text" placeholder={profile.email} className="detail_input" />
              </div>
            </div>

            <div className="col-6 d-flex flex-column">
              <div>
                <label className="detail_label-input">Last Name</label>
                <input
                  type="text"
                  placeholder={profile.lastName}
                  className="detail_input"
                  name="lastName"
                  value={user.lastName}
                  onChange={handleChangeUser}
                />
              </div>
              <div>
                <label className="detail_label-input">Phone Number</label>
                <input
                  type="text"
                  placeholder={profile.noTelp}
                  className="detail_input"
                  name="noTelp"
                  value={user.noTelp}
                  onChange={handleChangeUser}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-4 mb-5">
        <button className="update_button" onClick={handleUpdateDataUser}>
          Update changes
        </button>
      </div>
      <form onSubmit={handleUpdatePassword} onReset={handleResetPassword}>
        <div className="card privacy_card">
          <div className="card-body privacy_card-body">
            <p className="detail_title">Account and Privacy</p>
            <hr />
            <div className="row">
              <div className="col-6 d-flex flex-column me-5 mb-3">
                <label className="detail_label-input">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="detail_input"
                  id="oldPassword"
                  name="oldPassword"
                  value={form.oldPassword}
                  onChange={handleChangeForm}
                />
              </div>

              <div className="col-6 d-flex flex-column">
                <label className="detail_label-input">New Password</label>
                <input
                  type="password"
                  placeholder="New Password"
                  className="detail_input"
                  id="newPassword"
                  name="newPassword"
                  value={form.newPassword}
                  onChange={handleChangeForm}
                />
              </div>

              <div className="col-6 d-flex flex-column">
                <label className="detail_label-input">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="detail_input"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChangeForm}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 mb-5">
          <button type="submit" className="update_button">
            Update changes
          </button>
        </div>
      </form>
    </>
  );
}

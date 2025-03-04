import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../reducers/doctorProfile";
import { useHistory } from "react-router-dom";
import "./doctor_profile.css";
const DeleteUser = () => {
  const history = useHistory();
  let token = localStorage.getItem("token");
  const deleteAccount = (req, res) => {
    localStorage.clear();
    axios
      .delete(`${process.env.REACT_APP_BACKEND_SERVER}/doctor/details`, {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((result) => {
        console.log("deleted done");
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .delete(`${process.env.REACT_APP_BACKEND_SERVER}/profile`, {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((result) => {
        console.log("deleted done");
      })
      .catch((err) => {
        console.log(err);
      });
    history.push("/");
  };

  return (
    <>
      <button className="delete" onClick={deleteAccount}>Delete Account</button>
    </>
  );
};

export default DeleteUser;

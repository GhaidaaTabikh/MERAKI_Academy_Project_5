import React, { useState, useEffect } from "react";
import { Switch, Route, Link, useParams, useHistory } from "react-router-dom";
import DeleteUser from "./../doctor_profile/deleteUser";
import axios from "axios";
function Profile() {
  const token = localStorage.getItem("token");
  const storedNames = JSON.parse(localStorage.getItem("result"));
  const [result, setResult] = useState([]);
  const history = useHistory();
  localStorage.setItem("user_info", JSON.stringify(result));
                  
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_SERVER}/profile`, {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((result) => {
        setResult(result.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  });
        
  return (
    <div className="profile-page">
      <div className="profile">
        <div>
          {result.img == "" ? (
            <img src="https://img.icons8.com/office/80/000000/test-account.png" />
          ) : (
            <img className="profileImg" src={result.img} />
          )}
        </div>
        <div className="profile-info">
          <p>
            <span>FirstName: </span>
            {result.firstName}
          </p>
          <p>
            <span>LastName: </span> {result.lastName}
          </p>
          <p>
            <span>Age: </span>
            {result.age}
          </p>
          <p>
            <span>Email: </span>
            {result.email}
          </p>
        
        </div>
        <div className="buttons">
        <div className="buttons-child-2">
          <DeleteUser />
          <button
            onClick={() => {
              history.push("/edit/profile");
            }}
          >
            update
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Profile;

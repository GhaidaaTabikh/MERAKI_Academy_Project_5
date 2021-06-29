import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import jwt from "jsonwebtoken";
import { useEffect, useState } from "react";
require("dotenv").config();

const Navigation = () => {
  const state = useSelector((state) => {
    return { token: state.login.token };
  });
  let token = localStorage.getItem("token");
   let role_id = localStorage.getItem("role_id");


  return (
    <div className="navBar">
      <Link to="/" className="links">
        Home
      </Link>
      <Link to="/" className="links">
        About
      </Link>
      <Link to="/nutrition" className="links">
        Our nutrition
      </Link>
      <Link to="/success" className="links">
        Stories
      </Link>
      <Link to="/" className="links">
        Contact Us
      </Link>

      {token ? (
        <>
          <Link to="/profile" className="links">
            Profile
          </Link>
          <Link to="/" className="links">
            Log out
          </Link>{" "}
          {role_id === 2 ? (
            <>
              <Link to="/messages" className="links">
                messages
              </Link>

              <Link to="/patient" className="links">
                My patient
              </Link>

              <Link to="/schedule" className="links">
                Booking schedule
              </Link>
            </>
          ) : (
            <></>
          )}{" "}
        </>
      ) : (
        <>
          <Link to="/logIn" className="links">
            Log in
          </Link>
          <Link to="/logUp" className="links">
            Log up
          </Link>{" "}
        </>
      )}
    </div>
  );
};

export default Navigation;

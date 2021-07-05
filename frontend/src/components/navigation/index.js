import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import jwt from "jsonwebtoken";
import { useEffect, useState } from "react";
import "./navigation.css";
require("dotenv").config();

const Navigation = () => {
  const state = useSelector((state) => {
    return { token: state.login.token };
  });
  let token = localStorage.getItem("token");
  let role_id = localStorage.getItem("role_id");

  return (
   
    <div className="navBar">
      <div className="logo">
        <h3>HEALTH<span>CARE</span></h3>
      </div>

      <div className="nav">
        <ul>
          {role_id == 3 ? (
            <></>
          ) : (
            <>
              <li>
                {" "}
                <Link to="/" className="links">
                  Home
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/about" className="links">
                  About
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/doctor" className="links">
                  Our nutritionist
                </Link>{" "}
              </li>
              <li>
                <Link to="/success" className="links">
                  Stories
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/" className="links">
                  Contact Us
                </Link>{" "}
              </li>
            </>
          )}

          {token ? (
            <>
              {role_id == 1 ? (
                <>
                  <li>
                    {" "}
                    <Link to="/profile" className="links">
                      Profile
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link
                      to="/"
                      className="links"
                      onClick={() => {
                        localStorage.clear();
                      }}
                    >
                      Log out
                    </Link>{" "}
                  </li>
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            <>
              <li>
                {" "}
                <Link to="/logIn" className="links">
                  Log in
                </Link>{" "}
              </li>
            </>
          )}
          {token ? (
            <>
              {role_id == 2 ? (
                <>
                  <li>
                    {" "}
                    <Link to="/messages" className="links">
                      messages
                    </Link>{" "}
                  </li>

                  <li>
                    <Link to="/patient" className="links">
                      My patient
                    </Link>{" "}
                  </li>

                  <li>
                    {" "}
                    <Link to="/schedule" className="links">
                      Booking schedule
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/doctorProfile" className="links">
                      Profile
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link
                      to="/"
                      className="links"
                      onClick={() => {
                        localStorage.clear();
                      }}
                    >
                      Log out
                    </Link>{" "}
                  </li>
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            <></>
          )}
          {token ? (
            <>
              {role_id == 3 ? (
                <>

                    <li>
                    {" "}
                    <Link
                      to="/accept"
                      className="links"
                    >
                     accept doctor
                    </Link>{" "}
                  </li>

                  <li>
                    {" "}
                    <Link
                      to="/"
                      className="links"
                      onClick={() => {
                        localStorage.clear();
                      }}
                    >
                      Log out
                    </Link>{" "}
                  </li>
                  
                 

                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Rating from "./Rating";
import Stars from "./Stars";
import { createTodo, setTodos } from "./../../reducers/review";
import { FaStar } from "react-icons/fa";
import Payment from "../payment/PaymentForm";

import "./doctordetails.css";
const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const DoctorDetails = ({setPaymentId,setPaymentReceiver,setPrice}) => {

  const { id } = useParams();
  const history = useHistory();

  const [result, setResult] = useState([]);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [allComment, setAllComment] = useState([]);
  const [sa, setSa] = useState(false);
  const [updateComment, setUpdateComment] = useState(false);
  const [updateText, setUpdateCommentText] = useState("");
  const [avgRating, setAvgRating] = useState(0);

  const token = localStorage.getItem("token");
  const commenter_id = localStorage.getItem("user_id");
  const role_id = localStorage.getItem("role_id");

  let doctorsService_id = parseInt(id);
  setPaymentId(doctorsService_id);
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      review: state.review.review,
    };
  });
  const handleClick = (value) => {
    setRating(value);
  };
  const handleMouseOver = (newHoverValue) => {
    setHover(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHover(undefined);
  };
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_SERVER}/doctor/${id}`)
      .then((result) => {
        console.log("dooooooooooooooooooooooctor",result.data[0]);
        setResult(result.data[0]);
        setPaymentReceiver(result.data[0].user_id)
        setPrice(result.data[0].price)

      })
      .catch((err) => {});
  }, []);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_SERVER}/doctor/review/${id}`)
      .then((result) => {
        setAllComment(result.data);
      })
      .catch((err) => {});
  }, [sa]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_SERVER}/review/${id}`)
      .then((res) => {
        setAvgRating(Math.floor(res.data[0].AverageRating));
      })
      .catch((err) => {});
  }, [sa]);

  const createComment = () => {
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_SERVER}/doctor/review`,
        {
          comment,
          rating,
          doctorsService_id,
        },

        {
          headers: {
            authorization: "Bearer " + token,
          },
        }
      )
      .then((result) => {
        dispatch(createTodo(result.data));
        if (sa) {
          setSa(false);
        } else {
          setSa(true);
        }
      })
      .catch((err) => {
        setSa(true);
      });
  };

  const updateComments = (id) => {
    axios
      .put(
        `${process.env.REACT_APP_BACKEND_SERVER}/doctor/review/${id}`,
        {
          updateText,
        },

        {
          headers: {
            authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        setUpdateComment(false);
        if (sa) {
          setSa(false);
        } else {
          setSa(true);
        }
      })
      .catch((err) => {});
  };

  const deleteComment = (id) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_SERVER}/review/${id}`, {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        if (sa) {
          setSa(false);
        } else {
          setSa(true);
        }
      })
      .catch((err) => {});
  };

  return (
    <div className="doctor">
      <link
        href="http://fonts.googleapis.com/css?family=Cookie"
        rel="stylesheet"
        type="text/css"
      ></link>
      {/* <div className="name-Q"></div> */}
      <div className="parent">
        <div className="img111">
          <img
            style={{ width: "500px", height: "400px" }}
            src={result.img ? result.img : <></>}
          />
        </div>
        <div className="decs-do">
          <p>
            <span>Dr .</span> {result.firstName} {result.lastName}
            <Stars stars={avgRating} defaultValue={avgRating} />
          </p>

          <p>
            <span>price:</span> {result.price} jd
          </p>

          <p>
            <span>Qualifications:</span> {result.Qualifications}{" "}
          </p>

          <p>
            <span>practicalExperiences: </span>
            {result.practicalExperiences}{" "}
          </p>
          <p className="doctor-description">{result.description}</p>
          {token ? (
            <>
              {role_id == 2 ? (
                ""
              ) : (
                <button className="btn-1" onClick={() => {}}>
                  <span
                    onClick={() => {
                      history.push("/payment");
                    }}
                  >
                    Subscribe
                  </span>
                </button>
              )}
            </>
          ) : (
            ""
          )}
        </div>
      </div>

      {token ? (
        <>
          {role_id == 2 ? (
            ""
          ) : (
            <div className="comment">
              <p className="feedBack">give us your feedBack</p>
              <div className="rating">
                <div className="rating1" style={styles.container}>
                  {[...Array(5)].map((element, i) => {
                    let ratingValue = i;
                    return (
                      <div className="rating">
                        <div>
                          <FaStar
                            style={styles.container}
                            key={ratingValue}
                            size={24}
                            onClick={() => handleClick(ratingValue + 1)}
                            onMouseOver={() => handleMouseOver(ratingValue + 1)}
                            onMouseLeave={handleMouseLeave}
                            color={
                              (rating || hover) > ratingValue
                                ? colors.oarange
                                : colors.grey
                            }
                            style={{
                              fontSize: 50,
                              marginRight: 10,
                              cursor: "pointer",
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <textarea
                className="input-coment1"
                placeholder="  Comment Here ...."
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              ></textarea>
            </div>
          )}
        </>
      ) : (
        ""
      )}
      {token ? (
        <>
          {" "}
          {role_id == 2 ? (
            ""
          ) : (
            <button className="btnCommant" onClick={createComment}>
              {" "}
              comment
            </button>
          )}{" "}
        </>
      ) : (
        ""
      )}

      <div>
        <div className="parent-commint">
          <p className="Reviews">Reviews :</p>
          {allComment.map((element, index) => {
            return (
              <div className="cmt" key={index + 1}>
                <hr />
                <div className="userImg">
                  <img
                    className="commenterimg"
                    src={element.img}
                    style={{
                      width: "75px",
                      height: "75px",
                      borderRadius: "5px",
                    }}
                  />

                  <div className="commenter-details">
                    <h3 className="commenter">
                      {element.firstName} {element.lastName}
                    </h3>
                    <div className="commentRating">
                      <Stars
                        stars={element.rating}
                        defaultValue={element.rating}
                      />
                    </div>

                    {updateComment == false ? (
                      <p className="comments">{element.comment}</p>
                    ) : (
                      <div>
                        {element.commenter_id == commenter_id ? (
                          <>
                            <textarea
                              className="input-text"
                              onChange={(e) => {
                                setUpdateCommentText(e.target.value);
                              }}
                              defaultValue={element.comment}
                            ></textarea>
                            <img
                              onClick={() => {
                                updateComments(element.id);
                              }}
                              style={{ width: "30px", height: "30px" }}
                              src="https://img.icons8.com/wired/50/000000/edit.png"
                            />
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                    )}
                  </div>
                  <div className="update_delete ">
                    {element.commenter_id == commenter_id ? (
                      <div className="upd-delete">
                        <img
                          onClick={() => {
                            deleteComment(element.id);
                          }}
                          style={{ width: "30px", height: "30px" }}
                          src="https://img.icons8.com/ios/50/000000/delete-forever--v1.png"
                        />

                        {updateComment == false ? (
                          <img
                            onClick={() => {
                              setUpdateComment(true);
                            }}
                            style={{ width: "30px", height: "30px" }}
                            src="https://img.icons8.com/wired/50/000000/edit.png"
                          />
                        ) : (
                          ""
                        )}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "5% 0 0 6%",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
};
export default DoctorDetails;

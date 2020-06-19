import React, { Fragment } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "./Testimonials.scss";

// headin
import Heading from "../../../utils/Heading";

const Testimonials = ({ background }) => {
  const clients = [
    {
      name: "Andrew Grant",
      designation: "Chicago",
      comment:
        "Nice to work with good people! Your team quickly and efficiently redid my old site. I am satisfied! Thank you for your professionalism. We look forward to further cooperation.",
      rating: 4,
      profilePic: require("../../../image/client_1.jpeg"),
    },
    {
      name: "Andrew Grant",
      designation: "Chicago",
      comment:
        "Nice to work with good people! Your team quickly and efficiently redid my old site. I am satisfied! Thank you for your professionalism. We look forward to further cooperation.",
      rating: 5,
      profilePic: require("../../../image/client_2.jpeg"),
    },
    {
      name: "Andrew Grant",
      designation: "Chicago",
      comment:
        "Nice to work with good people! Your team quickly and efficiently redid my old site. I am satisfied! Thank you for your professionalism. We look forward to further cooperation.",
      rating: 3,
      profilePic: require("../../../image/client_1.jpeg"),
    },
    {
      name: "Andrew Grant",
      designation: "Chicago",
      comment:
        "Nice to work with good people! Your team quickly and efficiently redid my old site. I am satisfied! Thank you for your professionalism. We look forward to further cooperation.",
      rating: 5,
      profilePic: require("../../../image/client_2.jpeg"),
    },
  ];

  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          infinite: false,
          dots: true,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      className="testimonials"
      style={!background ? { color: "#1c1c1c", minHeight: "112vh" } : {}}
    >
      <div
        className="t_background"
        style={
          background
            ? {
                background: `url(${require("../../../image/TESTIMONIALS.jpeg")}) no-repeat center center / cover`,
              }
            : { backgroundColor: "#F2F2F2" }
        }
      ></div>
      <div className="container">
        <Heading align="center">testimonials</Heading>

        <div className="testimonial_container">
          <Slider {...settings}>
            {clients.map((client, index) => (
              <div className="testimonial_content" key={index}>
                <div className="header">
                  <img src={client.profilePic} alt="" className="profile_pic" />
                  <div className="right">
                    <h4>{client.name}</h4>
                    <p>{client.designation}</p>
                  </div>
                </div>
                <p>{client.comment}</p>
                {client.rating === 1 && (
                  <Fragment>
                    <img
                      src={require("../../../image/reating.png")}
                      alt=""
                      className="reating_icon"
                    />
                    <img
                      src={require("../../../image/nonrating.png")}
                      alt=""
                      className="reating_icon"
                    />
                    <img
                      src={require("../../../image/nonrating.png")}
                      alt=""
                      className="reating_icon"
                    />
                    <img
                      src={require("../../../image/nonrating.png")}
                      alt=""
                      className="reating_icon"
                    />
                    <img
                      src={require("../../../image/nonrating.png")}
                      alt=""
                      className="reating_icon"
                    />
                  </Fragment>
                )}
                {client.rating === 2 && (
                  <Fragment>
                    <img
                      src={require("../../../image/reating.png")}
                      alt=""
                      className="reating_icon"
                    />
                    <img
                      src={require("../../../image/reating.png")}
                      alt=""
                      className="reating_icon"
                    />
                    <img
                      src={require("../../../image/nonrating.png")}
                      alt=""
                      className="reating_icon"
                    />
                    <img
                      src={require("../../../image/nonrating.png")}
                      alt=""
                      className="reating_icon"
                    />
                    <img
                      src={require("../../../image/nonrating.png")}
                      alt=""
                      className="reating_icon"
                    />
                  </Fragment>
                )}
                {client.rating === 3 && (
                  <Fragment>
                    <img
                      src={require("../../../image/reating.png")}
                      alt=""
                      className="reating_icon"
                    />
                    <img
                      src={require("../../../image/reating.png")}
                      alt=""
                      className="reating_icon"
                    />
                    <img
                      src={require("../../../image/reating.png")}
                      alt=""
                      className="reating_icon"
                    />
                    <img
                      src={require("../../../image/nonrating.png")}
                      alt=""
                      className="reating_icon"
                    />
                    <img
                      src={require("../../../image/nonrating.png")}
                      alt=""
                      className="reating_icon"
                    />
                  </Fragment>
                )}
                {client.rating === 4 && (
                  <Fragment>
                    <img
                      src={require("../../../image/reating.png")}
                      alt=""
                      className="reating_icon"
                    />
                    <img
                      src={require("../../../image/reating.png")}
                      alt=""
                      className="reating_icon"
                    />
                    <img
                      src={require("../../../image/reating.png")}
                      alt=""
                      className="reating_icon"
                    />
                    <img
                      src={require("../../../image/reating.png")}
                      alt=""
                      className="reating_icon"
                    />
                    <img
                      src={require("../../../image/nonrating.png")}
                      alt=""
                      className="reating_icon"
                    />
                  </Fragment>
                )}
                {client.rating === 5 && (
                  <Fragment>
                    <img
                      src={require("../../../image/reating.png")}
                      alt=""
                      className="reating_icon"
                    />
                    <img
                      src={require("../../../image/reating.png")}
                      alt=""
                      className="reating_icon"
                    />
                    <img
                      src={require("../../../image/reating.png")}
                      alt=""
                      className="reating_icon"
                    />
                    <img
                      src={require("../../../image/reating.png")}
                      alt=""
                      className="reating_icon"
                    />
                    <img
                      src={require("../../../image/reating.png")}
                      alt=""
                      className="reating_icon"
                    />
                  </Fragment>
                )}
              </div>
            ))}
          </Slider>
          <div className="footer">
            <h1>,,</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

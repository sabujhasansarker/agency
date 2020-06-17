import React, { Fragment } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./BannerSlider.scss";

import Slider from "react-slick";

const BannerSlider = () => {
  const sliderItem = [
    {
      id: 0,
      text: "ONLY SMART <br> WEB SOLUTION ",
      banner: require("../../../image/banner_slider.jpeg"),
      icon: require("../../../image/Decor.png"),
    },
    {
      id: 1,
      text: "Say “hello” <br> to creative! ",
      banner: require("../../../image/banner_slider_1.jpeg"),
      icon: require("../../../image/Decor.png"),
    },
    {
      id: 2,
      text: "CREATION AND <br> DEVELOPMENT ",
      banner: require("../../../image/banner_slider_2.jpeg"),
      icon: require("../../../image/Decor.png"),
    },
  ];

  let settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 1000,
    fade: true,
    infinite: true,
    slidesToScroll: 1,
  };
  return (
    <div className="banner_slider">
      <Slider {...settings}>
        {sliderItem.map((slider) => (
          <div className="slider" key={slider.id}>
            <img src={slider.banner} alt="" className="banner_slider_img" />
            <div className="slider_content">
              <img src={slider.icon} alt="" className="icon" />
              <h2>
                {slider.text.split("<br>").map((s, index) => (
                  <Fragment key={index}>
                    {s} <br />
                  </Fragment>
                ))}
              </h2>
              <button className="btn">Read more</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;

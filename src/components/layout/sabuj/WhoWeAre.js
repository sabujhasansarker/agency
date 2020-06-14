import React from "react";

// css
import "./WeWhere.scss";

import Heading from "../../../utils/Heading";

const WhoWeAre = () => {
  return (
    <div className="container">
      <div className="we_are">
        <div className="row">
          <div className="col-md-5">
            <Heading align="left">who we are</Heading>
            <p className="bold">
              We are a professional team of developers and web designers with
              vast experience.
            </p>
            <p className="text">
              Looking for a reliable partner? Pay attention to our studio. We
              have significant experience working with projects of any
              complexity. The results of our work will pleasantly surprise you.
              Our main activity is the creation of creative sites of varying
              complexity. From simple landing pages and blogs to complex stores
              and corporate portals.
            </p>
            <div className="footer">
              <div className="footer_left">
                <img
                  src={require("../../../image/Years of experience.png")}
                  alt=""
                  className="image_1"
                />
                <h3>12</h3>
              </div>
              <div className="footer_right">
                <hr />
                <div className="_">
                  <h4>Years Of Experience</h4>
                  <p>Since 2008</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6">
            <img
              src={require("../../../image/we_work.jpeg")}
              alt=""
              className="image_2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;

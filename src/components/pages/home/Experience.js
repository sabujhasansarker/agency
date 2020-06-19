import React from "react";

import Heading from "../../../utils/Heading";

import "./Experience.scss";

const Experience = () => {
  const expConts = [
    { name: "Identity", number: 60 },
    { name: "Branding", number: 80 },
    { name: "Commercial", number: 90 },
  ];
  return (
    <div className="home_exp">
      <div className="home_exp_left"></div>
      <div className="exp_content">
        <Heading>our experience</Heading>
        <p>
          Our studio has an interesting history of occurrence. A few years
          later, we are proud of our achievements in digital marketing and
          design. Today we are ready to offer a full range of services both for
          small companies and for large enterprises. We are ready for
          cooperation and open to communication.
        </p>
        <div className="exp_slide_container">
          {expConts.map((count, index) => (
            <div className="exp_count" key={index}>
              <h4>{count.name}</h4>
              <div className="count_number">
                <p
                  className={`margin_${count.number} margin`}
                  data-aos="exp_count_margin"
                >
                  {count.number}%
                </p>
                <div className="line_container">
                  <div
                    className={`line_${count.number} line`}
                    data-aos="exp_count_exm"
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

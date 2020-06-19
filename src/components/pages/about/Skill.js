import React from "react";
import Heading from "../../../utils/Heading";
import "./Skill.scss";
const Skill = () => {
  const expConts = [
    { name: "Graphics", number: 60 },
    { name: "Identity", number: 60 },
    { name: "Branding", number: 80 },
    { name: "Commercial", number: 90 },
  ];
  return (
    <div className="about_skill">
      <div className="skill_left"></div>
      <div className="skill_content">
        <Heading>our skills</Heading>
        <div className="skill_slide_container">
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

export default Skill;

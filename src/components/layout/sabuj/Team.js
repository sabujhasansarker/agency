import React from "react";

import Heading from "../../../utils/Heading";

import "./Team.scss";

const Team = () => {
  const teams = [
    {
      name: "Elena Thomas",
      deg: "SEO",
      profilePic: require("../../../image/team_1.jpeg"),
    },
    {
      name: "August Walter",
      deg: "Web Designer",
      profilePic: require("../../../image/team_2.jpeg"),
    },
    {
      name: "Alberta O’Connor",
      deg: "Marketer",
      profilePic: require("../../../image/team_3.jpeg"),
    },
  ];
  return (
    <div className="team">
      <div className="container">
        <Heading align="center">OUR CREATIVE TEAM</Heading>
        <div className="single_container">
          {teams.map((team, index) => (
            <div className="single" key={index}>
              <img src={team.profilePic} alt="" />
              <div className="single_text">
                <h4>{team.name}</h4>
                <p>{team.deg}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

import React, { useState } from "react";
import Heading from "../../../../utils/Heading";

// Css
import "./Work.scss";
import WorkItem from "./WorkItem";

// isotop
import isotop_1 from "../../../../image/isotop_1.jpeg";
import isotop_2 from "../../../../image/isotop_2.jpeg";
import isotop_3 from "../../../../image/isotop_3.jpeg";
import isotop_4 from "../../../../image/isotop_4.jpeg";
import isotop_5 from "../../../../image/isotop_5.jpeg";
import isotop_6 from "../../../../image/isotop_6.jpeg";

const Work = () => {
  const item = [
    {
      id: 1,
      tag: ["reactjs", "nodejs", "all"],
      content: "This is react and nodejs ",
      img: isotop_1,
    },
    {
      id: 2,
      tag: ["mern", "reactjs", "all"],
      content: "This is react and mern ",
      img: isotop_2,
    },
    {
      id: 3,
      tag: ["mern", "nodejs", "all"],
      content: "This is mern and nodejs ",
      img: isotop_3,
    },
    {
      id: 4,
      tag: ["mern", "nodejs", "all"],
      content: "This is mern and nodejs ",
      img: isotop_4,
    },
    {
      id: 5,
      tag: ["mern", "nodejs", "all"],
      content: "This is mern and nodejs ",
      img: isotop_5,
    },
    {
      id: 6,
      tag: ["mern", "nodejs", "all"],
      content: "This is mern and nodejs ",
      img: isotop_6,
    },
  ];
  const [toggle, setToggle] = useState("all");
  return (
    <div className="work">
      <div className="container ">
        <Heading>Show our works</Heading>
        <div className="work_nav">
          <ul>
            <li
              onClick={() => setToggle("all")}
              className={`${toggle === "all" ? "active" : ""}`}
            >
              All
            </li>
            <li
              onClick={() => setToggle("reactjs")}
              className={`${toggle === "reactjs" ? "active" : ""}`}
            >
              ReactJs
            </li>
            <li
              onClick={() => setToggle("nodejs")}
              className={`${toggle === "nodejs" ? "active" : ""}`}
            >
              NodeJs
            </li>
            <li
              onClick={() => setToggle("mern")}
              className={`${toggle === "mern" ? "active" : ""}`}
            >
              MERN
            </li>
          </ul>
        </div>
      </div>
      <WorkItem item={item} toggle={toggle} />
    </div>
  );
};

export default Work;

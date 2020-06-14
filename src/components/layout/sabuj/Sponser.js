import React from "react";

import "./Sponser.scss";

const Sponser = () => {
  return (
    <div className="container">
      <div className="sponser">
        <img src={require("../../../image/sponser/1.png")} alt="" />
        <img src={require("../../../image/sponser/2.png")} alt="" />
        <img src={require("../../../image/sponser/3.png")} alt="" />
        <img src={require("../../../image/sponser/4.png")} alt="" />
        <img
          className="lest_img"
          src={require("../../../image/sponser/5.png")}
          alt=""
        />
      </div>
    </div>
  );
};

export default Sponser;

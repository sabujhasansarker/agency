import React from "react";
import "./Card.scss";

const Card = () => {
  return (
    <div className=" contact_card " style={{ textAlign: "center" }}>
      <div className="container card">
        <div className="card_item button">
          <img src={require("../../../image/location.png")} alt="" />
          <h4>Our address</h4>
          <p>
            27 Division St, New York, <br /> NY 10002, USA
          </p>
        </div>
        <div className="card_item button">
          <img src={require("../../../image/phone.png")} alt="" />
          <h4>Phone Number</h4>
          <p>
            +8801948256275 <br /> +8801948256275
          </p>
        </div>
        <div className="card_item button">
          <img src={require("../../../image/email.png")} alt="" />
          <h4>Email Address</h4>
          <p>
            info@example.com <br /> info@example.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;

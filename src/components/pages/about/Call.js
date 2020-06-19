import React from "react";

import "./Call.scss";

const Call = () => {
  return (
    <div className="call">
      <div className="call_container">
        <div className="text">
          <h3>Have Questions? We are Here to Help You!</h3>
          <p>We solution that will growth your website traffic up to 2 000%!</p>
          <div className="button">
            <a href="" className="btn_1">
              call me
            </a>
          </div>
        </div>
        <img src={require("../../../image/24_7.png")} alt="" />
      </div>
    </div>
  );
};

export default Call;

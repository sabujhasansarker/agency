import React from "react";

import "./Call.scss";

const Call = () => {
  return (
    <div className="service_call">
      <div className="container">
        <a class="tel" href="tel:01948256275" target="_self">
          <span>
            <strong>
              <i class="fas fa-phone-alt"></i>
            </strong>
          </span>
        </a>
        <div className="text">
          <h2>
            HAVE QUESTIONS? CALL US <br /> AND GET
            <span> A FREE CONSULTATION</span>
          </h2>
          <div className="button">
            <a className="btn_1" href="tel:01948256275" target="_self">
              call me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Call;

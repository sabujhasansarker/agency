import React from "react";

import "./CallUs.scss";

const CallUs = () => {
  return (
    <div className="callus">
      <div className="callus_left">
        <h2>Call us now</h2>
        <p>
          The solution that will growth your website traffic up to 2 000% and
          your website will be scanned and checked for on page.
        </p>
        <div className="botton_container">
          <div className="button">
            <a className="btn_1" href="tel:01948256275" target="_self">
              call me
            </a>
          </div>
        </div>
      </div>
      <div className="callus_right">
        <div className="h1">
          <h1>,,</h1>
        </div>
        <h2>WE CREATE THE IDEAS THAT HELP BRANDS</h2>
        <div className="footer_text">
          <h4>Alexander Chester</h4>
          <p>Managing Director</p>
        </div>
      </div>
    </div>
  );
};

export default CallUs;

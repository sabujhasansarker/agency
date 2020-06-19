import React from "react";
import { Link } from "react-router-dom";

import "./Banner.scss";

const Banner = ({ children }) => {
  return (
    <div className="banner">
      <div className="banner_content">
        <h2>{children}</h2>
        <p className="footer">
          <Link to="/">Home</Link>{" "}
          <span style={{ margin: "0 10px", color: "#ffffff" }}>/</span>
          <span>{children}</span>
        </p>
      </div>
    </div>
  );
};

export default Banner;

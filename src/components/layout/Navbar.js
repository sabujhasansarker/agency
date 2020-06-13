import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="row" style={{ alignItems: "center" }}>
        <div className="col-md-6">
          <img
            src="https://demo30.atiframe.com/wp-content/uploads/2020/03/Logo_Samura.svg"
            alt=""
            className="logo_img"
          />
        </div>
        <div className="col-md-6">
          <ul className="nav">
            <li>
              <Link to="/">Home </Link>
            </li>
            <li>
              <Link to="/services">Services </Link>
            </li>
            <li>
              <Link to="/categories">Categories </Link>
            </li>
            <li>
              <Link to="/about">About Us </Link>
            </li>
            <li>
              <Link to="/contacts">Contacts </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

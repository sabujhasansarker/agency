import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav>
      <div className="nav_container">
        <Link to="/">
          <img
            src="https://demo30.atiframe.com/wp-content/uploads/2020/03/Logo_Samura.svg"
            alt=""
            className="logo_img"
          />
        </Link>
        <div className="toggle_container">
          <div className="toggle" onClick={() => setToggle(!toggle)}>
            {toggle ? (
              <img
                src="https://img.icons8.com/ultraviolet/30/000000/delete-sign.png"
                alt=""
              />
            ) : (
              <img
                src="https://img.icons8.com/officel/30/000000/menu.png"
                alt=""
              />
            )}
          </div>
        </div>
        <ul className={`nav ${toggle ? "open_nav" : ""}`}>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/services">Services </Link>
          </li>
          <li>
            <Link to="/about">About Us </Link>
          </li>
          <li>
            <Link to="/contacts">Contacts </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

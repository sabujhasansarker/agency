import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img
              src="https://demo30.atiframe.com/wp-content/uploads/2020/03/Logo_Samura.svg"
              alt=""
              className="footer_img"
            />
            <ul>
              <li>+1 999 123 45 67</li>
              <li>info@example.com</li>
              <li>30 Commercial Road Fratton, Australia</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Discover</h4>
            <ul className="hover_ul">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/categories">Categories</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contacts">Contacts</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Information</h4>
            <ul className="hover_ul">
              <li>
                <Link to="/personal_info">Personal Info</Link>
              </li>
              <li>
                <Link to="/cookie">Cookie Policy</Link>
              </li>
              <li>
                <Link to="/terms">Terms of Use</Link>
              </li>
              <li>
                <Link to="/policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Newsletter</h4>
            <input type="email" placeholder="Your E-mail" required />
            <i className="fas fa-paper-plane"></i>

            <div className="follow">
              <h4>follow Us :</h4>
              <div className="footer_icon">
                <a
                  href="http://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="http://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="http://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="http://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

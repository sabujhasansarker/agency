import React from "react";
import ContactFrom from "./ContactFrom";

// css
import "./GetToTeach.scss";

const GetToTeach = ({ image }) => {
  return (
    <div className="contact">
      <div className="contact_left">
        {image ? (
          <img src={require("../../../image/contact.jpeg")} alt="" />
        ) : (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.237285258285!2d90.42142211486718!3d23.70321899649426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b99d02ee5821%3A0x8a35dd4ec4dcad77!2sSabuj%20Hasan%20Sarker!5e0!3m2!1sen!2sbd!4v1592157114016!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="myFrame"
          ></iframe>
        )}
      </div>
      <div className="contact-right">
        <ContactFrom />
      </div>
    </div>
  );
};

export default GetToTeach;

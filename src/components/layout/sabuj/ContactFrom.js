import React from "react";

import Heading from "../../../utils/Heading";

const ContactFrom = () => {
  return (
    <div className="contact_from">
      <Heading align="left">GET IN TOUCH</Heading>
      <form className="form">
        <div className="form_group">
          <input type="text" placeholder="Name" />
        </div>
        <div className="form_group">
          <input type="text" placeholder="E-mail" />
        </div>
        <div className="form_group">
          <textarea type="text" placeholder="Message" />
        </div>
        <div className="form_group">
          <input type="submit" value="Submit" className="btn" />
        </div>
      </form>
    </div>
  );
};

export default ContactFrom;

import React from "react";

const Heading = ({ children, align }) => {
  return (
    <div className="heading_title" data-aos="fade-up" data-aos-once="ture">
      <h1 className="heading" style={{ textAlign: align }}>
        {children}
      </h1>
    </div>
  );
};

export default Heading;

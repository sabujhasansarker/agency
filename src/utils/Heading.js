import React from "react";

const Heading = ({ children, align }) => {
  return (
    <div className="heading_title">
      <h1 className="heading" style={{ textAlign: align }}>
        {children}
      </h1>
    </div>
  );
};

export default Heading;

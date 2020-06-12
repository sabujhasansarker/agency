import React from "react";
import Heading from "../../utils/Heading";

const WhoWeAre = () => {
  return (
    <div className="we_are">
      <div className="row">
        <div className="col-md-6">
          <Heading align="left">who we are</Heading>
          <p className="bold">
            We are a professional team of developers and web designers with vast
            experience.
          </p>
          <p className="text">
            Looking for a reliable partner? Pay attention to our studio. We have
            significant experience working with projects of any complexity. The
            results of our work will pleasantly surprise you. Our main activity
            is the creation of creative sites of varying complexity. From simple
            landing pages and blogs to complex stores and corporate portals.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="https://demo30.atiframe.com/wp-content/uploads/2020/05/Image_.jpg"
            alt=""
            className="image_1"
          />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;

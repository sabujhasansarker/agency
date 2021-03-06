import React, { Fragment } from "react";

// Component
import Banner from "../../../utils/Banner";
import GetToTeach from "../../layout/sabuj/GetToTeach";
import Sponser from "../../layout/sabuj/Sponser";
import Service from "./Service";
import Call from "./Call";

const ServiceIndex = () => {
  return (
    <Fragment>
      <Banner>services</Banner>
      <Service />
      <Call />
      <GetToTeach image={true} />
      <Sponser />
    </Fragment>
  );
};

export default ServiceIndex;

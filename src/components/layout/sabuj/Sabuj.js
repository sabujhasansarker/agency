import React, { Fragment } from "react";
// * Componente
import WhoWeAre from "./WhoWeAre";

// Components
import Work from "./ourWork/Work";
import Banner from "../../../utils/Banner";
import Sponser from "./Sponser";
import GetToTeach from "./GetToTeach";

const Sabuj = () => {
  // console.log(window.location.pathname);
  return (
    <Fragment>
      <Banner>services</Banner>
      <WhoWeAre />
      <Work />
      <GetToTeach />
      <Sponser />
    </Fragment>
  );
};

export default Sabuj;

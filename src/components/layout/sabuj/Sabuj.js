import React, { Fragment } from "react";
// * Componente
import WhoWeAre from "./WhoWeAre";
import Work from "./ourWork/Work";
import Banner from "../../../utils/Banner";
import Sponser from "./Sponser";

const Sabuj = () => {
  // console.log(window.location.pathname);
  return (
    <Fragment>
      <Banner>services</Banner>
      <WhoWeAre />
      <Work />
      <Sponser />
    </Fragment>
  );
};

export default Sabuj;

import React, { Fragment } from "react";

import Banner from "../../../utils/Banner";
import WhoWeAre from "../../layout/sabuj/WhoWeAre";
import Sponser from "../../layout/sabuj/Sponser";

const AboutIndex = () => {
  return (
    <Fragment>
      <Banner>about</Banner>
      <WhoWeAre button={true} />
      <Sponser />
    </Fragment>
  );
};

export default AboutIndex;

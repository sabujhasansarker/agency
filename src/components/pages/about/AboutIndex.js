import React, { Fragment } from "react";

import Banner from "../../../utils/Banner";
import WhoWeAre from "../../layout/sabuj/WhoWeAre";
import Sponser from "../../layout/sabuj/Sponser";
import Testimonials from "../../layout/sabuj/Testimonials";
import Skill from "./Skill";
import Count from "./Count";

const AboutIndex = () => {
  return (
    <Fragment>
      <Banner>about</Banner>
      <WhoWeAre button={true} />
      <Count />
      <Skill />
      <Testimonials />
      <Sponser />
    </Fragment>
  );
};

export default AboutIndex;

import React, { Fragment } from "react";

// Components
import BannerSlider from "./BannerSlider";
import WhoWeAre from "../../layout/sabuj/WhoWeAre";
import Work from "../../layout/sabuj/ourWork/Work";
import Card from "../../layout/sabuj/Card";
import Testimonials from "../../layout/sabuj/Testimonials";
import CallUs from "./CallUs";
import Count from "./Count";
import Experience from "./Experience";
import Team from "../../layout/sabuj/Team";

const HomeIndex = () => {
  return (
    <Fragment>
      <BannerSlider />
      <Card />
      <WhoWeAre />
      <Count />
      <Experience />
      <CallUs />
      <Testimonials background={true} />
      <Team />
      <Work />
    </Fragment>
  );
};

export default HomeIndex;

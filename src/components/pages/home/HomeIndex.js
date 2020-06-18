import React, { Fragment } from "react";

// Components
import BannerSlider from "./BannerSlider";
import WhoWeAre from "../../layout/sabuj/WhoWeAre";
import Work from "../../layout/sabuj/ourWork/Work";
import Card from "../../layout/sabuj/Card";
import Testimonials from "../../layout/sabuj/Testimonials";
import CallUs from "./CallUs";

const HomeIndex = () => {
  return (
    <Fragment>
      <BannerSlider />
      <Card />
      <WhoWeAre />
      <CallUs />
      <Testimonials background={true} />
      <Work />
    </Fragment>
  );
};

export default HomeIndex;

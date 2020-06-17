import React, { Fragment } from "react";
import BannerSlider from "./BannerSlider";
import WhoWeAre from "../../layout/sabuj/WhoWeAre";
import Work from "../../layout/sabuj/ourWork/Work";
import Card from "../../layout/sabuj/Card";
import Testimonials from "../../layout/sabuj/Testimonials";

const HomeIndex = () => {
  return (
    <Fragment>
      <BannerSlider />
      <Card />
      <WhoWeAre />
      <Testimonials background={true} />
      <Work />
    </Fragment>
  );
};

export default HomeIndex;

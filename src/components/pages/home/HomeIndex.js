import React, { Fragment } from "react";
import BannerSlider from "./BannerSlider";
import WhoWeAre from "../../layout/sabuj/WhoWeAre";
import Work from "../../layout/sabuj/ourWork/Work";
import Card from "../../layout/sabuj/Card";

const HomeIndex = () => {
  return (
    <Fragment>
      <BannerSlider />
      <Card />
      <WhoWeAre />
      <Work />
    </Fragment>
  );
};

export default HomeIndex;

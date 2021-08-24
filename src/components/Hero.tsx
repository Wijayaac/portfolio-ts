import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-5 py-5">
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">Hi, I'm Wijaya</h1>
          <h3 className="text-secondary">
            Fresher, and Front End Developer. Who starting career journey.
          </h3>
        </div>
        <div className="col-10 col-sm-8 col-lg-6 mx-auto">
          <StaticImage src="../images/hero.png" alt="myprofile " />
        </div>
      </div>
    </div>
  );
};

export default Hero;

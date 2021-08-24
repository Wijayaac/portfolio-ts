import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
const linkedinIcon = "../images/linkedin.svg";
const githubIcon = "../images/github.svg";

const SocialIcon = () => {
  return (
    <div className="container-fluid row">
      <div className="col mx-auto my-3">
        <StaticImage
          src={linkedinIcon}
          className="mx-2"
          width={24}
          alt="linkedin icon"
        />
        <StaticImage
          src={githubIcon}
          className="mx-2 text-white"
          width={24}
          alt="github icon"
        />
      </div>
    </div>
  );
};

export default SocialIcon;

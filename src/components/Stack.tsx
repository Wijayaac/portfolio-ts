import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const reactIcon = "../images/react.svg";
const reduxIcon = "../images/redux.svg";
const nextIcon = "../images/next.svg";
const gatsbyIcon = "../images/gatsby.svg";
const githubIcon = "../images/github.svg";
const ubuntuIcon = "../images/ubuntu.svg";
const nodeIcon = "../images/node.svg";
const graphqlIcon = "../images/graphql.svg";

const Stack = () => {
  return (
    <div className="py-5">
      <div
        className="container mx-auto text-center"
        style={{ maxWidth: "720px" }}>
        <h2 className="my-3">Tech Stack</h2>
        <p className="lead my-1 border-bottom border-color-dark">
          Tools and Technology that i used for development today
        </p>
        <div className="row row-cols-2 row-cols-md-4">
          <div className="col my-3">
            <StaticImage src={reactIcon} width={64} alt=" reacticon" />
          </div>
          <div className="col my-3">
            <StaticImage src={reduxIcon} width={64} alt=" redux icon" />
          </div>
          <div className="col my-3">
            <StaticImage src={gatsbyIcon} width={64} alt="gatsby icon" />
          </div>
          <div className="col my-3">
            <StaticImage src={graphqlIcon} width={64} alt="graphql icon" />
          </div>
          <div className="col my-3">
            <StaticImage src={nextIcon} width={64} alt="next js icon" />
          </div>
          <div className="col my-3">
            <StaticImage src={nodeIcon} width={64} alt="node js icon" />
          </div>
          <div className="col my-3">
            <StaticImage src={ubuntuIcon} width={64} alt="ubuntu icon" />
          </div>
          <div className="col my-3">
            <StaticImage
              src={githubIcon}
              className="bg-primary rounded-circle"
              width={64}
              alt="github icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;

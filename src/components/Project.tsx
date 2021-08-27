import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
const Project = () => {
  return (
    <div className="container-fluid px-5 my-5" id="project">
      <div className="container-sm text-center">
        <h3 className="text-dark">The project i'm working on</h3>
        <p className="lead text-secondary">
          I'm still developing some of these projects, and making sure their
          performance is always optimized.
        </p>
      </div>
      <div className="row row-cols-1 row-cols-md-1 d-flex">
        <div className="col">
          <div
            className="card mx-auto my-3 my-md-0 shadow-lg rounded"
            style={{ width: "18rem" }}>
            <StaticImage
              src="../images/undagi-project.png"
              width={720}
              className="card-img-top"
              alt="undagi code project"
            />
            <div className="card-body border-top border-primary bg-light">
              <h5 className="card-title">Undagi Code Website</h5>
              <p className="card-text">
                Undagi Code is a product code generator created to help
                beginners, as well as professionals, in building applications
                quickly
              </p>
              <a
                href="https://undagicode.com/"
                target="_blank"
                className="btn btn-primary">
                See in detail
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

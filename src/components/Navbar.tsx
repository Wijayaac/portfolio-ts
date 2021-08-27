import * as React from "react";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <div className="container-fluid bg-primary">
      <div className="container" style={{ maxWidth: "720px" }}>
        <div className="row row-cols-2 d-flex flex-row-reverse">
          <div className="col text-end my-auto">
            <Link className="navbar-brand h2 d-block text-white" to="/">
              Wij.
            </Link>
          </div>
          <div className="col d-flex justify-content-between">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end">
                    <li className="nav-item ">
                      <Link
                        className="nav-link active text-light"
                        aria-current="page"
                        to="/">
                        Home
                      </Link>
                    </li>
                    {/* <li className="nav-item ">
                      <Link className="nav-link text-light" to="#project">
                        Project
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { ReactElement } from "react";
import Navbar from "./Navbar";
import SocialIcon from "./SocialIcons";
// styles
import "../style/main.scss";
interface Props {
  children;
}

function Layout({ children }: Props): ReactElement {
  return (
    <>
      <Navbar />
      {children}
      <div className="bg-dark py-2 mb-0">
        <footer className="mt-auto mx-auto text-center text-white">
          <SocialIcon />
          <p>
            made with &copy;
            <a href="https://getbootstrap.com/" className="text-white">
              Bootstrap
            </a>
            , by
            <a
              href="https://www.linkedin.com/in/kadek-wijaya-217577212/"
              className="text-white">
              @wijayaac
            </a>
            .
            <hr />
            Photo by{" "}
            <a href="https://unsplash.com/@nic1986?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              yapo zhou
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/s/photos/black-and-white?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}

export default Layout;

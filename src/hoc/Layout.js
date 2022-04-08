import React from "react";
import { useLocation } from "react-router-dom";
import "./Layout.css";

import Nav from "../components/Navigation/Nav";
import Banner from "../assets/img/banner.gif";

const Layout = (props) => {
  const pathname = useLocation().pathname;
  return (
    <div>
      {/* Navigation */}
      <Nav />
      {/* Body */}
      {props.children}
      {/* Footer */}
      {pathname !== "/contact" && (
        <a
          href="https://www.samsung.com/mm/offer/samsung-built-for-myanmar-mx-promo/"
          target="_blank"
          className="Banner"
        >
          <img src={Banner} alt="Banner" />
        </a>
      )}
    </div>
  );
};

export default Layout;

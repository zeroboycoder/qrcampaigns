import React from "react";

import Nav from "../components/Navigation/Nav";

const Layout = (props) => {
  return (
    <div>
      {/* Navigation */}
      <Nav />
      {/* Body */}
      {props.children}
      {/* Footer */}
    </div>
  );
};

export default Layout;

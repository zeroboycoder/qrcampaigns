import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="Nav">
      <NavLink
        to="/"
        className={(active) => (active.isActive ? "navLink active" : "navLink")}
      >
        Home
      </NavLink>
      <NavLink
        to="/campaigns"
        className={(active) => (active.isActive ? "navLink active" : "navLink")}
      >
        {" "}
        Campaigns
      </NavLink>
      <NavLink
        to="/contact"
        className={(active) => (active.isActive ? "navLink active" : "navLink")}
      >
        {" "}
        Contact
      </NavLink>
    </div>
  );
};

export default Nav;

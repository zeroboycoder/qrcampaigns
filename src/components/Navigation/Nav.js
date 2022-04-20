import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SlideDraw from "./SlideDraw/SlideDraw";
import "./Nav.css";

const Nav = () => {
  const [showWinners, setShowWinners] = useState(false);
  // Set the date we're counting down to
  let countDownDate = new Date("Apr 20, 2022 20:00:00").getTime();

  // Update the count down every 1 second
  let x = setInterval(function () {
    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      setShowWinners(true);
    }
  }, 1000);

  return (
    <>
      <div className="Nav">
        <NavLink
          to="/"
          className={(active) =>
            active.isActive ? "navLink active" : "navLink"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/campaigns"
          className={(active) =>
            active.isActive ? "navLink active" : "navLink"
          }
        >
          Campaigns
        </NavLink>
        {showWinners && (
          <NavLink
            to="/winners"
            className={(active) =>
              active.isActive ? "navLink active" : "navLink"
            }
          >
            Winners
          </NavLink>
        )}
        <NavLink
          to="/contact"
          className={(active) =>
            active.isActive ? "navLink active" : "navLink"
          }
        >
          {" "}
          Contact
        </NavLink>
      </div>
      <div className="hamburgerMenu">
        <SlideDraw />
      </div>
    </>
  );
};

export default Nav;

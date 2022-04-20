import React, { useState, useEffect } from "react";
import { Fab } from "@mui/material";
import { ArrowDropUp } from "@mui/icons-material";

import "./Winners.css";
import winners from "../../data/winners.json";
import WinnerBox from "../../components/WinnerBox/WinnerBox";
import Spinner from "../../components/Spinner/Spinner";

const Winners = () => {
  const [isPremium, setIsPremium] = useState(true);
  const [premiumGifts, setPremiumGifts] = useState([]);
  const [acceGifts, setAcceGifts] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    winners.map((winner) => {
      winner.isPremium
        ? setPremiumGifts((curValue) => curValue.concat(winner))
        : setAcceGifts((curValue) => curValue.concat(winner));
    });
    setLoading(false);
  }, []);

  const btnClickHandler = (value) => {
    value === "premium" ? setIsPremium(true) : setIsPremium(false);
  };

  const goToTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  let winnerBoxes;
  if (isPremium) {
    winnerBoxes = premiumGifts.map((winner) => (
      <WinnerBox
        key={winner.qrCode}
        qrCode={winner.qrCode}
        gift={winner.name}
      />
    ));
  } else {
    winnerBoxes = acceGifts.map((winner) => (
      <WinnerBox
        key={winner.qrCode}
        qrCode={winner.qrCode}
        gift={winner.name}
      />
    ));
  }

  let app = <Spinner />;
  if (!loading) {
    app = (
      <div className="screen">
        <div className="container">
          {/* Button */}
          <div className="winners_btncontainer">
            <div
              className={isPremium ? "winners_btn active" : "winners_btn"}
              onClick={() => btnClickHandler("premium")}
            >
              Premium Gift
            </div>
            <div
              className={!isPremium ? "winners_btn active" : "winners_btn"}
              onClick={() => btnClickHandler("acce")}
            >
              Accessories Gift
            </div>
          </div>

          {/* Winners */}
          <div className="winners_box"> {winnerBoxes} </div>
        </div>

        {/* Go to top */}
        <div className="goToTop">
          <Fab
            style={{ backgroundColor: "#222", color: "white" }}
            aria-label="add"
            onClick={goToTop}
          >
            <ArrowDropUp />
          </Fab>
        </div>
      </div>
    );
  }
  return app;
};

export default Winners;

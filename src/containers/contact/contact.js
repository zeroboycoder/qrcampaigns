import React from "react";
import {
  PhoneRounded,
  LanguageRounded,
  FacebookRounded,
  YouTube,
  Language,
  Telegram,
} from "@mui/icons-material";

import Map from "./Map";
import MapWithPhone from "../../assets/img/mapwithphone.png";
import "./contact.css";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="HoriBg"></div>
      <div className="upperSection">
        <div className="mapContainer">
          <Map />
        </div>
        <div className="imgContainer">
          <img src={MapWithPhone} alt="Map with phone image" className="img" />
        </div>
      </div>
      <div className="contactFooter">
        {/* First Footer */}
        <div className="footerOne">
          <div className="middle">
            <div className="contactBox">
              <div className="iconContainer iconContainerOne">
                <PhoneRounded style={{ fontSize: "24px", color: "#fff" }} />
              </div>
              <div className="contactInfo">
                <p>Contact Company</p>
                <p>09 775-321-446</p>
              </div>
            </div>
            <div className="contactBox">
              <div className="iconContainer iconContainerTwo">
                <LanguageRounded style={{ fontSize: "24px", color: "#fff" }} />
              </div>
              <div className="contactInfo">
                <p>Website Company</p>
                <p>https://kyawmobilemawlamyine.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Footer */}
        <div className="contactChannel">
          <div className="box">Our Channel</div>
          <div className="contact icons">
            <a
              href="https://www.facebook.com/kyawmobilemawlamyine"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookRounded className="fb" style={{ fontSize: "26px" }} />
            </a>
            <a
              href="https://www.youtube.com/c/KyawMobileMalamyine"
              target="_blank"
              rel="noreferrer"
            >
              <YouTube className="yt" style={{ fontSize: "26px" }} />
            </a>
            <a
              href="https://kyawmobilemawlamyine.com"
              target="_blank"
              rel="noreferrer"
            >
              <Language className="web" style={{ fontSize: "26px" }} />
            </a>
            <a
              href="https://t.me/kyawmobilemawlamyine"
              target="_blank"
              rel="noreferrer"
            >
              <Telegram className="tg" style={{ fontSize: "26px" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

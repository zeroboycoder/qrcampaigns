import React from "react";
import {
  FacebookRounded,
  YouTube,
  Language,
  Telegram,
} from "@mui/icons-material";
import "./Home.css";

import Logo from "../../assets/img/logo.png";

const Home = () => {
  return (
    <div className="home">
      <div className="homeTop">
        <div className="homeTitle">
          <h1>KYAW MOBILE</h1>
          <h2>Mawlamyine</h2>
          <p>ဆန်းသစ် မြန်ဆန် စျေးနှုန်းမှန်</p>
        </div>
        <div className="homeAbout">
          <div className="aboutDesc">
            <h2>About Us</h2>
            <p>
              Our company was born since 2008 in Mawlamyine, Mon State, Myanmar.
              We currently operate Mobile Phone Shops, Gadgets & Accessories
              Shops, Mobile Phone Showrooms,Consumer Electronics & Electronic
              Shops. We work with exceptional talent and experts to ensure your
              best experience with us. We Also Distribute our goods to Lower
              Myanmar . We Now have eight retail outlets in Mawlamyine, as well
              as Mobile Phone repair services. That's all are run by around 170
              professional employees.
            </p>
          </div>
          <div className="channelsContainer">
            <div className="box">Our Channel</div>
            <div className="home icons">
              <a
                href="https://www.facebook.com/kyawmobilemawlamyine"
                target="_blank"
              >
                <FacebookRounded className="fb" style={{ fontSize: "26px" }} />
              </a>
              <a
                href="https://www.youtube.com/c/KyawMobileMalamyine"
                target="_blank"
              >
                <YouTube className="yt" style={{ fontSize: "26px" }} />
              </a>
              <a href="https://kyawmobilemawlamyine.com" target="_blank">
                <Language className="web" style={{ fontSize: "26px" }} />
              </a>
              <a href="https://t.me/kyawmobilemawlamyine" target="_blank">
                <Telegram className="tg" style={{ fontSize: "26px" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="homeFooter">
        <div className="hr"></div>
        <div className="logoImgContainer">
          <img src={Logo} alt="Kyaw Logo" className="logoImg" />
        </div>
        <div className="hr"></div>
      </div>
    </div>
  );
};

export default Home;

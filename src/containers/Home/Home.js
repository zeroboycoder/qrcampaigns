import React from "react";
import {FacebookRounded, YouTube, Language, Telegram} from '@mui/icons-material'
import "./Home.css"

import Logo from '../../assets/img/logo.png'

const Home = () => {
  return <div className="home">
    <div className="homeTop">
      <div className="homeTitle">
        <h1>KYAW MOBILE</h1>
        <h2>Mawlamyine</h2>
        <p>ဆန်းသစ် မြန်ဆန် စျေးနှုန်းမှန်</p>
      </div>
      <div className="homeAbout">
        <div className="aboutDesc">
          <h2>About Us</h2>
          <p>Our company was born since 2008 in Mawlamyine, Mon State, Myanmar. We currently operate Mobile Phone Shops, Gadgets & Accessories Shops, Mobile Phone Showrooms,Consumer Electronics & Electronic Shops. We work with exceptional talent and experts to ensure your best experience with us. We Also Distribute our goods to Lower Myanmar . We Now have  eight retail outlets in Mawlamyine, as well as Mobile Phone repair services. That's all are run by around 170 professional employees.</p>
        </div>
        <div className="channelsContainer">
            <div className="box">Our Channel</div>
            <div className="icons">
              <FacebookRounded className="fb" style={{fontSize : "26px"}} />
              <YouTube className="yt" style={{fontSize : "26px"}} />
              <Language className="web" style={{fontSize : "26px"}} />
              <Telegram className="tg" style={{fontSize : "26px"}} />
            </div>
        </div>
      </div>
    </div>
    <div className="homeFooter">
      <div className="hr"></div>
      <div className="imgContainer"><img src={Logo} alt="Kyaw Logo" className="img" /></div>
      <div className="hr"></div>
    </div>
  </div>
};

export default Home;


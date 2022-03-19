import React from "react";

import QRone from "../../assets/img/qr1.png";
import QRtwo from "../../assets/img/qr2.png";

import "./campaigns.css";

const Campaigns = () => {
  return (
    <div className="campaigns">
      <div className="horiBg"></div>
      <div className="title">
        <h2>KYAW MOBILE MAWLAMYINE မှနွေးထွေးစွာကြိုဆိုပါသည်။</h2>
      </div>
      <div className="campaignsBody">
        <div className="campaignDescBox">
          <div className="descBox">
            <h2>QR SCAN ဖတ်ရာတွင်လုပ်ဆောင်ရမည့်အချက်များ</h2>
            <p>
              မိမိဖုန်းထဲရှိ camera app ကိုဖွင့်ပါ။ <br /> ဝယ်ယူထားသည့်
              ပစ္စည်းတွင်ပါဝင်သော <br /> QR Code ကို အထက်တွင်ဖော်ပြခဲ့သော <br />{" "}
              Camera App ဖြင့် Scan ဖတ်ပါ။
            </p>
            <div className="btnContainer">
              <button>OPEN CAMERA</button>
              <button>SCAN NOW</button>
            </div>
          </div>
        </div>
        <div className="campaignImg">
          <div className="imgContainerOne">
            <img src={QRone} alt="QR" className="img" />
          </div>
          <div className="imgContainerTwo">
            <img src={QRtwo} alt="QR" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;

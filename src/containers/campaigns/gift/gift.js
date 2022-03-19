import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import SadEmoji from "../../../assets/img/sadEmoji.png";
import Congratulation from "../../../assets/img/congratulation.png";
import GiftImg from "../../../assets/img/gift.jpg";
import "./gift.css";

const Gift = (props) => {
  const [winner, setWinner] = useState();
  const [gift, setGift] = useState("TCL Smart TV");
  // MTIzNDU2
  const { qrcode } = useParams();
  const decodedParam = atob(qrcode);

  useEffect(() => {
    decodedParam === "123456" ? setWinner(true) : setWinner(false);
  }, []);

  // Image
  let img = (
    <div className="gift_imgContainer">
      <img src={SadEmoji} alt="Sad Emoji" />
    </div>
  );
  if (winner) {
    img = (
      <div className="gift_imgContainer congratulation">
        <img src={Congratulation} alt="Congratulation" />
        <h2>Lucky Winner!</h2>
      </div>
    );
  }

  // Wish Text
  let wish = (
    <div className="gift_wish">
      <p>သင်ဒီတစ်ကြိမ်တွင်ကံမထူးသေးပါ။</p>
      <p>Campaignsမှာပါဝင်ပေးတဲ့အတွက် ကျေးဇူးအထူးတင်ရှိပါသည်။</p>
    </div>
  );

  if (winner)
    wish = (
      <div className="gift_wish">
        <p>လူကြီးမင်းသည် {gift} ကိုကံထူးသွားပါပြီဖြစ်ပါသည်။</p>
      </div>
    );

  return (
    <div className="gift">
      {/* Top Background rectangle */}
      <div className="gift_topBgRect"></div>

      <div className="codeBgContainer">
        <div className="codeContainer">
          <div className="codeBox">
            <p>{decodedParam}</p>
          </div>
          {img}
          {wish}
          <div className="gift_giftImg">
            <img src={GiftImg} alt="Gift" />
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="gift_contact">
        <p>ဆုမဲထုတ်ယူရန် အသေးစိတ်အချက်အလက်များအတွက်</p>
        <p>Kyaw Mobile Mawlamyine Facebook Page Chat Box</p>
        <p>(သို့မဟုတ်)</p>
        <p>09 775 321 446</p>
        <p>သို့ဆက်သွယ်မေးမြန်းနိုင်ပါသည်။</p>
      </div>
    </div>
  );
};

export default Gift;

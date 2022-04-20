import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";

import winners from "../../../data/winners.json";
import SadEmoji from "../../../assets/img/sadEmoji.png";
import Congratulation from "../../../assets/img/congratulation.png";
import Spinner from "../../../components/Spinner/Spinner";
import "./gift.css";

const Gift = (props) => {
  const [isWin, setIsWin] = useState(false);
  const [winnerData, setWinnerData] = useState({});
  const [loading, setLoading] = useState(true);
  // MTIzNDU2
  const { qrcode } = useParams();
  const decodedQr = atob(qrcode); // 123456

  useEffect(() => {
    setLoading(true);
    for (let i = 0; i < winners.length; i++) {
      if (winners[i].qrCode === parseInt(decodedQr)) {
        setIsWin(true);
        setWinnerData({ isWin: true, ...winners[i] });
        break;
      } else {
        const data = {
          isWin: false,
          qrCode: decodedQr,
          imgCode: "thankyou",
        };
        setWinnerData({ ...data });
      }
    }
    setLoading(false);
  }, []);

  // Middle Image
  let img;
  if (Object.keys(winnerData).length > 0 && isWin) {
    img = (
      <div className="gift_imgContainer congratulation">
        <img src={Congratulation} alt="Congratulation" />
        <h2>Lucky Winner!</h2>
      </div>
    );
  } else {
    img = (
      <div className="gift_imgContainer">
        <img src={SadEmoji} alt="Sad Emoji" />
      </div>
    );
  }

  // Wish Text
  let wish;
  wish =
    winnerData && isWin ? (
      <div className="gift_wish">
        <p>လူကြီးမင်းသည် {winnerData.name} ကိုကံထူးသွားပါပြီဖြစ်ပါသည်။</p>
      </div>
    ) : (
      <div className="gift_wish">
        <p>သင်ဒီတစ်ကြိမ်တွင်ကံမထူးသေးပါ။</p>
        <p>Campaignsမှာပါဝင်ပေးတဲ့အတွက် ကျေးဇူးအထူးတင်ရှိပါသည်။</p>
      </div>
    );

  let app = <Spinner />;
  if (!loading) {
    app = (
      <div className="gift">
        {/* Top Background rectangle */}
        <div className="gift_topBgRect"></div>
        {/* See all winners */}
        <div className="gift_allWinners">
          <a href="/winners">
            <Button variant="contained">See All Winners</Button>
          </a>
        </div>

        <div className="codeBgContainer">
          <div className="codeContainer">
            <div className="codeBox">
              <p>{decodedQr}</p>
            </div>
            {img}
            {wish}
            <div className="gift_giftImg">
              {winnerData.imgCode && (
                <img
                  src={require(`../../../assets/img/gifts/${winnerData.imgCode}.png`)}
                  alt="Gift"
                />
              )}
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
  }
  return app;
};

export default Gift;

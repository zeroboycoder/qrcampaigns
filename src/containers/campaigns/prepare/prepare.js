import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Spinner from "../../../components/Spinner/Spinner";
import "./prepare.css";

const Prepare = (props) => {
  const [timer, setTimer] = useState();
  const { qrcode } = useParams();
  const decodedParam = atob(qrcode);

  // Set prepare to return false
  const prepareToFalse = async () => {
    await axios.put(
      // "https://kyaw-test-default-rtdb.asia-southeast1.firebasedatabase.app/prepared.json",
      "https://kyaw-344406-default-rtdb.asia-southeast1.firebasedatabase.app/prepared.json",
      {
        prepare: false,
      }
    );
  };

  // Set the date we're counting down to
  let countDownDate = new Date("Apr 20, 2022 14:59:10").getTime();

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
      prepareToFalse();
      props.checkPrepare();
    } else {
      // Set Timer in state
      setTimer(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }
  }, 1000);

  let app = <Spinner />;

  if (timer) {
    app = (
      <div className="prepare">
        <div className="prepare_horibg"></div>
        <div className="prepare_container">
          <div className="prepare_codebox">
            <p>{decodedParam}</p>
          </div>
          <div className="prepare_textBox">
            <p>
              အထက်ပါ ကုဒ်နံပါတ်ခြောက်လုံးမှာ သင်၏ကုဒ်နံပါတ် ဖြစ်ပါသည်။
              ထိုကုဒ်နံပါတ်ခြောက်လုံးကိုမှတ်သားထားပြီး ကံထူးရှင်ဖြစ်မဖြစ်ကို
              ၂၀၂၂ ဧပရယ်လ ၂၅ရက်နေ့တွင် ယခု Website မှ ဝင်ရောက်ကံစမ်းနိုင်ပါသည်။
            </p>
            <p>
              ကံထူးရှင်ဖြစ်မဖြစ် ယခု Website တွင် ဝင်ရောက်တိုက်စစ်နိုင်မည့်နေ့
            </p>
            <p>
              မြန်မာသက္ကရာဇ် ၁၃၈၄ ပြည့်နှစ် ၊ တခူးလပြည့်ကျော် ၁၀ရက် ၊ တနင်္လာနေ့
            </p>
          </div>
        </div>
        <p className="prepare_timer">ဆုမဲဖွင့်ရန် {timer} သာလိုပါတော့သည်...။</p>
      </div>
    );
  }

  return app;
};

export default Prepare;

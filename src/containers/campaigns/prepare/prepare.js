import React from "react";
import {useParams} from 'react-router-dom'
import "./prepare.css";

const Prepare = () => {
  const { qrcode } = useParams();
  const decodedParam = atob(qrcode);

  return <div className="prepare">
    <div className="prepare_horibg"></div>
    <div className="prepare_container">
      <div className="prepare_codebox">
        <p>{decodedParam}</p>
      </div>
      <div className="prepare_textBox">
      <p>
        အထက်ပါ ကုဒ်နံပါတ်ခြောက်လုံးမှာ သင်၏ကုဒ်နံပါတ်
        ဖြစ်ပါသည်။ ထိုကုဒ်နံပါတ်ခြောက်လုံးကိုမှတ်သားထားပြီး
        ကံထူးရှင်ဖြစ်မဖြစ်ကို ၂၀၂၂ ဧပရယ်လ ၂၅ရက်နေ့တွင်
        ယခု Website မှ ဝင်ရောက်ကံစမ်းနိုင်ပါသည်။
      </p>
      <p>
      ကံထူးရှင်ဖြစ်မဖြစ် ယခု Website တွင် ဝင်ရောက်တိုက်စစ်နိုင်မည့်နေ့
      </p>
      <p>
      မြန်မာသက္ကရာဇ် ၁၃၈၄ ပြည့်နှစ် ၊ တခူးလပြည့်ကျော် ၁၀ရက် ၊ တနင်္လာနေ့  
      </p>
      </div>
    </div>
  </div>
};

export default Prepare;

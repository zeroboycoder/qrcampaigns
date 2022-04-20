import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import Home from "./containers/Home/Home";
import Campaigns from "./containers/campaigns/campaigns";
import Gift from "./containers/campaigns/gift/gift";
import Prepare from "./containers/campaigns/prepare/prepare";
import Winners from "./containers/winners/Winners";
import Contact from "./containers/contact/contact";
import Pnf from "./containers/pnf/pnf";
import Layout from "./hoc/Layout";
import Spinner from "./components/Spinner/Spinner";

import "./app.css";

const App = () => {
  const [prepare, setPrepare] = useState();
  const [loading, setLoading] = useState();

  const checkPrepare = async () => {
    setLoading(true);
    const res = await axios.get(
      // "https://kyaw-test-default-rtdb.asia-southeast1.firebasedatabase.app/prepared.json",
      "https://kyaw-344406-default-rtdb.asia-southeast1.firebasedatabase.app/prepared.json"
    );
    const result = res.data.prepare;
    setPrepare(result);
    setLoading(false);
    return result;
  };

  useEffect(checkPrepare, [axios]);

  let FinalGift = <Spinner />;
  if (!loading) {
    FinalGift = prepare ? <Prepare checkPrepare={checkPrepare} /> : <Gift />;
  }

  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/winners" element={<Winners />} />
        <Route path="/campaigns/:qrcode" element={FinalGift} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Pnf />} />
      </Routes>
    </Layout>
  );
};

export default App;

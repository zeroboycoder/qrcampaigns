import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./containers/Home/Home";
import Campaigns from "./containers/campaigns/campaigns";
import Gift from "./containers/campaigns/gift/gift";
import Prepare from "./containers/campaigns/prepare/prepare";
import Contact from "./containers/contact/contact";
import Pnf from "./containers/pnf/pnf";
import Layout from "./hoc/Layout";

import "./app.css";

const App = () => {
  const [prepare, setPrepare] = useState();

  const checkPrepare = () => {
    return true;
  };
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/campaigns/:qrcode"
          element={checkPrepare() ? <Prepare /> : <Gift />}
        />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Pnf />} />
      </Routes>
    </Layout>
  );
};

export default App;

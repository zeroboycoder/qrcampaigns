import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./containers/Home/Home";
import Campaigns from "./containers/campaigns/campaigns";
import Contact from "./containers/contact/contact";
import Pnf from "./containers/pnf/pnf";
import Layout from "./hoc/Layout";

import "./app.css";

const app = () => {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/campaigns" element={<Campaigns />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="*" element={<Pnf />} />
      </Routes>
    </Layout>
  );
};

export default app;

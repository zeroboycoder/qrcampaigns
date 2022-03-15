import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./containers/Home/Home";
import Pnf from "./containers/pnf/pnf";
import Layout from "./hoc/Layout";

import "./app.css";

const app = () => {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<Pnf />} />
      </Routes>
    </Layout>
  );
};

export default app;

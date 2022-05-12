import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Coin, Coins } from "./components";
import React from "react";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/:coinId" element={<Coin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

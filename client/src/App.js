/** @format */

import "./App.scss";

import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home.jsx";
import Footer from "./pages/footer/Footer.jsx";

import ReactGA from "react-ga";
const TRACKING_ID = "G-KBKWPQJWQL"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home props />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

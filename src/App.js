/** @format */

import "./App.scss";

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./pages/footer/Footer";

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

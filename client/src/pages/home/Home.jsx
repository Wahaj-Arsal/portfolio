/** @format */

import "./Home.scss";

import Hero from "../../components/hero/Hero";
import About from "../../components/about/About";
import Portfolio from "../../components/portfolio/Portfolio";
import Skills from "../../components/skills/Skills";

import ReactGA from "react-ga";
import { useEffect } from "react";
const TRACKING_ID = "G-KBKWPQJWQL"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Skills />
    </>
  );
}

export default Home;

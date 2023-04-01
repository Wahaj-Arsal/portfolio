/** @format */

import "./Home.scss";

import HeroTitle from "../../components/heroTitle/HeroTitle";
import About from "../../components/about/About";
import Portfolio from "../../components/portfolio/Portfolio";
import Skills from "../../components/skills/Skills";

import ReactGA from "react-ga";
const TRACKING_ID = "G-KBKWPQJWQL"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function Home() {
  return (
    <section className="home-container">
      <HeroTitle />
      <About />
      <Portfolio />
      <Skills />
    </section>
  );
}

export default Home;

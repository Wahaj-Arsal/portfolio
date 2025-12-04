/** @format */

import "./Portfolio.scss";
import Project from "../project/Project.jsx";

import { Projects } from "../constants/ProjectInfo.js";

export default function Portfolio() {
  return (
    <div id="LatestWork" className="portfolio-container">
      <div className="portfolio">
        <h5 className="portfolio__name">Portfolio</h5>
        <h2 className="portfolio__title">Latest Work</h2>
      </div>
      {Projects.map((project, index) => {
        return (
          <Project
            key={index}
            title={project.title}
            cardName={project.cardName}
            summary={project.summary}
            stack={project.stack}
            github={project.github}
            url={project.url}
            image={project.image}
          />
        );
      })}
    </div>
  );
}

/** @format */

import "./Project.scss";

import React from "react";

import gitHub from "../../assets/icons/github_v2.svg";
import externalLink from "../../assets/icons/externalLink.svg";

export default function Project({
  title,
  cardName,
  summary,
  stack,
  github,
  url,
  image,
}) {
  return (
    <section className="project-container">
      <div className="project">
        <div className="card">
          <img
            className="card__image"
            src={require(`../../assets/images/${image}`)}
            alt="website homepage"
          />
          <div className="card__right">
            <h4 className="card__title">{title}</h4>
            <h5 className="card__name">{cardName}</h5>
            <div className="card__information">
              <p className="card__summary">{summary}</p>
            </div>
            <div className="card__tech-stack">
              {stack.map((stack, index) => {
                return (
                  <div key={index} className="card__tech">
                    {stack}
                  </div>
                );
              })}
            </div>
            <div className="card__links">
              <div className="card__github">
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <img
                    className="card__github-image"
                    src={gitHub}
                    alt="github icon"
                  />
                </a>
              </div>
              <div className="card__website">
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <img
                    className="card__website-image"
                    src={externalLink}
                    alt="external link icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

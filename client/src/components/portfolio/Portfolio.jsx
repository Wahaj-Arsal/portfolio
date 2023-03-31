/** @format */

import "./Portfolio.scss";
import Project from "../project/Project";

import React from "react";

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="portfolio">
        <h5 className="portfolio__name">Portfolio</h5>
        <h2 className="portfolio__title">Latest Work</h2>
      </div>
      <Project />
    </div>

    // <div className="portfolio-container">
    //   <div className="portfolio">
    //
    //     <div className="card">
    //       <div className="card__image">
    //         <a
    //           href="https://openfashion.onrender.com"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           <img
    //             className="card__picture-openfashion"
    //             src={openFashion}
    //             alt="website screenshot"
    //           />
    //         </a>
    //       </div>
    //       <div className="card__information">
    //         <h3 className="card__title">
    //           Open Fashion - An E-Commerce Website
    //         </h3>
    //         <br />
    //         <ul className="card__list">
    //           <li className="card__text">
    //             A full-stack e-commerce website I created which allows users to
    //             browse, review and purchase products.
    //           </li>
    //           <li className="card__text">
    //             This website was created using React.js, Node.js, Stripe
    //             (payment gateway) API integration which allows users to purchase
    //             products and EmailJS which allows users to sign up to our
    //             newsletter!
    //           </li>
    //         </ul>
    //         <div className="stack">
    //           <p className="stack__item">React</p>
    //           <p className="stack__item">Node.js</p>
    //           <p className="stack__item">Stripe</p>
    //           <p className="stack__item">EmailJS</p>
    //           <p className="stack__item">MapBox</p>
    //         </div>
    //         <div className="buttons">
    //           <a
    //             href="https://openfashion.onrender.com"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             <button className="buttons__live">Preview Website</button>
    //           </a>
    //           <a
    //             href="https://github.com/Wahaj-Arsal/OpenFashion"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             <button className="buttons__git">GitHub Repository</button>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="card">
    //       <div className="card__image">
    //         <a
    //           href="https://playflix.onrender.com"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           <img
    //             className="card__picture"
    //             src={playflix}
    //             alt="website screenshot"
    //           />
    //         </a>
    //       </div>
    //       <div className="card__information">
    //         <h3 className="card__title">Streaming Website - PlayFlix</h3>
    //         <br />
    //         <ul className="card__list">
    //           <li className="card__text">
    //             PlayFlix is a full stack web application with responsive design.
    //           </li>
    //           <li className="card__text">
    //             PlayFlix is a demo streaming website which allows users to
    //             upload videos, create and delete comments.
    //           </li>
    //           <li className="card__text">
    //             React Router Dom v5.3 with routes to each page.
    //           </li>
    //         </ul>
    //         <div className="stack">
    //           <p className="stack__item">HTML</p>
    //           <p className="stack__item">SASS</p>
    //           <p className="stack__item">React</p>
    //           <p className="stack__item">Node.js</p>
    //           <p className="stack__item">Express</p>
    //         </div>
    //         <div className="buttons">
    //           <a
    //             href="https://playflix.onrender.com"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             <button className="buttons__live">Preview Website</button>
    //           </a>
    //           <a
    //             href="https://github.com/Wahaj-Arsal/Play_Flix"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             <button className="buttons__git">GitHub Repository</button>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="card">
    //       <div className="card__image">
    //         <a
    //           href="https://github.com/Wahaj-Arsal/Chords"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           <img
    //             className="card__picture"
    //             src={chords}
    //             alt="website screenshot"
    //           />
    //         </a>
    //       </div>
    //       <div className="card__information">
    //         <h3 className="card__title">Music Site - Puddle of Chords</h3>
    //         <ul className="card__list">
    //           <li className="card__text">
    //             A response react application with mobile first design.
    //           </li>
    //           <li className="card__text">BEM naming convention.</li>
    //           <li className="card__text">
    //             Animations to bring the website to life.
    //           </li>
    //           <li className="card__text">
    //             DOM Manipulation to dynamically add, remove and modify elements.
    //           </li>
    //         </ul>
    //         <div className="stack">
    //           <p className="stack__item">HTML</p>
    //           <p className="stack__item">SASS</p>
    //           <p className="stack__item">FlexBox</p>
    //           <p className="stack__item">JavaScript</p>
    //           <p className="stack__item">Axios</p>
    //         </div>
    //         <div className="buttons">
    //           <a
    //             href="https://puddleofchords.netlify.app"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             <button className="buttons__live">Preview Website</button>
    //           </a>
    //           <a
    //             href="https://github.com/Wahaj-Arsal/Chords"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             <button className="buttons__git">GitHub Repository</button>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

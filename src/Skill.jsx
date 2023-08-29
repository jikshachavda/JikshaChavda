import React from "react";
import "./index.css";
import "./Skill.css";
import html from "./image/html.webp";
import css from "./image/css.png";
import js from "./image/js.png";
import react from "./image/react.png";
import bootstrap from "./image/Bootstrap.png";
import sass from "./image/sass.png";
import Navbar from "./Navbar";

const Skill = () => {
  return (
    <>
      <Navbar />
      <div className="heading">my Skill</div>
      <div className="images">
        <div className="img">
          <img src={html} alt="" />
          <h2 className="skill">html5</h2>
        </div>
        <div className="img">
          <img src={css} alt="" />
          <h2 className="skill">css</h2>
        </div>
        <div className="img">
          <img src={js} alt="" />
          <h2 className="skill">javascript</h2>
        </div>
        <div className="img">
          <img src={react} alt="" />
          <h2 className="skill">react js</h2>
        </div>
        <div className="img">
          <img src={sass} alt="" />
          <h2 className="skill">sass</h2>
        </div>
        <div className="img">
          <img src={bootstrap} alt="" />
          <h2 className="skill">bootstrap</h2>
        </div>
      </div>
    </>
  );
};

export default Skill;

import React from "react";
import "./index.css";
import "./About.css";
import "./index.css";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about">
        <div className="heading">about me</div>
        <div className="about-container">
          <div className="content">
            <h2>frontend web developer</h2>
            <div className="details">
              <h2 className="text">name:</h2>
              <h4 className="detail">jiksha chavda</h4>
            </div>
            <div className="details">
              <h2 className="text">Age:</h2>
              <h4 className="detail">20</h4>
            </div>
            <div className="details">
              <h2 className="text">courses:</h2>
              <h4 className="detail">HTMl, Css and Javascript</h4>
            </div>
            <div className="details">
              <h2 className="text">Frameworks:</h2>
              <h4 className="detail">React js , sass and Bootstrap</h4>
            </div>
            <div className="details">
              <h2 className="text">gmail:</h2>
              <h4 className="detail">jikshachavda@gmail.com</h4>
            </div>
            <div className="details">
              <h2 className="text">location:</h2>
              <h4 className="detail">jamnagar, gujrat</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

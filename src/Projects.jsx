import React, { useState } from "react";
import "./Projects.css";
import projectData from "./projectData";
import Navbar from "./Navbar";
import { FaClosedCaptioning } from "react-icons/fa";

const Projects = () => {
  const [item, setitem] = useState(projectData);
  const filterItem = (categItem) => {
    const updatedItem = projectData.filter((curElem) => {
      return curElem.category === categItem;
    });
    setitem(updatedItem);
  };

  return (
    <>
      <Navbar />
      <div className="heading">My Projects</div>
      <div className="projects-container">
        <div className="button-section">
          <div className="button" onClick={() => setitem(projectData)}>
            All
          </div>
          <div className="button" onClick={() => filterItem("Html, css")}>
            Html, Css
          </div>
          <div className="button" onClick={() => filterItem("Javascript")}>
            Javascript
          </div>
          <div className="button" onClick={() => filterItem("React Js")}>
            React js
          </div>
          <div className="button" onClick={() => filterItem("Games")}>
            Games
          </div>
        </div>
        <div className="card-container">
          {item.map((elem) => {
            const { img, category, websiteName, website, sourceCode } = elem;
            if (website == "") {
              return (
                <>
                  <div className="card">
                    <div className="img">
                      <img src={img} alt="" srcSet="" />
                    </div>
                    <div className="info">
                      <h2>{websiteName}</h2>
                      <p>
                        a {websiteName}. make with {category}. full responsive
                      </p>
                    </div>
                    <div className="Buttons">
                      <a className="btn" href={sourceCode}>
                        Source Code
                      </a>
                    </div>
                  </div>
                </>
              );
            } else {
              return (
                <>
                  <div className="card">
                    <div className="img">
                      <img src={img} alt="" srcSet="" />
                    </div>
                    <div className="info">
                      <h2>{websiteName}</h2>
                      <p>
                        a {websiteName}. make with {category}. full responsive
                      </p>
                    </div>
                    <div className="Buttons">
                      <a className="btn" href={website}>
                        Visit Site
                      </a>
                      <a className="btn" href={sourceCode}>
                        Source Code
                      </a>
                    </div>
                  </div>
                </>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;

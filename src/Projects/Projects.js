import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="prjgradient">
      <h1> Projects </h1>
      <div className="projects">
        <div id="game" className="projectCard">
          <div className="content">
            <p className="desc">
              Created in ReactJS using hooks {"&"} highscore database using
              NodeJS.
            </p>
            <div className="btnwrap">
              <a
                href="https://github.com/Richard-Hanak/targetGame"
                target="_blank"
              >
                GitHub
              </a>{" "}
              <Link to="/targetgame">
                <p>Demo</p>
              </Link>
            </div>
          </div>
        </div>
        <div id="recipes" className="projectCard">
          <div className="content">
            <p className="desc">
              Created in ReactJS using hooks, router {"&"} contextApi.
            </p>
            <div className="btnwrap">
              <a
                href="https://github.com/Richard-Hanak/recipesApi"
                target="_blank"
              >
                GitHub
              </a>{" "}
              <Link to="/recipesapi">
                <p>Demo</p>
              </Link>
            </div>
          </div>
        </div>
        <div id="game" className="projectCard">
          <div className="content">
            <p className="desc">
              Created in ReactJS using hooks {"&"} highscore database using
              NodeJS.
            </p>
            <div className="btnwrap">
              <a
                href="https://github.com/Richard-Hanak/targetGame"
                target="_blank"
              >
                GitHub
              </a>{" "}
              <Link to="/targetgame">
                <p>Demo</p>
              </Link>
            </div>
          </div>
        </div>
        <div id="recipes" className="projectCard">
          <div className="content">
            <p className="desc">
              Created in ReactJS using hooks, router {"&"} contextApi.
            </p>
            <div className="btnwrap">
              <a
                href="https://github.com/Richard-Hanak/recipesApi"
                target="_blank"
              >
                GitHub
              </a>{" "}
              <Link to="/recipesapi">
                <p>Demo</p>
              </Link>
            </div>
          </div>
        </div>
        <div id="label" className="projectCard">
          <div className="content">
            <p className="desc">
              App I developed for local business that creates shipping labels
              from Excel sheets. VanillaJS, Jquery {"&"} NodeJS.
            </p>
            <div className="btnwrap">
              <a
                href="https://github.com/Richard-Hanak/Label-creator"
                target="_blank"
              >
                GitHub
              </a>{" "}
              <Link to="/labelcreator">
                <p>Video</p>
              </Link>
            </div>
          </div>
        </div>
        <div id="label" className="projectCard">
          <div className="content">
            <p className="desc">
              App I developed for local business that creates shipping labels
              from Excel sheets. VanillaJS, Jquery {"&"} NodeJS.
            </p>
            <div className="btnwrap">
              <a
                href="https://github.com/Richard-Hanak/Label-creator"
                target="_blank"
              >
                GitHub
              </a>{" "}
              <Link to="/labelcreator">
                <p>Video</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

import React from "react";

function Projects({setRenderElement,setProjectScroll}) {
  return (
    <div className="prjgradient">
      <h1> Projects </h1>
      <div className="projects">
        <div className="projectCard">
          <div className="image" id="game"></div>
          <p className="desc">
            <p className="highlight">ReactJS {"&"} NodeJS.</p>
          </p>
          <div className="btnwrap">
            <a className="project-button"
              href="https://github.com/Richard-Hanak/targetGame"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
              <p className="project-button" onClick={() => {setRenderElement("Tgame"); setProjectScroll(true)}}>Demo</p>
          </div>
        </div>
        <div className="projectCard">
          <div className="image" id="recipes"></div>
          <p className="desc">
            Created in{" "}
            <p className="highlight">
              {" "}
              ReactJS with hooks, router {"&"} contextApi.
            </p>
          </p>
          <div className="btnwrap">
            <a className="project-button"
              href="https://github.com/Richard-Hanak/recipesApi"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
              <p className="project-button" onClick={() => {setRenderElement("Recipes"); setProjectScroll(true)}}>Demo</p>
          </div>
        </div>
        <div className="projectCard">
          <div className="image" id="soon"></div>
          <p className="desc">
            COMING SOON...
            <p className="highlight"></p>
          </p>
        </div>
        <div className="projectCard">
          <div className="image" id="portfolio"></div>
          <p className="desc">
            Created in{" "}
            <p className="highlight">
              {" "}
              ReactJS with hooks, router {"&"} contextApi.
            </p>
          </p>
          <div className="btnwrap">
            <a className="project-button"
              href="https://github.com/Richard-Hanak/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="projectCard">
          <div className="image" id="label"></div>
          <p className="desc">
            App I developed for customer that creates shipping labels from Excel
            sheets.
            <p className="highlight"> VanillaJS, Jquery {"&"} NodeJS.</p>
          </p>
          <div className="btnwrap">
            <a className="project-button"
              href="https://github.com/Richard-Hanak/Label-creator"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}

              <p className="project-button" onClick={() => {setRenderElement("LabelCreator"); setProjectScroll(true)}}>Video</p>

          </div>
        </div>
        <div className="projectCard">
          <div className="image" id="soon"></div>
          <p className="desc">
            COMING SOON...
            <p className="highlight"></p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;

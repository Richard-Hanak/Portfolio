import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="Projects">
      <div className="ProjectCard">
        <h1>Some of my work</h1>
        <h2>Target Game</h2>
        <p>Created in ReactJS using hooks {"&"} highscore database using NodeJS.</p>
        <img></img>
        <Link to="/targetgame">
          <p>Demo</p>
        </Link>
        <a href="https://github.com/Richard-Hanak/targetGame" target="_blank">
          GitHub
        </a>
      </div>
      <div className="ProjectCard">
        <h2>Recipes Api</h2>
        <p>Created in ReactJS using hooks, router {"&"} contextApi.</p>
        <img></img>
        <Link to="/recipesapi">
          <p>Demo</p>
        </Link>
        <a href="https://github.com/Richard-Hanak/recipesApi" target="_blank">
          GitHub
        </a>
      </div>
      <div className="ProjectCard">
        <h2>Label Creator</h2>
        <p>App I developed for local business that creates shipping labels from Excel sheets.
           VanillaJS, Jquery {"&"} NodeJS.
        </p>
        <img></img>
        <Link to="/labelcreator">
          <p>Video</p>
        </Link>
        <a href="https://github.com/Richard-Hanak/Label-creator" target="_blank">
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Projects;

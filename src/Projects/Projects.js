import React from "react";

function Projects({ setRenderElement, setProjectScroll, setScrollToPage, language }) {
  return (
    <div className="project-gradient">
      <h1 className="headline"> {language === "EN" ? "Projects" : "Projekty"} </h1>
      <div className="projects">
        <div className="projectCard">
          <div className="image" id="game"></div>
          <p className="desc">{language === "EN" ? "Co-ordination testing game. The highscore database is being kept by node server." : "Hra, ktorá otestuje vašu koordináciu. highscore databáza je udržiavaná na node serveri."}
            <p className="highlight">ReactJS {"&"} NodeJS.</p>
          </p>
          <div className="btnwrap">
            <a
              className="project-button"
              href="https://github.com/Richard-Hanak/targetGame"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            <p
              className="project-button"
              onClick={() => {
                setRenderElement("Tgame");
                setProjectScroll(true);
              }}
            >
              Demo
            </p>
          </div>
        </div>
        <div className="projectCard">
          <div className="image" id="recipes"></div>
          <p className="desc">
          {language === "EN" ? "Single page cookbook using api to dynamically display results." : "Single page receptár, ktorý používa api a dynamicky zobrazuje výsledky."} 
            <p className="highlight">
              ReactJS: hooks, router {"&"} contextApi.
            </p>
          </p>
          <div className="btnwrap">
            <a
              className="project-button"
              href="https://github.com/Richard-Hanak/recipesApi"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <p
              className="project-button"
              onClick={() => {
                setRenderElement("Recipes");
                setProjectScroll(true);
              }}
            >
              Demo
            </p>
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
          {language === "EN" ? "Page transitions using react libraries. Custom hook form validation." : "Prechody stránok používajú react knižnice. Validácia formulára pomocou custom hookov."}
            <p className="highlight">
              {" "}
              ReactJS {"&"} NodeJS.
            </p>
          </p>
          <div className="btnwrap">
            <a
              className="project-button"
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
          {language === "EN" ? "App I developed for customer that creates pirnt-ready shipping labels from Excel" : "Aplikácia, ktorú som vytvoril pre klienta. Z Excelu vyrába prepravné štítky pripravené na tlač."}

            <p className="highlight"> VanillaJS, Jquery {"&"} NodeJS.</p>
          </p>
          <div className="btnwrap">
            <a
              className="project-button"
              href="https://github.com/Richard-Hanak/Label-creator"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            <p
              className="project-button"
              onClick={() => {
                setRenderElement("LabelCreator");
                setProjectScroll(true);
              }}
            >
              Video
            </p>
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
      <p
        id="btn"
        className="contact"
        onClick={() => {
          setScrollToPage(2);
        }}
      >
        <svg height="13" width="22">
          <path d="m0.391254,0.569045l10.638666,11.973533l10.638666,-11.973533l-21.277331,0z" />
        </svg>
        {language === "EN" ? "Contact me" : "Kontakt"}
      </p>
      <p
        id="btn"
        className="home"
        onClick={() => {
          setScrollToPage(0);
        }}
      >
        {language === "EN" ? "Home" : "Domov"}
        <svg className="arrow-up" height="13" width="22">
          <path d="m0.391254,0.569045l10.638666,11.973533l10.638666,-11.973533l-21.277331,0z" />
        </svg>
      </p>
    </div>
  );
}

export default Projects;

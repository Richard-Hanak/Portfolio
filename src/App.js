import React, { useRef, useState, useEffect } from "react";
import { FullPage, Slide } from "react-full-page";
import { disableBodyScroll } from "body-scroll-lock";

import Banner from "./Banner/Banner.js"
import Projects from "./Projects/Projects.js";

import CloseButton from "./CloseButton/CloseButton.js";
import Home from "./Projects/RecipesApi/App/Home.js";
import Context from "./Projects/RecipesApi/Context.js";
import SearchResults from "./Projects/RecipesApi/SearchResults/SearchResults.js";
import Tgame from "./Projects/TargetGame/App.js";
import LabelCreator from "./Projects/LabelCreator/LabelCreator.js";
import "./Projects/RecipesApi/App/Home.css";
import "./App.css";

function App() {
  const [projectScroll, setProjectScroll] = useState(false);
  const [renderElement, setRenderElement] = useState("slide-three");
  const [showRecipeResults, setShowRecipeResults] = useState(false);
  const fullPageRef = useRef();

  useEffect(() => {
    (() => {
      if (projectScroll === true) {
        fullPageRef.current.scrollToSlide(2);
        const targetElement = document.querySelector("#list");
        disableBodyScroll(targetElement);
      } else {
        fullPageRef.current.scrollToSlide(1);
      }
    })();
  }, [projectScroll]);

  return (
    <div id="scroll-wrap">
      <FullPage
        ref={fullPageRef}
        scrollMode={projectScroll ? "normal" : "full-page"}
      >
        <Slide>
          <div className="background" id="slide-one">
            <Banner />
            <p
              id="btn"
              className="contact"
              onClick={() => {
                fullPageRef.current.scrollToSlide(2);
              }}
            >
              <svg className="top" height="13" width="22">
                <path d="m0.391254,0.569045l10.638666,11.973533l10.638666,-11.973533l-21.277331,0z" />
              </svg>
              <svg className="bot" height="13" width="22">
                <path d="m0.391254,0.569045l10.638666,11.973533l10.638666,-11.973533l-21.277331,0z" />
              </svg>
              Contact me
            </p>
            <p
              id="btn"
              className="prjects"
              onClick={() => {
                fullPageRef.current.scrollToSlide(1);
              }}
            >
              Projects
              <svg height="13" width="22">
                <path d="m0.391254,0.569045l10.638666,11.973533l10.638666,-11.973533l-21.277331,0z" />
              </svg>
            </p>
          </div>
        </Slide>
        <Slide>
          <div className="background" id="slide-two">
            <Projects
              setRenderElement={setRenderElement}
              setProjectScroll={setProjectScroll}
            />
            <p
              id="btn"
              className="contact"
              onClick={() => {
                fullPageRef.current.scrollToSlide(2);
              }}
            >
              <svg height="13" width="22">
                <path d="m0.391254,0.569045l10.638666,11.973533l10.638666,-11.973533l-21.277331,0z" />
              </svg>
              Contact me
            </p>
            <p
              id="btn"
              className="home"
              onClick={() => {
                fullPageRef.current.scrollToSlide(0);
              }}
            >
              Home
              <svg className="up" height="13" width="22">
                <path d="m0.391254,0.569045l10.638666,11.973533l10.638666,-11.973533l-21.277331,0z" />
              </svg>
            </p>
          </div>
        </Slide>
        <Slide>
          <div id="slide-three">
            {projectScroll ? (
              <CloseButton
                setRenderElement={setRenderElement}
                setProjectScroll={setProjectScroll}
              />
            ) : null}
            {renderElement === "Tgame" ? (
              <Tgame />
            ) : renderElement === "Recipes" ? (
              <Context>
                {showRecipeResults ? (
                  <SearchResults setShowRecipeResults={setShowRecipeResults} />
                ) : (
                  <Home setShowRecipeResults={setShowRecipeResults} />
                )}
              </Context>
            ) : renderElement === "LabelCreator" ? (
              <LabelCreator />
            ) : null}
          </div>
        </Slide>
      </FullPage>
    </div>
  );
}

export default React.memo(App);

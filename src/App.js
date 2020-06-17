import React, { useRef, useState, useEffect } from "react";
import { FullPage, Slide } from "react-full-page";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import Banner from "./Banner/Banner.js";
import Projects from "./Projects/Projects.js";
import Contact from "./Contact/Contact.js";

import CloseButton from "./CloseButton/CloseButton.js";
import Home from "./Projects/RecipesApi/App/Home.js";
import Context from "./Projects/RecipesApi/Context.js";
import SearchResults from "./Projects/RecipesApi/SearchResults/SearchResults.js";
import Tgame from "./Projects/TargetGame/App.js";
import LabelCreator from "./Projects/LabelCreator/LabelCreator.js";
import "./Projects/RecipesApi/App/Home.css";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("EN");
  const [projectScroll, setProjectScroll] = useState(false);
  const [scrollToPage, setScrollToPage] = useState();
  const [renderElement, setRenderElement] = useState("slide-three");
  const [showRecipeResults, setShowRecipeResults] = useState(false);
  const fullPageRef = useRef();

  useEffect(() => {
    const targetElement = document.querySelector("#list");
    (() => {
      if (projectScroll === true) {
        fullPageRef.current.scrollToSlide(2);
        disableBodyScroll(targetElement);
      } else {
        fullPageRef.current.scrollToSlide(1);
        enableBodyScroll(targetElement);
      }
    })();
  }, [projectScroll]);

  useEffect(() => {
    fullPageRef.current.scrollToSlide(scrollToPage);
    setScrollToPage();
  }, [scrollToPage]);
    
  return (
    <>
    <div className="test">dassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssssdassssssssssssssssss</div>
    <FullPage
      ref={fullPageRef}
      scrollMode={projectScroll ? "normal" : "full-page"}
    >
      <Slide>
        <div className="background">
          <Banner
            setScrollToPage={setScrollToPage}
            language={language}
            setLanguage={setLanguage}
          />
        </div>
      </Slide>
      <Slide>
        <div className="background">
          <Projects
            language={language}
            setScrollToPage={setScrollToPage}
            setRenderElement={setRenderElement}
            setProjectScroll={setProjectScroll}
          />
        </div>
      </Slide>
      
      <Slide>
        <div id="slide-three" className="background">
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
          ) : (
            <Contact setScrollToPage={setScrollToPage} language={language} />
          )}
        </div>
      </Slide>
    </FullPage>
    </>
  );
}

export default React.memo(App);

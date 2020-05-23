import React from "react";
import "./App.css";
import Projects from "./Projects/Projects.js";
import Banner from "./Banner/Banner.js";

function App() {
  return (
    <div className="app">
      <Banner />
      <Projects />
    </div>
  );
}

export default App;

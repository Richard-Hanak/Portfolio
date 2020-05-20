import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./Projects/RecipesApi/App/Home.css";
import Context from "./Projects/RecipesApi/Context.js";
import SearchResults from "./Projects/RecipesApi/SearchResults/SearchResults.js";
import Home from "./Projects/RecipesApi/App/Home.js";
import Tgame from "./Projects/TargetGame/App.js";
import LabelCreator from "./Projects/LabelCreator/LabelCreator.js";
import "./index.css";
import App from "./App";

const Index = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/targetgame" component={Tgame} />
        <Route path="/labelcreator" component={LabelCreator} />
        <Context>
          <Route path="/recipesapi" exact component={Home} />
          <Route path="/recipesapi/results" component={SearchResults} />
        </Context>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App/Home.css";
import Home from "./App/Home.js";
import SearchResults from "./SearchResults/SearchResults.js";
import Context from "./Context.js";

const Index = () => {
  return (
    <Router>
      <Context>
        <Switch>
          <Route path="/recipesapi" exact component={Home} />
          <Route path="/recipesapi/results" component={SearchResults} />
        </Switch>
      </Context>
    </Router>
  );
};

export default Index;
ReactDOM.render(<Index />, document.getElementById("root"));

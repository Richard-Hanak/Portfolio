import React from "react";

import Banner from "../Banner/Banner";
import EditorsChoice from "../EditorsChoice/EditorsChoice";
import SearchIngredient from "../SearchIngredient/SearchIngredient";

const Home = ({setShowRecipeResults}) => {
  return ( 
    <div id="recipesWrap">
      <Banner setShowRecipeResults={setShowRecipeResults}/>
      <div className="Home" id="test">
        <EditorsChoice />
        <SearchIngredient setShowRecipeResults={setShowRecipeResults}/>
      </div>
    </div>
  );
};
export default React.memo(Home);

import React, { useContext, useEffect } from "react";

import Banner from "../Banner/Banner";
import RecipeCard from "../RecipeCard/RecipeCard";
import {
  RecipesContext,
  LoadingContext,
  FetchDataContext,
  SearchContext,
} from "../Context";

const SearchResults = ({setShowRecipeResults}) => {
  const [loading, setLoading] = useContext(LoadingContext);
  const [recipes] = useContext(RecipesContext);
  const setSearch = useContext(SearchContext)[1];
  const fetchData = useContext(FetchDataContext);

  useEffect(() => {
    setLoading(true);
    setSearch(localStorage.getItem("Search"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  useEffect(() => {
    if (loading === true) {
      fetchData();
      setSearch("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <>
      <Banner setShowRecipeResults={setShowRecipeResults}/>
      <div className="searchResults">
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          recipes.map((recipe) => (
            <RecipeCard
              name={recipe.recipe.label}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              key={recipe.recipe.url}
              url={recipe.recipe.url}
              serves={recipe.recipe.yield}
            />
          ))
        )}
      </div>
    </>
  );
};
export default React.memo(SearchResults);

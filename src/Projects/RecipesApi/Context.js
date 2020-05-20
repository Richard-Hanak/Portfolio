import React, { useState } from "react";

export const SearchContext = React.createContext("");
export const RecipesContext = React.createContext([]);
export const LoadingContext = React.createContext(false);
export const FetchDataContext = React.createContext();
export const AlcoholFreeContext = React.createContext(false);

const Context = ({ children }) => {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alcoholFree, setAlcoholFree] = useState(false);

  const fetchData = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${search}&app_id=614706c0&app_key=08a4c941db5e1e2d7db2c6ebac509f78&from=0&to=10&calories=591-722&${
        alcoholFree ? "health=alcohol-free" : ""
      }`
    );
    const data = await response.json();
    localStorage.setItem("Search", search)
    setRecipes(data.hits);
    setLoading(false);
  };

  return (
    <RecipesContext.Provider value={[recipes, setRecipes]}>
      <SearchContext.Provider value={[search, setSearch]}>
        <LoadingContext.Provider value={[loading, setLoading]}>
          <AlcoholFreeContext.Provider value={[alcoholFree, setAlcoholFree]}>
            <FetchDataContext.Provider value={fetchData}>
              {children}
            </FetchDataContext.Provider>
          </AlcoholFreeContext.Provider>
        </LoadingContext.Provider>
      </SearchContext.Provider>
    </RecipesContext.Provider>
  );
};
export default Context;
import React, { useContext } from "react";

import {
  LoadingContext,
  SearchContext,
  AlcoholFreeContext,
} from "../Context";

const Banner = ({setShowRecipeResults}) => {
  const [loading, setLoading] = useContext(LoadingContext);
  const [search, setSearch] = useContext(SearchContext);
  const [alcoholFree, setAlcoholFree] = useContext(AlcoholFreeContext);

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    setShowRecipeResults(true)
    e.preventDefault();
    setLoading(true);
  };

  return (
    <>
    <div className="banner">
        <svg className="home" viewBox="0 0 20 20" width="40" height="40" onClick={(e) => {setShowRecipeResults(false); e.preventDefault()}}>
          <path d="M15.45,7L14,5.551V2c0-0.55-0.45-1-1-1h-1c-0.55,0-1,0.45-1,1v0.553L9,0.555C8.727,0.297,8.477,0,8,0S7.273,0.297,7,0.555  L0.55,7C0.238,7.325,0,7.562,0,8c0,0.563,0.432,1,1,1h1v6c0,0.55,0.45,1,1,1h3v-5c0-0.55,0.45-1,1-1h2c0.55,0,1,0.45,1,1v5h3  c0.55,0,1-0.45,1-1V9h1c0.568,0,1-0.437,1-1C16,7.562,15.762,7.325,15.45,7z" />
        </svg>
      <form onSubmit={handleSubmit}>
        <div className="searchBar">
          <input type="text" value={search} onChange={updateSearch}></input>
          <button type="submit">
            <svg type="submit" viewBox="0 0 30 30" width="30px" height="30px">
              <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
            </svg>
          </button>
        </div>
        <p>
          <input className="checkbox"
            type="checkbox"
            onChange={() => setAlcoholFree(!alcoholFree)}
          ></input>
          Alcohol-free
        </p>
      </form>
    </div>
    </>
  );
};

export default React.memo(Banner);
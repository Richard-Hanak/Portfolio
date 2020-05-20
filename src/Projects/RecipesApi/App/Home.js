import React from "react";

import Banner from "../Banner/Banner";
import EditorsChoice from "../EditorsChoice/EditorsChoice";
import SearchIngredient from "../SearchIngredient/SearchIngredient";
import CloseButton from "../../CloseButton/CloseButton";


const App = () => {
  return (
    <>
      <CloseButton/>
      <Banner />
      <div className="app">
        <EditorsChoice />
        <SearchIngredient />
      </div>
    </>
  );
};
export default App;

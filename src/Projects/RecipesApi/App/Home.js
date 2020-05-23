import React from "react";

import Banner from "../Banner/Banner";
import EditorsChoice from "../EditorsChoice/EditorsChoice";
import SearchIngredient from "../SearchIngredient/SearchIngredient";
import CloseButton from "../../CloseButton/CloseButton";


const Home = () => {
  return (
    <>
      <CloseButton/>
      <Banner />
      <div className="Home">
        <EditorsChoice />
        <SearchIngredient />
      </div>
    </>
  );
};
export default Home;

import React, { useContext } from "react";

import { SearchContext, LoadingContext } from "../Context";

const SearchIngredient = ({ setShowRecipeResults }) => {
  const setSearch = useContext(SearchContext)[1];
  const setLoading = useContext(LoadingContext)[1];

  const handleSubmit = (e) => {
    setShowRecipeResults(true);
    e.preventDefault();
    setLoading(true);
  };

  return (
    <div className="wrapper">
      <form className="ingredients" onSubmit={handleSubmit}>
        <h2>
          Search <br></br>by Ingredient
        </h2>
        <div className="shadow">
          <div className="container">
            <input
              type="image"
              src="https://cdn.pixabay.com/photo/2017/05/15/14/14/lamb-2314965_960_720.jpg"
              alt="search beef"
              onClick={() => setSearch("beef")}
            />
            <p>Beef</p>
          </div>
        </div>
        <div className="shadow">
          <div className="container">
            <input
              type="image"
              src="https://cdn.pixabay.com/photo/2019/04/07/17/20/chicken-4110208_960_720.jpg"
              alt="search chicken"
              onClick={() => setSearch("chicken")}
            />
            <p>Chicken</p>
          </div>
        </div>
        <div className="shadow">
          <div className="container">
            <input
              type="image"
              src="https://cdn.pixabay.com/photo/2014/04/22/02/55/pasta-329521_960_720.jpg"
              alt="search pasta"
              onClick={() => setSearch("pasta")}
            />
            <p>Pasta</p>
          </div>
        </div>
        <div className="shadow">
          <div className="container">
            <input
              type="image"
              src="https://cdn.pixabay.com/photo/2016/06/09/21/31/rosemary-potatoes-1446677_960_720.jpg"
              alt="search potatoes"
              onClick={() => setSearch("potatoes")}
            />
            <p>Potatoes</p>
          </div>
        </div>
        <div className="shadow">
          <div className="container">
            <input
              type="image"
              src="https://cdn.pixabay.com/photo/2018/02/08/12/40/salmon-3139387_960_720.jpg"
              alt="search fish"
              onClick={() => setSearch("fish")}
            />
            <p>Fish</p>
          </div>
        </div>
        <div className="shadow">
          <div className="container">
            <input
              type="image"
              src="https://cdn.pixabay.com/photo/2016/05/31/17/06/spinach-1427360_960_720.jpg"
              alt="search spinach"
              onClick={() => setSearch("spinach")}
            />
            <p>Spinach</p>
          </div>
        </div>
        <div className="shadow">
          <div className="container">
            <input
              type="image"
              src="https://cdn.pixabay.com/photo/2018/01/08/17/28/mushrooms-3069816_960_720.jpg"
              alt="search Mushrooms"
              onClick={() => setSearch("mushrooms")}
            />
            <p>Mushrooms</p>
          </div>
        </div>
        <div className="shadow">
          <div className="container">
            <input
              type="image"
              src="https://cdn.pixabay.com/photo/2016/12/11/22/41/lasagna-1900529_960_720.jpg"
              alt="search cheese"
              onClick={() => setSearch("cheese")}
            />
            <p>Cheese</p>
          </div>
        </div>
        <div className="shadow">
          <div className="container">
            <input
              type="image"
              src="https://cdn.pixabay.com/photo/2017/08/30/15/30/salad-2697546_960_720.jpg"
              alt="search avocado"
              onClick={() => setSearch("avocado")}
            />
            <p>Avocado</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default React.memo(SearchIngredient);

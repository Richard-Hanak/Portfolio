import React from 'react';

const RecipeCard = ({name, image, ingredients, url, serves}) => {

    return (
      <div className="recipeCard">
      <img src={image} alt=""/>
      <h2 className="title">{name}</h2>
      <ul className="ingred">{ingredients.map((ingredient, i) => (
        <li key={i}>{ingredient.text}</li>
      ))}</ul>
      <a className="link" href={url} target="_blank" rel="noopener noreferrer">full recipe</a>
      <p className="serves">serves: {serves}</p>
    </div>
  );
}

export default RecipeCard;
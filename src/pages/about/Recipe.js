// src/Recipe.js
import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = ({ recipe }) => {
  let prodname;

  if (localStorage.getItem('lang') === 'en') {
    prodname = <p>{recipe.name}</p>;
  } else if (localStorage.getItem('lang') === 'ge') {
    prodname = <p>{recipe.namegeo}</p>;
  }

  return (
    <div className="recipe">
      <Link to={`/recipe/${recipe.id}`}>
        <h2>{prodname}</h2>
      </Link>
      <h3>ტიპი: {recipe.type}</h3>
    </div>
  );
};

export default Recipe;

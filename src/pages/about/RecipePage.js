// src/RecipePage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const RecipePage = ({ recipes }) => {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === parseInt(id));

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  let prodname, ingname;

  if (localStorage.getItem('lang') === 'en') {
    prodname = <p>{recipe.name}</p>;
    ingname = Object.entries(recipe.ingredients[0]).map(([key, value]) => (
      <li key={key}>
        {key}: {value}
      </li>
    ));
  } else if (localStorage.getItem('lang') === 'ge') {
    prodname = <p>{recipe.namegeo}</p>;
    ingname = Object.entries(recipe.ingredients[1]).map(([key, value]) => (
      <li key={key}>
        {key}: {value}
      </li>
    ));
  }

  return (
    <div className="recipe">
      <h2>{prodname}</h2>
      <h3>ტიპი: {recipe.type}</h3>
      <ul>
        {ingname}
      </ul>
    </div>
  );
};

export default RecipePage;

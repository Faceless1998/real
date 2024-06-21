// src/Recipe.js
import React from 'react';
import { useTranslation } from "react-i18next";

const Recipe = ({ recipe }) => {
    const changeLanguageHandler = (lang) => {
        localStorage.setItem("lang", lang);
        window.location.reload();
      };

      let prodname;

  if (localStorage.getItem("lang") === "en") {
    prodname = <p>{recipe.name}</p>;
  } else if (localStorage.getItem("lang") === "ge") {
    prodname = <p>{recipe.namegeo}</p>;
  }

  let ingname;

  if (localStorage.getItem("lang") === "en") {
    ingname = 
        Object.entries(recipe.ingredients[0]).map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))
    ;
  } else if (localStorage.getItem("lang") === "ge") {
    ingname = Object.entries(recipe.ingredients[1]).map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))
  }

  return (
    <div className="recipe">
      
      <h2>{prodname}</h2>
      <h3>ტიპი: {recipe.type}</h3>
      <ul>
        {

        }
       {ingname}
      </ul>
    </div>
  );
};

export default Recipe;

// src/RecipeList.js
import React from 'react';
import Recipe from './Recipes';

const recipes = [
  {
    id: 1,
    name:"Banana Cake",
    namegeo: 'მოცვისა და ბანანის კექსი',
    type: 'ნამცხვარი',
    ingredients: [
      {
        eggs: '3 ცალი',
        sugar: '200 გრამე ',
        butter: '150 გრამი',
        flour: '300 გრამი',
        dehydrator: '6 გრამი',
        vanilla: '5 გრამი',
        salt: '1 მწიკვი',
        berries: 'გემოვნებით',
        banana: 'გემოვნებით'
      },
      {
        კვერცხი: '3 ცალი',
        შაქარი: '200 გრამე ',
        butter: '150 გრამი',
        flour: '300 გრამი',
        dehydrator: '6 გრამი',
        vanilla: '5 გრამი',
        salt: '1 მწიკვი',
        berries: 'გემოვნებით',
        banana: 'გემოვნებით'
      }
    ]
  },
  {
    id: 2,
    name: 'strawberry cake',
    namegeo: 'მოცვისა და მარწყვის კექსი',
    type: 'ნამცხვარი',
    ingredients: [
      {
        eggs: '3 ცალი',
        sugar: '200 გრამე ',
        butter: '150 გრამი',
        flour: '300 გრამი',
        dehydrator: '6 გრამი',
        vanilla: '5 გრამი',
        salt: '1 მწიკვი',
        berries: 'გემოვნებით',
        banana: 'გემოვნებით'
      },
      {
        კვერცხი: '3 ცალი',
        sugar: '200 გრამე ',
        butter: '150 გრამი',
        flour: '300 გრამი',
        dehydrator: '6 გრამი',
        vanilla: '5 გრამი',
        salt: '1 მწიკვი',
        berries: 'გემოვნებით',
        banana: 'გემოვნებით'
      }
    ]
  },
  {
    id: 3,
    name:"Pineaple cake",
    namegeo: 'მოცვისა და ანანასის კექსი',
    type: 'ნამცხვარი',
    ingredients: [
      {
        eggs: '3 ცალი',
        sugar: '200 გრამე ',
        butter: '150 გრამი',
        flour: '300 გრამი',
        dehydrator: '6 გრამი',
        vanilla: '5 გრამი',
        salt: '1 მწიკვი',
        berries: 'გემოვნებით',
        banana: 'გემოვნებით'
      },
      {
        კვერცხი: '3 ცალი',
        sugar: '200 გრამე ',
        butter: '150 გრამი',
        flour: '300 გრამი',
        dehydrator: '6 გრამი',
        vanilla: '5 გრამი',
        salt: '1 მწიკვი',
        berries: 'გემოვნებით',
        banana: 'გემოვნებით'
      }
    ]
  }
];

const RecipeList = () => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;

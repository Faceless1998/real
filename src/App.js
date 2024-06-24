import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Book } from "./pages/book/Book";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import RecipeList from "./pages/about/GeneralRecipes";
import RecipePage from "./pages/about/RecipePage";

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


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Book />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
       
        <Route path="/recipe" element={  <RecipeList />} />
        <Route path="/recipe/:id" element={<RecipePage recipes={recipes} /> } />

     </Routes>

    </>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Book } from "./pages/book/Book";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import RecipeList from "./pages/about/GeneralRecipes";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Book />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route  path="/recipe" element={<RecipeList />} />
     </Routes>

    </>
  );
}

export default App;

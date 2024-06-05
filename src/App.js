import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Book } from "./pages/book/Book";
import { CompanyDetails } from "./pages/home/CompanyDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Book />} />
        <Route path="/info/partners/:id" element={<CompanyDetails />} />
      </Routes>
    </>
  );
}

export default App;

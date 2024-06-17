import React, { useEffect, useState } from "react";
import "./search.css";
import axios from "axios";

const Search = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("/books.json")
      .then((response) => setBooks(response.data))
      .catch((error) => console.error("Error Fetching Data ", error));
  }, []);

  useEffect(() => {
    if (searchTerm) {
      setFilteredBooks(
        books.filter((book) =>
          book.title.includes(searchTerm)
        )
      );
    } else {
      setSearchTerm([]);
    }
  }, [searchTerm, books]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="ძებნა"
        className="input"
      />
      <ul className="list">
        {filteredBooks.map((book) =>(
          <li key={book.id} className="list-item">
            {book.title} By {book.author}
          </li>
        ))}
        </ul>
        
    </div>
  );
};

export default Search;

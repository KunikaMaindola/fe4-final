import React, { useState } from "react";
import MoviesList from "./MovieFilter.jsx";
import GenreFilter from "./GenreFilter.jsx";
import data from "../data/data.js";
import "../movie.css"
function App() {
  const [filteredGenre, setFilteredGenre] = useState(null);

  const handleGenreChange = (genre) => {
    setFilteredGenre(genre);
  };

  const filteredMovies = filteredGenre
    ? data.filter((movie) => movie.genre === filteredGenre)
    : data;

  return (
    <main className="">
      <header>
        <h1 className="heading">
          Top 15 Movies of All Time
        </h1>
      </header>
      <nav>
        <GenreFilter onGenreChange={handleGenreChange} />
      </nav>
      <section>
        <MoviesList movies={filteredMovies} />
      </section>
    </main>
  );
}

export default App;
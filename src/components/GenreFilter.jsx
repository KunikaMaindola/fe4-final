import React, { useState } from "react";
import "../movie.css";
function GenreFilter({ onGenreChange }) {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleGenreChange = (genre) => {
    console.log(`Filtering By ${genre}`);
    setSelectedGenre(genre);
    onGenreChange(genre);
  };

  const handleAllMovies = () => {
    setSelectedGenre(null);
    onGenreChange(null);
  };
  return (
    <div className="movie-container flex justify-center rounded-3xl bg-gray-200 ">
      <aside className="genre-container">
        <h2 className="mb-4 text-lg font-semibold">Filter by Genre</h2>
        <button
          className="m-1 rounded bg-gray-300 px-4 py-2 font-bold text-gray-800 hover:bg-gray-400"
          onClick={handleAllMovies}
        >
          All
        </button>
        <button
          className="m-1 rounded bg-gray-300 px-4 py-2 font-bold text-gray-800 hover:bg-gray-400"
          onClick={() => handleGenreChange("Drama")}
        >
          Drama
        </button>
        <button
          className="m-1 rounded bg-gray-300 px-4 py-2 font-bold text-gray-800 hover:bg-gray-400"
          onClick={() => handleGenreChange("Crime")}
        >
          Crime
        </button>
        <button
          className="m-1 rounded bg-gray-300 px-4 py-2 font-bold text-gray-800 hover:bg-gray-400"
          onClick={() => handleGenreChange("Action")}
        >
          Action
        </button>
        <button
          className="m-1 rounded bg-gray-300 px-4 py-2 font-bold text-gray-800 hover:bg-gray-400"
          onClick={() => handleGenreChange("Fantasy")}
        >
          Fantasy
        </button>
        <button
          className="m-1 rounded bg-gray-300 px-4 py-2 font-bold text-gray-800 hover:bg-gray-400"
          onClick={() => handleGenreChange("Western")}
        >
          Western
        </button>
        <button
          className="m-1 rounded bg-gray-300 px-4 py-2 font-bold text-gray-800 hover:bg-gray-400"
          onClick={() => handleGenreChange("Science Fiction")}
        >
          Science Fiction
        </button>
        <button
          className="m-1 rounded bg-gray-300 px-4 py-2 font-bold text-gray-800 hover:bg-gray-400"
          onClick={() => handleGenreChange("Thriller")}
        >
          Thriller
        </button>
        <button
          className="m-1 rounded bg-gray-300 px-4 py-2 font-bold text-gray-800 hover:bg-gray-400"
          onClick={() => handleGenreChange("War")}
        >
          War
        </button>
        <button
          className="m-1 rounded bg-gray-300 px-4 py-2 font-bold text-gray-800 hover:bg-gray-400"
          onClick={() => handleGenreChange("Animation")}
        >
          Animation
        </button>
      </aside>
    </div>
  );
}

export default GenreFilter;
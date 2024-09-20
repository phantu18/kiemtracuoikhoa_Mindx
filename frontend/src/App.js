import React, { useState } from "react";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleClosePopup = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Movie List</h1>
      <MovieList onMovieClick={handleMovieClick} />
      {selectedMovie && (
        <MovieDetail movie={selectedMovie} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default App;

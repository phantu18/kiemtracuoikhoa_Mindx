import React, { useEffect, useState } from "react";
import axios from "axios";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
const MovieList = ({ onMovieClick }) => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const moviesPerPage = 4;

  useEffect(() => {
    axios
      .get("/api/movies")
      .then((response) => setMovies(response.data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  const handleNext = () => {
    if ((currentPage + 1) * moviesPerPage < movies.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="items-center justify-center h-screen from-yellow-200 to-orange-400">
      <div className="flex items-center justify-center w-640 h-390 bg-white  shadow-lg relative">
        {movies
          .slice(currentPage * moviesPerPage, (currentPage + 1) * moviesPerPage)
          .map((movie) => (
            <div
              key={movie.id}
              onClick={() => onMovieClick(movie)}
              className="movie p-6 cursor-pointer"
            >
              <img
                src={movie.image}
                alt={movie.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="title text-gray-700 text-lg mb-1">
                {movie.name}
              </div>
              <div className="flex justify-between text-gray-500 text-xs">
                <span className="length">{movie.time}p</span>
                <span className="year ml-2">{movie.year}</span>
              </div>
            </div>
          ))}
      </div>
      <div className="flex items-center justify-center mt-4 space-x-4">
        {currentPage > 0 && (
          <button
            onClick={handlePrev}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          >
            <GrLinkPrevious />
          </button>
        )}
        {(currentPage + 1) * moviesPerPage < movies.length && (
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            <GrLinkNext />
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieList;

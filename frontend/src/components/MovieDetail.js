import React from "react";

const MovieDetail = ({ movie, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative h-2/6 ">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl text-gray-600 hover:text-gray-800"
        >
          ×
        </button>
        <div className="w-full  ml-4 flex">
          <div className="w-1/2">
            <img
              src={movie.image}
              alt={movie.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
          </div>
          <div className="w-1/2 ml-6">
            <h1 className="text-2xl font-bold mb-2">{movie.name}</h1>
            <span className="mb-4">{movie.time}p</span>
            <div className="mt-4 mb-4">{movie.introduce}</div>
            <button className="px-3 py-2  text-white rounded-md bg-black hover:bg-red-600 hover:text-white">
              Xem Phim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;

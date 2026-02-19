import React from 'react';

const MovieCard = ({ title, image, year }) => {
  return (
    <div className="w-48 bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300 cursor-pointer">
  
      <img
        src={image}
        alt={title}
        className="w-full h-72 object-cover"
      />

     
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {title}
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          {year}
        </p>
      </div>

    </div>
  );
};

export default MovieCard;
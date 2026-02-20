const MovieCard = ({ title, image, year, rating, description }) => {
  return (
    <div className="w-56 bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300 cursor-pointer">

     
      <img
        src={image}
        alt={title}
        className="w-full h-62 object-cover"
      />

     
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {title}
        </h3>

        <p className="text-sm text-gray-500">{year}</p>

        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {description}
        </p>

        <div className="mt-3 flex justify-between items-center">
          <span className="text-yellow-500 font-bold">
            ⭐ {rating}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
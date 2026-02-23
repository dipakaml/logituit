import movies from '../data/movies';
import MovieCard from '../components/MovieCard';
import Navbar from '../components/Navbar';
import bg from '../assets/bg.jpg';
import { useState } from 'react';

const Home = () => {

     
     const [searchTerm, setSearchTerm] = useState('');//input store krte
     
     const [filteredMovies, setFilteredMovies] = useState(movies);//filter krte
      
     const handleSearch=()=>{
      const result=movies.filter((movie)=>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()))
      setFilteredMovies(result)
     }





  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Navbar />

      <div className="min-h-screen w-full bg-black/70 px-8 pt-120 pb-10">
        
        <div className="flex justify-center items-center gap-4 mb-12">

          <input
            type="text"
            placeholder="Enter Movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 w-80 rounded-md outline-none bg-white text-black border border-gray-300 focus:ring-2 focus:ring-red-500"
          />

          <button onClick={handleSearch}  className="bg-red-500 text-white px-5 py-2 rounded-md transition duration-300 hover:bg-red-600 cursor-pointer">
            Search
          </button>

        </div>

      
        {filteredMovies.length > 0 ? (
          <div className="flex flex-wrap gap-6 justify-center">
            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                image={movie.image}
                year={movie.year}
                rating={movie.rating}
                description={movie.description}
              />
            ))}
          </div>
        ) : (
          <p className="text-white text-xl text-center">
            Movie not found
          </p>
        )}

      </div>
    </div>
  );
};

export default Home;
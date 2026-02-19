import movies from '../data/movies';
import MovieCard from '../components/MovieCard';
import Navbar from '../components/Navbar';
import bg from '../assets/bg.jpg';

const Home = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Navbar />

      {/* Overlay */}
      <div className="min-h-screen w-full bg-black/70 px-8 pt-24 pb-10">
        
        <h1 className="text-white text-4xl font-bold text-center mb-12">
          Movie List
        </h1>

        <div className="flex flex-wrap gap-6 justify-center">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              image={movie.image}
              year={movie.year}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Home;
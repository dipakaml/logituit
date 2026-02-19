const Navbar = () => {
  return (
    <nav className="w-full bg-black/80 backdrop-blur-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Title */}
        <h1 className="text-red-600 text-2xl font-bold tracking-wide">
          MovieList
        </h1>

        {/* Right side items (optional) */}
        <ul className="hidden md:flex gap-6 text-white text-sm font-medium">
          <li className="hover:text-red-500 cursor-pointer">Home</li>
          <li className="hover:text-red-500 cursor-pointer">Movies</li>
          <li className="hover:text-red-500 cursor-pointer">New</li>
          <li className="hover:text-red-500 cursor-pointer">My List</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
import { useNavigate } from 'react-router-dom';
import logo from '../assets/netflix.svg'
import SignUp from '../pages/SignUp';
const Navbar = () => {
  const navigate=useNavigate();
  return (
    <header className="w-full bg-black/80 backdrop-blur-md fixed top-0 left-0 z-50">
       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer">
          <img
           src={logo} alt="MovieFlix Logo"
           className='h-8 w-auto object-contain' />
        </div>
         <nav className='flex  *:items-center gap-6'>
          <ul className="hidden md:flex gap-6 text-white text-sm font-medium">
            <li className="hover:text-red-500 cursor-pointer">Home</li>
            <li className="hover:text-red-500 cursor-pointer">Movies</li>
            <li className="hover:text-red-500 cursor-pointer">TV Shows</li>
            <li className="hover:text-red-500 cursor-pointer">List</li>
          </ul>
          <button className='bg-red-500 rounded-md transition text-sm p-1  hover:bg-red-300 cursor-pointer hover:text-blue-500 ' onClick={()=>navigate("/signup")} >Signup
            </button>     
             </nav>
       </div>
       
    </header>
  );
};

export default Navbar;
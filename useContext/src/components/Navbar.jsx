import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <nav className="p-4 bg-gradient-to-r from-purple-500 to-indigo-600 shadow-md flex justify-between items-center">
      <h1 className="text-white text-xl font-bold">MyReactApp</h1>
      <div className="space-x-4">
        {isLoggedIn && (
          <>
            <Link className="text-white hover:text-yellow-300 transition" to="/">Home</Link>
            <Link className="text-white hover:text-yellow-300 transition" to="/about">About</Link>
            <Link className="text-white hover:text-yellow-300 transition" to="/contact">Contact</Link>
            <button 
              onClick={logout} 
              className="ml-4 px-3 py-1 bg-yellow-400 rounded-lg hover:bg-yellow-500 transition"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

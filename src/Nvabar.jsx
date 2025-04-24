import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Navbar = () => {
  const { token, logout } = useAuth(); // Get token and logout function from context

  return (
    <div className="bg-gray-800 p-4 flex justify-between">
      <Link to="/" className="text-white">Home</Link>

      {token ? (
        // If user is authenticated, show profile and logout
        <>
          <Link to="/profile" className="text-white">Profile</Link>
          <button onClick={logout} className="bg-red-500 text-white p-2">
            Logout
          </button>
        </>
      ) : (
        // If user is not authenticated, show login and register
        <>
          <Link to="/login" className="text-white">Login</Link>
          <Link to="/register" className="text-white">Register</Link>
        </>
      )}
    </div>
  );
};

export default Navbar;

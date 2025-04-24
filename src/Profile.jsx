import React from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { token, logout } = useAuth(); // Access token and logout function from AuthContext
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();             // Clear token from context and localStorage
    navigate('/login');   // Redirect to login page after logout
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-2xl rounded-2xl text-center">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">👤 Profile Page</h1>
      {token ? (
        <>
          {/* Show token if logged in */}
          <p className="mb-4 text-gray-600">You are logged in with token:</p>
          <div className="bg-gray-100 p-4 rounded break-words text-sm text-gray-700">
            {token}
          </div>
          {/* Logout button */}
          <button
            onClick={handleLogout}
            className="mt-6 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Log out
          </button>
        </>
      ) : (
        // Show message if user is not logged in
        <p className="text-red-600">You are not logged in!</p>
      )}
    </div>
  );
};

export default Profile;

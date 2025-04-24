import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Login from './Login';
import Register from './Register';
import Navbar from './Nvabar';
import Profile from './Profile';

const App = () => {
  return (
      <Router>
        <AuthProvider>
          <Navbar />
          <div className="p-4">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<div>Welcome Home!</div>} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </AuthProvider>
      </Router>

  );
};

export default App;

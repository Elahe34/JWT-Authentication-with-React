import React, { createContext, useContext, useState, useEffect } from 'react';

// Create AuthContext to share authentication state
const AuthContext = createContext();

// Custom hook to use the AuthContext in any component
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  // Initialize token state from localStorage if available
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    console.log("Token in AuthContext on load:", localStorage.getItem('token'));
    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'));
    }
  }, []);

  // Save token in both state and localStorage on login
  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
  };

  // Clear token from state and localStorage on logout
  const logout = () => {
    setToken('');
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

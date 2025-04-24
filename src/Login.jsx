import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth(); // Get login function from AuthContext
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      // Handle different status codes from API
      if (response.status === 200) {
        const data = await response.json();
        login(data.token);     // Save token in context
        navigate('/profile');  // Redirect to profile page
      } else if (response.status === 400) {
        alert('Invalid request, check your data!');
      } else if (response.status === 401) {
        alert('Invalid credentials, please try again.');
      } else {
        alert('Login failed, please try again later.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('There was an error. Please try again later.');
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      {/* Email input */}
      <input
        className="border p-2 mb-2 w-full"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* Password input */}
      <input
        className="border p-2 mb-2 w-full"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* Login button */}
      <button onClick={handleLogin} className="bg-blue-500 text-white p-2 w-full">
        Login
      </button>
    </div>
  );
};

export default Login;

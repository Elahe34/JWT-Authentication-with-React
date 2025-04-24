import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Custom hook for accessing authentication context

const Register = () => {
  const { login } = useAuth(); // Get login function from AuthContext
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    const fixedEmail = 'eve.holt@reqres.in';
    const fixedPassword = 'pistol';

    // Simulate simple client-side validation
    if (email === fixedEmail && password === fixedPassword) {
      try {
        const response = await fetch('https://reqres.in/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        // Check if registration is successful
        if (response.status === 200) {
          const data = await response.json();
          console.log("Token received:", data.token);
          login(data.token); // Save token in context and localStorage
          navigate('/profile'); // Redirect to profile page after successful registration
        } else if (response.status === 400) {
          alert('Invalid data, please check your input.');
        } else {
          alert('Registration failed, please try again later.');
        }
      } catch (error) {
        console.error('Error during registration:', error);
        alert('There was an error. Please try again later.');
      }
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      {/* Email Input */}
      <input
        className="border p-2 mb-2 w-full"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* Password Input */}
      <input
        className="border p-2 mb-2 w-full"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* Register Button */}
      <button onClick={handleRegister} className="bg-green-500 text-white p-2 w-full">
        Register
      </button>
    </div>
  );
};

export default Register;

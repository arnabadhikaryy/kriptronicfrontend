
import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [password, setpassword] = useState('');
  const [roll, setRoll] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    
    const data = {
      password: password,
      roll: roll,
    };

    try {
      
      const response = await axios.post('http://localhost:9000/login', data, {
        withCredentials: true, 
      });

      if (response.status === 200) {
    setMessage('Login successful!');
      }
    } catch (error) {
      if (error.response) {
        setMessage('Login failed: ' + error.response.data.error);
      } else {
        setMessage('Login failed: ' + error.message);
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-md shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">password</label>:</label>
            <input
              type="text"
              value={password}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 mt-2 border rounded-md"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Roll Number:</label>
            <input
              type="text"
              value={roll}
              onChange={(e) => setRoll(e.target.value)}
              className="w-full p-2 mt-2 border rounded-md"
              placeholder="Enter your roll number"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        {message && (
          <div className="mt-4 text-center">
            <p className={message.includes('success') ? 'text-green-500' : 'text-red-500'}>
              {message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginForm;

import React, { useState, useEffect } from 'react';
import '../styles/Login.css';
import { Link } from 'react-router-dom';
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    // Get data from localStorage and pre-fill form
    const signupData = JSON.parse(localStorage.getItem('signupData'));
    if (signupData) {
      setFormData({
        email: signupData.email || '',
        password: signupData.password || ''
      });
      localStorage.removeItem('signupData'); // Clear data after use
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', formData);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
       <Link to="/home"> <button type="submit">Login</button></Link>
      </form>
    </div>
  );
};

export default Login;

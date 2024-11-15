import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registration successful!");
      } else {
        alert(data.message || "Registration failed!");
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">Register</button>
      </form>

      <button onClick={goToLogin}>
        Already have an account? Go to Login
      </button>
      
    </div>
  );
};

export default Registration;

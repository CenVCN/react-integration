import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Registration.jsx';
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';

function AppRouter() {
  const [token, setToken] = useState(null); // Manage token state

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect to login */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setToken={setToken} />} /> {/* Pass setToken to Login */}
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
  );
}

export default AppRouter;

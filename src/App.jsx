// src/components/App.js
import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Events from './Events';
import LandingPage from './LandingPage';
import Login from './Login';
import MyEvents from './MyEvents';
import Register from './Register';
import ResetPassword from './ResetPassword'; // Import your ResetPassword component
import EditEvent from './EditEvent'; // Import the EditEvent component

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleRegisterClick = () => {
        navigate('/register');
    };

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
        navigate('/events'); // Redirect to events page after login
    };

    const handleRegisterSuccess = () => {
        navigate('/login'); // Redirect to login page after registration
    };

    return (
        <Routes>
            <Route path="/" element={<LandingPage onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} />} />
            <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
            <Route path="/register" element={<Register onRegisterSuccess={handleRegisterSuccess} />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            {isLoggedIn && (
                <>
                    <Route path="/events" element={<Events />} />
                    <Route path="/my-events" element={<MyEvents />} />
                    <Route path="/edit-event/:id" element={<EditEvent />} /> {/* Add this line */}
                </>
            )}
        </Routes>
    );
}

export default App;

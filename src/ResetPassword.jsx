import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    // Get token from URL query params
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');

    // Handle the reset password form submission
    const handleResetPassword = () => {
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        fetch(`http://localhost:8080/api/users/reset-password?token=${token}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to reset password');
            }
            alert('Password reset successful. You can now log in.');
            navigate('/login'); // Redirect to login after success
        })
        .catch(error => {
            console.error('Error during password reset:', error);
            setError('Failed to reset password. Please try again.');
        });
    };

    return (
        <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Reset Password</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <input
                type="password"
                className="border p-2 mb-4 w-full"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="password"
                className="border p-2 mb-4 w-full"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button onClick={handleResetPassword} className="px-6 py-2 bg-blue-500 text-white rounded-lg w-full">Reset Password</button>
        </div>
    );
};

export default ResetPassword;

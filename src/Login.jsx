// src/components/Login.jsx
// // eslint-disable-next-line no-unused-vars
// import React, { useState } from 'react';

// const Login = ({ onLoginSuccess }) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const handleLogin = () => {
//         fetch('http://localhost:8080/api/users/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ username, password })
//         })
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Login failed');
//                 }
//                 return response.text();
//             })
//             .then(token => {
//                 localStorage.setItem('token', token);
//                 localStorage.setItem('username', username);
//                 onLoginSuccess();
//             })
//             .catch(error => {
//                 console.error('Error during login:', error);
//                 setError('Login failed. Please check your credentials.');
//             });
//     };

//     return (
//         <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md">
//             <h2 className="text-xl font-bold mb-4">Login</h2>
//             {error && <p className="text-red-500 mb-4">{error}</p>}
//             <input
//                 type="text"
//                 className="border p-2 mb-4 w-full"
//                 placeholder="Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//             />
//             <input
//                 type="password"
//                 className="border p-2 mb-4 w-full"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//             />
//             <button onClick={handleLogin} className="px-6 py-2 bg-blue-500 text-white rounded-lg w-full">Login</button>
//         </div>
//     );
// };

// export default Login;

// src/components/Login.jsx
import React, { useState } from 'react';

const Login = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [email, setEmail] = useState(''); // For forgot password
    const [isForgotPassword, setIsForgotPassword] = useState(false); // Toggling between login and forgot password

    // Handle login
    const handleLogin = () => {
        fetch('http://localhost:8080/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Login failed');
                }
                return response.text();
            })
            .then(token => {
                localStorage.setItem('token', token);
                localStorage.setItem('username', username);
                onLoginSuccess();
            })
            .catch(error => {
                console.error('Error during login:', error);
                setError('Login failed. Please check your credentials.');
            });
    };

    // Handle forgot password
    const handleForgotPassword = () => {
        fetch('http://localhost:8080/api/users/forgot-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to send reset password email');
                }
                alert('Password reset email sent! Check your inbox.');
                setIsForgotPassword(false); // Go back to login after email is sent
            })
            .catch(error => {
                console.error('Error during forgot password:', error);
                setError('Failed to send reset password email.');
            });
    };

    return (
        <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">{isForgotPassword ? 'Forgot Password' : 'Login'}</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}

            {isForgotPassword ? (
                // Forgot Password Form
                <div>
                    <input
                        type="email"
                        className="border p-2 mb-4 w-full"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button onClick={handleForgotPassword} className="px-6 py-2 bg-blue-500 text-white rounded-lg w-full">Send Reset Email</button>
                    <p className="mt-4 text-blue-600 cursor-pointer" onClick={() => setIsForgotPassword(false)}>Back to Login</p>
                </div>
            ) : (
                // Login Form
                <div>
                    <input
                        type="text"
                        className="border p-2 mb-4 w-full"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        className="border p-2 mb-4 w-full"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleLogin} className="px-6 py-2 bg-blue-500 text-white rounded-lg w-full">Login</button>
                    <p className="mt-4 text-blue-600 cursor-pointer" onClick={() => setIsForgotPassword(true)}>Forgot Password?</p>
                </div>
            )}
        </div>
    );
};

export default Login;
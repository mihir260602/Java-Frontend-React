// src/components/Main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
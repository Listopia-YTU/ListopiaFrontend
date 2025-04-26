import React from 'react';
import ReactDOM from 'react-dom/client';

import { AuthProvider } from './auth/hooks/AuthContext';
import App from './App';

import './style.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AuthProvider>
            <App />
        </AuthProvider>
    </React.StrictMode>
);

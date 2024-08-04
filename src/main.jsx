import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { DarkModeContextProvider } from './context/darkModeContext';

const root = createRoot(document.getElementById('root'));
root.render(
    <DarkModeContextProvider>
        <App />
    </DarkModeContextProvider>
);

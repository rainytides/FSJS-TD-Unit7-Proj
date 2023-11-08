// Importing necessary modules from React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // For handling routing
import App from './App'; // The main App component
import './index.css'; // Global styles

// Get the root DOM node
const rootElement = document.getElementById('root');

// Create a React root from the root DOM node
const root = ReactDOM.createRoot(rootElement);

// Render the App component to the root
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

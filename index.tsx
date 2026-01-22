import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Loader removal logic
const loader = document.getElementById("initial-loader");

if (loader) {
  // Add a small delay/timeout to ensure smooth transition after React initializes
  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.3s ease";
    setTimeout(() => loader.remove(), 350);
  }, 100);
}
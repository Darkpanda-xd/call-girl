// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Guwahati from './Pages/Guwahati.jsx';

// const router = createBrowserRouter([
//   { path: '/', element: <App /> },
//   { path: '/guwahati', element: <Guwahati /> },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
        <App/>
    </HelmetProvider>
  </React.StrictMode>
);

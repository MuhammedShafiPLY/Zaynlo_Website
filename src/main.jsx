import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' 
import { HelmetProvider } from 'react-helmet-async' 
import App from './App'
import './index.css'

const rootElement = document.getElementById('root');

const appContent = (
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

// CONDITIONAL RENDERING FOR SEO (Hydration)
if (rootElement.hasChildNodes()) {
  // If HTML exists (pre-rendered), use hydrateRoot to attach event listeners
  ReactDOM.hydrateRoot(rootElement, appContent);
} else {
  // If no HTML exists (standard loading), use createRoot to build the app
  ReactDOM.createRoot(rootElement).render(appContent);
}
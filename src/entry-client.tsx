import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { LoadingSpinner } from './components/LoadingSpinner';
import './index.css';

function ClientApp() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Set hydrated state after initial render
    setIsHydrated(true);
  }, []);

  return (
    <>
      {!isHydrated ? (
        <LoadingSpinner />
      ) : (
        <BrowserRouter>
          <App />
        </BrowserRouter>
      )}
    </>
  );
}

ReactDOM.hydrateRoot(
  document.getElementById('root')!,
  <ClientApp />
);
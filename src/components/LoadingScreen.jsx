import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-container">
        <div className="playstation-logo">
          <div className="ps-symbol">
            <span>PS</span>
          </div>
        </div>
        <div className="loading-spinner"></div>
        <p>Carregando...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;

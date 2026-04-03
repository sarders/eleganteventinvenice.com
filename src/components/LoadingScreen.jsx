import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onComplete }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Inizia la transizione di dissolvenza dopo 2.5 secondi
    const timer1 = setTimeout(() => {
      setIsFadingOut(true);
    }, 2800);

    // Smonta definitivamente il componente dopo 3.6 secondi
    const timer2 = setTimeout(() => {
      onComplete();
    }, 3600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div className={`loading-screen ${isFadingOut ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <h1 className="loading-logo">Elegant Event</h1>
        <span className="loading-script">in Venice</span>
        
        {/* Decorazioni Minimali */}
        <div className="minimal-balloon mb-1"></div>
        <div className="minimal-balloon mb-2"></div>
        <div className="minimal-balloon mb-3"></div>
        <div className="minimal-balloon mb-4"></div>
        
        <div className="minimal-flower mf-1">
           <div className="min-petal"></div><div className="min-petal"></div><div className="min-petal"></div><div className="min-petal"></div><div className="min-center"></div>
        </div>
        <div className="minimal-flower mf-2">
           <div className="min-petal"></div><div className="min-petal"></div><div className="min-petal"></div><div className="min-petal"></div><div className="min-center"></div>
        </div>
        <div className="minimal-flower mf-3">
           <div className="min-petal"></div><div className="min-petal"></div><div className="min-petal"></div><div className="min-petal"></div><div className="min-center"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

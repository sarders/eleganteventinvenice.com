import React, { useState } from 'react';
import Header from './components/Header';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <Header />
      <Services />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;

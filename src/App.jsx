import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import EventCard from './components/EventCard';
import { getCurrentEvent } from './utils/getEventData';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Rileva se l'URL corrente è un link dedicato a un evento
  const { event, isEventRoute, slug } = useMemo(() => getCurrentEvent(), []);

  // Se l'utente sta navigando verso una pagina evento (es. /2026-10-31.it)
  if (isEventRoute) {
    return <EventCard event={event} slug={slug} />;
  }

  // Altrimenti mostra la Home Page istituzionale del sito
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

import React from 'react';
import './EventCard.css';

const EventCard = ({ event, slug }) => {
  // Se l'evento per la data richiesta non è stato trovato
  if (!event) {
    return (
      <main className="event-page">
        <header className="event-header">
          <a href="/" className="event-brand-link">
            <img src="/logo.jpg" alt="Logo Elegant Event in Venice" className="event-brand-logo" />
            <div className="event-brand-text">
              <span className="event-brand-title">Elegant Event</span>
              <span className="event-brand-sub">in Venice</span>
            </div>
          </a>
        </header>

        <section className="event-card-container event-not-found">
          <h2 className="not-found-title">Evento Non Trovato</h2>
          <p className="not-found-desc">
            Nessun evento associato al riferimento: <strong>{slug}</strong>
          </p>
          <a href="/" className="btn-editorial">Torna alla Home</a>
        </section>

        <footer className="event-page-footer">
          <p className="footer-bottom">
            &copy; {new Date().getFullYear()} Elegant Event in Venice. All rights reserved.
          </p>
        </footer>
      </main>
    );
  }

  return (
    <main className="event-page">
      {/* Intestazione Brand */}
      <header className="event-header">
        <a href="/" className="event-brand-link" title="Vai alla Home Page">
          <img src="/logo.jpg" alt="Logo Elegant Event in Venice" className="event-brand-logo" />
          <div className="event-brand-text">
            <span className="event-brand-title">Elegant Event</span>
            <span className="event-brand-sub">in Venice</span>
          </div>
        </a>
      </header>

      {/* Card Biglietto da Visita / Riepilogo Evento */}
      <article className="event-card-container animate-fade-in">
        <div className="event-meta">
          <p className="event-date">{event.date}</p>
          {event.eventType && <p className="event-type">{event.eventType}</p>}
        </div>

        <h1 className="event-clients">{event.clientNames}</h1>

        {/* Foto ricordo dell'evento (se fornita) */}
        {event.photo && (
          <div className="event-photo-wrapper">
            <img 
              src={event.photo} 
              alt={`${event.clientNames} - ${event.eventType || 'Evento a Venezia'}`} 
              className="event-photo" 
              loading="lazy" 
            />
          </div>
        )}

        {/* Frase Fissa Richiesta */}
        <div className="event-fixed-statement">
          <p className="statement-phrase">DELIGHTED TO BE PART OF YOUR SPECIAL DAY</p>
          <p className="statement-signature">Elegant Event in Venice</p>
        </div>

        {/* Messaggio o dedica facoltativa */}
        {event.personalMessage && (
          <p className="event-message">
            “{event.personalMessage}”
          </p>
        )}
      </article>

      {/* Footer pulito con link per visitare il sito completo */}
      <footer className="event-page-footer">
        <a href="/" className="event-back-btn">
          Visita il nostro sito ufficiale &rarr;
        </a>
      </footer>
    </main>
  );
};

export default EventCard;

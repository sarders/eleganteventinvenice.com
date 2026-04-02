import React from 'react';
import './Services.css';

const servicesData = [
  {
    title: "Matrimoni Esclusivi",
    desc: "Progettazione e design completo del tuo giorno speciale con incredibile attenzione ad ogni dettaglio, fiori e atmosfera.",
    img: "/user_indian_wedding.jpg"
  },
  {
    title: "Eventi Privati",
    desc: "Compleanni e feste private curate con classe e un tocco di magia, per rendere indimenticabile ogni piccolo o grande traguardo.",
    img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800"
  }
];

const Services = () => {
  return (
    <section id="services" className="services-editorial section-padding">
      <div className="container">
        
        <div className="editorial-header text-center border-b">
          <h2 className="section-title">L'Evento va in Scena</h2>
          <div className="section-subtitle service-intro-text">
            <p><strong>💍 Rendiamo unico ogni momento speciale.</strong></p>
            <p>Dai matrimoni da sogno ai compleanni più eleganti, Elegant Event in Venice cura ogni dettaglio con stile, passione e creatività.</p>
            <p>🌸 Scenografie incantevoli, decorazioni floreali, luci d’atmosfera e un tocco di magia veneziana per trasformare ogni evento in un’esperienza indimenticabile.</p>
            <p>📍 Venezia – Organizziamo matrimoni, ricevimenti, feste e decorazioni personalizzate in tutta la città.</p>
            <p>📱 WhatsApp: +39 328 257 5318 / +39 327 182 1877</p>
          </div>
        </div>

        <div className="services-list">
          {servicesData.map((service, index) => (
            <div key={index} className={`service-row ${index % 2 !== 0 ? 'reverse' : ''} border-b`}>
              <div className="service-image-box">
                <img src={service.img} alt={service.title} />
              </div>
              <div className="service-text-box">
                <h3>{service.title}</h3>
                <div className="service-divider"></div>
                <p>{service.desc}</p>
                <a href="#contact" className="btn-editorial mt-4">Scopri di Più</a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;

import React from 'react';
import './Gallery.css';

const works = [
  { img: '/portfolio/compleanni/558856121_122098014207065542_8962317239834823206_n.jpg', title: 'Intimate Celebrations' },
  { img: '/portfolio/compleanni/559094465_122098014147065542_7266752113378354887_n.jpg', title: 'Elegant Details' },
  { img: '/portfolio/compleanni/560731574_122098214097065542_1810563069141972491_n.jpg', title: 'Dreamy Venues' },
  { img: '/portfolio/compleanni/572075528_122104682973065542_3706115628831252811_n.jpg', title: 'Bespoke Atmospheres' },
  { img: '/portfolio/compleanni/572853520_122105541357065542_3114655042616786855_n.jpg', title: 'Luxury Touch' },
  { img: '/portfolio/compleanni/658670783_956445180238734_7437030601319019212_n.jpg', title: 'Timeless Beauty' }
];

const Gallery = () => {
  return (
    <section id="works" className="editorial-gallery section-padding border-b">
      <div className="container">
        
        <div className="editorial-header text-center">
          <h2 className="section-title">Portfolio</h2>
          <p className="section-subtitle">Momenti catturati nel tempo, dove la luce incontra la perfezione estetica.</p>
        </div>

        <div className="gallery-grid">
          {works.map((work, index) => (
             <div key={index} className="gallery-item animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
               <img src={work.img} alt="Portfolio" />
               <div className="gallery-text">
                 <h4>{work.title}</h4>
               </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Gallery;

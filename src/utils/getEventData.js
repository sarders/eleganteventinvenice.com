// Carica dinamicamente tutti i file evento JSON dalla cartella /src/data/events/
const eventModules = import.meta.glob('../data/events/*.json', { eager: true });

export function getAllEvents() {
  const events = {};

  for (const path in eventModules) {
    // Ignora i file template o di documentazione che iniziano con _
    const filename = path.split('/').pop().replace(/\.json$/i, '');
    if (filename.startsWith('_')) continue;

    const data = eventModules[path].default || eventModules[path];
    
    // Registra l'evento tramite il suo id interno
    if (data.id) {
      events[data.id.toLowerCase()] = data;
      // Registra anche la versione con suffisso .it se non già presente
      events[`${data.id.toLowerCase()}.it`] = data;
    }

    // Registra anche direttamente tramite il nome del file (es: 2026-10-31)
    events[filename.toLowerCase()] = data;
    events[`${filename.toLowerCase()}.it`] = data;
  }

  return events;
}

export function getCurrentEvent() {
  if (typeof window === 'undefined') return { event: null, isEventRoute: false, slug: '' };

  // 1. Estrai eventuale slug dal pathname (es. /2026-10-31.it oppure /2026-10-31)
  const pathname = window.location.pathname.replace(/^\/+|\/+$/g, '');
  
  // 2. Fallback da query parameter (es. ?event=2026-10-31 o ?e=2026-10-31)
  const searchParams = new URLSearchParams(window.location.search);
  const queryParam = searchParams.get('event') || searchParams.get('e');

  // 3. Fallback da hash (es. #/2026-10-31 o #2026-10-31)
  const hashParam = window.location.hash.replace(/^#\/?/, '');

  const slug = (pathname || queryParam || hashParam || '').trim().toLowerCase();

  // Se siamo sulla home page (slug vuoto o index.html)
  if (!slug || slug === 'index.html' || slug === 'index') {
    return { event: null, isEventRoute: false, slug: '' };
  }

  const events = getAllEvents();

  // Verifica corrispondenza diretta, o togliendo l'eventuale estensione .it
  const cleanSlug = slug.replace(/\.it$/i, '');
  const foundEvent = events[slug] || events[cleanSlug] || events[`${cleanSlug}.it`];

  return {
    event: foundEvent || null,
    isEventRoute: true, // L'utente sta provando ad accedere a un link personalizzato
    slug
  };
}

# Cartella Foto Lavori

Inserisci all'interno di questa cartella (`public/portfolio/`) le foto originali dei tuoi eventi o lavori. Queste immagini non avranno bisogno di essere "importate" tramite codice, ma potrai semplicemente scriverne il percorso.

**Come usare queste foto nella Galleria:**
1. Salva la tua foto qui, ad esempio con il nome `matrimonio1.jpg`.
2. Apri il file `src/components/Gallery.jsx`.
3. Nel blocco di informazioni `works`, modifica la voce `img` in questo modo:

```javascript
{ img: '/portfolio/matrimonio1.jpg', title: 'Il Mio Titolo', delay: 'delay-1' }
```
In automatico il sito pescherà la foto e la mostrerà!

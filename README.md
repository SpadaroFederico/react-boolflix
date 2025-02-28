# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


1. app per gestire lo stato globale e la logica della ricerca
2. SearchBar: componente per l’input 
3. MovieList: visualizza i risultati ottenuti.
4. MovieCard: mostra le informazioni del singolo film/serie

Milestone 0: Strutturare il Global State
Definiamo lo stato globale per gestire risultati della ricerca e altre informazioni

 Milestone 1: Layout Base e Prima Chiamata API
Creiamo una search bar con input e bottone.
Facciamo la prima chiamata API per i film e visualizziamo:
Titolo
Titolo Originale
Lingua 
Voto 

 Milestone 2: Aggiunta Serie TV e Bandiere
Aggiungiamo la chiamata API per le serie TV.
Sostituiamo il codice della lingua con la bandiera della nazione.


Milestone 3: Poster, Voto a Stelle
Mostriamo la copertina del film/serie.
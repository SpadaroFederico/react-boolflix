import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import "./App.css";

const API_KEY = "3d2f7b4506c7c6af335517dd5f8c25b0";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w342";
const LANGUAGE_CODES = {
  en: "gb",
  it: "it",
  fr: "fr",
  es: "es",
  de: "de",
  ja: "jp",
  ko: "kr",
};

function App() {
  const [results, setResults] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [recommendedSeries, setRecommendedSeries] = useState([]);

  useEffect(() => {
    const fetchRecommended = async () => {
      try {
        const movieResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=it-IT&page=1`
        );
        const seriesResponse = await axios.get(
          `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=it-IT&page=1`
        );
        setRecommendedMovies(movieResponse.data.results.slice(0, 10));
        setRecommendedSeries(seriesResponse.data.results.slice(0, 10));
      } catch (error) {
        console.error("Errore nel recupero dei film/serie consigliati", error);
      }
    };
    fetchRecommended();
  }, []);

  const searchMedia = async (query) => {
    if (!query) return;
    try {
      const movieResponse = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=it-IT`
      );
      const tvResponse = await axios.get(
        `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${query}&language=it-IT`
      );
      setResults([...movieResponse.data.results, ...tvResponse.data.results]);
    } catch (error) {
      console.error("Errore nella chiamata API", error);
    }
  };

  return (
    <div className="app">
      <header>
        <h1>BoolFlix</h1>
        <SearchBar onSearch={searchMedia} />
      </header>
      <main>
        <section className="carousel">
          <h2>Film Consigliati</h2>
          <div className="carousel-container">
            <MovieList movies={recommendedMovies} languageCodes={LANGUAGE_CODES} imageBaseUrl={IMAGE_BASE_URL} />
          </div>
        </section>
        <section className="carousel">
          <h2>Serie TV Consigliate</h2>
          <div className="carousel-container">
            <MovieList movies={recommendedSeries} languageCodes={LANGUAGE_CODES} imageBaseUrl={IMAGE_BASE_URL} />
          </div>
        </section>
        {results.length > 0 && (
          <section>
            <h2>Risultati della ricerca</h2>
            <MovieList movies={results} languageCodes={LANGUAGE_CODES} imageBaseUrl={IMAGE_BASE_URL} />
          </section>
        )}
      </main>
    </div>
  );
}

export default App;

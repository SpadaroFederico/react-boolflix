import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

const API_KEY = "3d2f7b4506c7c6af335517dd5f8c25b0";

const LANGUAGE_CODES = {
  en: "gb",
  it: "it",
  fr: "fr",
  es: "es",
  de: "de",
  ja: "jp",
  ko: "kr"
};

function App() {
  const [results, setResults] = useState([]);
  const [imageBaseUrl, setImageBaseUrl] = useState(""); 

  useEffect(() => {
    const fetchImageBaseUrl = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`
        );
        const baseUrl = response.data.images.base_url; 
        setImageBaseUrl(baseUrl); 
      } catch (error) {
        console.error("Errore nel recupero dell'URL base delle immagini", error);
      }
    };

    fetchImageBaseUrl();
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

      // Unire i risultati di film e serie
      const combinedResults = [...movieResponse.data.results, ...tvResponse.data.results];
      setResults(combinedResults);
    } catch (error) {
      console.error("Errore nella chiamata API", error);
    }
  };

  return (
    <div>
      <h1>BoolFlix</h1>
      <SearchBar onSearch={searchMedia} />
      <MovieList movies={results} languageCodes={LANGUAGE_CODES} imageBaseUrl={imageBaseUrl} />
    </div>
  );
}

export default App;

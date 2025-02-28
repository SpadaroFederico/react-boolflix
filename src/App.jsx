import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);
  const API_KEY = "3d2f7b4506c7c6af335517dd5f8c25b0";

  const searchMovies = async (query) => {
    if (!query) return;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=it-IT`;
    try {
      const response = await axios.get(url);
      setMovies(response.data.results);
    } catch (error) {
      console.error("Errore nella chiamata API", error);
    }
  };

  return (
    <div>
      <h1>BoolFlix</h1>
      <SearchBar onSearch={searchMovies} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
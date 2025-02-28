function MovieList({ movies }) {
    return (
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title} ({movie.original_title})</h3>
            <p>Lingua: {movie.original_language}</p>
            <p>Voto: {movie.vote_average}</p>
          </li>
        ))}
      </ul>
    );
  }
  
  export default MovieList;
  
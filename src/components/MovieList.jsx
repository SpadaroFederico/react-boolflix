import MovieCard from "./MovieCard";

function MovieList({ movies, imageBaseUrl }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} imageBaseUrl={imageBaseUrl} />
      ))}
    </div>
  );
}

export default MovieList;

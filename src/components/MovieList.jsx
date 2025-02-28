import Card from "./Card";

function MovieList({ movies, languageCodes, imageBaseUrl }) {
  return (
    <div className="movie-list">
      {movies.map((media) => (
        <Card key={media.id} media={media} imageBaseUrl={imageBaseUrl} languageCodes={languageCodes} />
      ))}
    </div>
  );
}

export default MovieList;

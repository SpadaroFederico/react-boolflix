import { useState } from "react";

function MovieCard({ movie, imageBaseUrl }) {
  const [hover, setHover] = useState(false);

  const title = movie.title || movie.name;
  const imageUrl = movie.poster_path
    ? `${imageBaseUrl}w342${movie.poster_path}`
    : "https://via.placeholder.com/342x500";

  return (
    <div
      className="movie-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={imageUrl} alt={title} />
      {hover && (
        <div className="movie-info">
          <h3>{title}</h3>
          <p>{movie.overview}</p>
        </div>
      )}
    </div>
  );
}

export default MovieCard;

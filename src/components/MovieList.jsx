import { FaStar, FaRegStar } from "react-icons/fa";

function MovieList({ movies, languageCodes, imageBaseUrl }) {
  return (
    <ul>
      {movies.map((media) => {
        const title = media.title || media.name;
        const originalTitle = media.original_title || media.original_name;
        const flagUrl = `https://flagcdn.com/w40/${languageCodes[media.original_language] || 'un'}.png`;
        const imageUrl = media.poster_path
          ? `${imageBaseUrl}${media.poster_path}`
          : "https://via.placeholder.com/342x500";
        const rating = Math.ceil(media.vote_average / 2);

        return (
          <li key={media.id}>
            <img src={imageUrl} alt={title} />
            <h3>{title} ({originalTitle})</h3>
            <p>Lingua: <img src={flagUrl} alt={media.original_language} /></p>
            <p>Voto: {Array.from({ length: 5 }, (_, i) => i < rating ? <FaStar key={i} color="gold" /> : <FaRegStar key={i} color="gray" />)}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default MovieList;
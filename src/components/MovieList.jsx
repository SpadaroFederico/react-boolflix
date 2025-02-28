// MovieList.jsx
function MovieList({ movies, languageCodes }) {
  return (
    <ul>
      {movies.map((media) => (
        <li key={media.id}>
          <h3>{media.title || media.name} ({media.original_title || media.original_name})</h3>
          <p>
            Lingua: 
            <img 
              src={`https://flagcdn.com/w40/${languageCodes[media.original_language] || 'un'}.png`} 
              alt={media.original_language} 
            />
          </p>
          <p>Voto: {media.vote_average}</p>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
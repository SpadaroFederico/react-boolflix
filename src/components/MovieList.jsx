import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';  // Usato sia per stella piena che vuota

function MovieList({ movies, languageCodes, imageBaseUrl }) {
  return (
    <ul>
      {movies.map((media) => {
        const title = media.title || media.name;
        const originalTitle = media.original_title || media.original_name;

        // URL per la bandiera
        const flagUrl = `https://flagcdn.com/w40/${languageCodes[media.original_language] || 'un'}.png`;

        // URL dell'immagine del poster 
        const imageUrl = media.poster_path
          ? `${imageBaseUrl}w300${media.poster_path}` 
          : "https://via.placeholder.com/342x500"; 

        // arrotondamento da 1 a 10 ad 1 a 5
        const rating = Math.ceil(media.vote_average / 2);

        return (
          <li key={media.id}>
            <img src={imageUrl} alt={title} />
            <h3>{title} ({originalTitle})</h3>
            <p>Lingua: <img src={flagUrl} alt={media.original_language} /></p>
            <p>Voto: 
              <span>
                {Array.from({ length: 5 }, (_, i) => 
                  i < rating  
                
                  // Stella piena
                  ? <FontAwesomeIcon key={i} icon={faStar} color="gold" />
                  // Stella vuota 
                  : <FontAwesomeIcon key={i} icon={faStar} color="gray" />  
                )}
              </span>
            </p>
          </li>
        );
      })}
    </ul>
  );
}

export default MovieList;

import { FaStar, FaRegStar } from "react-icons/fa";

function Card({ media, imageBaseUrl, languageCodes }) {
  const title = media.title || media.name;
  const originalTitle = media.original_title || media.original_name;
  const flagUrl = `https://flagcdn.com/w40/${languageCodes[media.original_language] || 'un'}.png`;
  const imageUrl = media.poster_path ? `${imageBaseUrl}${media.poster_path}` : "https://via.placeholder.com/342x500";
  const rating = Math.ceil(media.vote_average / 2);
  
  return (
    
  );
}

export default Card;
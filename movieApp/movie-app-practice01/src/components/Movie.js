import { Link } from "react-router-dom";

function Movie({ movie }) {
  return (
    <div>
      <img src={movie.medium_cover_image} alt={movie.title} />
      <h1>
        <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
      </h1>
      <p>{movie.summary}</p>
      {movie.hasOwnProperty("genres") ? (
        <ul>
          {movie.genres.map((genre, idx) => (
            <li key={idx}>{genre}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default Movie;

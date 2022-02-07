import { Link } from "react-router-dom";

function Movie({ movie }) {
  const id = movie.id;

  return (
    <div>
      <img src={movie.medium_cover_image} alt={movie.title} />
      <h2>
        <Link to={`/movie/${id}`}>{movie.title}</Link>
      </h2>
      <p>{movie.summary}</p>

      <ul>
        {movie.hasOwnProperty("genres")
          ? movie.genres.map((genre, idx) => <li key={idx}>{genre}</li>)
          : null}
      </ul>
    </div>
  );
}

export default Movie;

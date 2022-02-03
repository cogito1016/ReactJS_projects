function Movie({ movie }) {
  return (
    <div>
      <img src={movie.medium_cover_image} alt={movie.title} />
      <h1>{movie.title}</h1>
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

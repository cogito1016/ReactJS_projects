import { useEffect, useState } from "react";
import Movie from "../../movie-app-practice01/src/components/Movie";

function App() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
    );

    const json = await response.json();

    setMovies(json.data.movies);
    setLoading(true);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading === false ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>Movies {movies.length}</h1>
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

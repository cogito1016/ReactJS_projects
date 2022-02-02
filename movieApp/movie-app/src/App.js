import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
    );

    const json = await response.json();

    setLoading(false);
    setMovies(json.data.movies);
    console.log("First Start");
  };

  return (
    <div>
      {loading === true ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>Movies ({movies.length})</h1>
          <ul>
            {movies.map((element) => {
              return <li key={element.id}>{element.title}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;

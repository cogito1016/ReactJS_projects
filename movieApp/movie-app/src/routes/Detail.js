import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  const getDetailMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    const result = json.data.movie;
    setMovie(result);
  };

  useEffect(() => {
    getDetailMovie();
  }, []);

  return <h1>{movie.title}</h1>;
}

export default Detail;

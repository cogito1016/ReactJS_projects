import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [movie, setMovie] = useState();

  const getDetailMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    const result = json.data.movie;
    console.log(result);
    setMovie(result);
    setLoading(true);
  };

  useEffect(() => {
    getDetailMovie();
  }, []);

  return (
    <div>
      {loading === false ? (
        <h1>Loading...</h1>
      ) : (
        <div> 
          <img src={movie.medium_cover_image} alt={movie.title} />
          <h1>{movie.title}</h1>
          <h4>
            {" "}
            LIKE : {movie.like_count} RATING : {movie.rating}
          </h4>
          <p>{movie.description_full}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;

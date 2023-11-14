import { useState, useEffect } from "react";
import MovieInfo from "./components/movieInfo";
import styles from "./Home_movie.module.css"

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json&sort_by=year"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading((loading) => !loading);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>      ) : (
        <div className={styles.movies}>
          {movies.map((item) => (
            <MovieInfo
              coverImg={item.small_cover_image}
              genres={item.genres}
              title={item.title}
              summary={item.summary}
              key={item.id}
              id={item.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;

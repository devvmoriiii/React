import { PropTypes } from 'prop-types';
import { Link } from "react-router-dom"; 
import styles from "./movieInfo.module.css";

function MovieInfo({coverImg, title, genres, summary, id }) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt="img" className={styles.movie_img}/>
      <h2 className={styles.movie__title}><Link to={`/movie/${id}`}>{title}</Link></h2>
      <ul className={styles.movie__genres}>
        {genres.map((item) => <li>{item}</li>)}
      </ul>
      <p>{summary.length > 300 ? `${summary.slice(0, 301)}...` : summary}</p>
      {/* <p>{summary}</p> */}
    </div>
  );
}

MovieInfo.propTypes = {  
  coverImg : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired, 
  summary : PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired, 
  id : PropTypes.number.isRequired,
}

export default MovieInfo;

import { PropTypes } from 'prop-types';

function MovieInfo({coverImg, title, genres, summary }) {
  return (
    <li>
      <img src={coverImg} alt="img" />
      <h2>{title}</h2>
      <p>
        <strong>{genres.map((item) => item + " ")}</strong>
      </p>
      <p>{summary}</p>
    </li>
  );
}

MovieInfo.propTypes = {
  coverImg : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired, 
  summary : PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired, 
}

export default MovieInfo;

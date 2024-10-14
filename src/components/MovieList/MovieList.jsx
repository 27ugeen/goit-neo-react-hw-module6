import { Link, useLocation } from "react-router-dom";

import css from "./MovieList.module.css";

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div className={css.component}>
      {movies.length > 0 ? (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link
                to={`/movies/${movie.id}`}
                state={location}
                className={css.link}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No trending movies available.</p>
      )}
    </div>
  );
};

export default MovieList;

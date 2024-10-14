import { Suspense, useEffect, useState, useRef } from "react";
import {
  NavLink,
  useParams,
  useLocation,
  useNavigate,
  Outlet,
} from "react-router-dom";
import { getMovieDetailsById } from "../../api/getMovieDetailsById";

import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const previousLocation = useRef(location.state || "/movies");

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetailsById(movieId);
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <p>Loading movie details...</p>;
  }

  const imgPath = `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`;
  const vote = Math.round(movieDetails.vote_average * 10);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <button
        onClick={() => navigate(previousLocation.current)}
        className={css.back}
      >
        Go back
      </button>

      <div className={css.info}>
        <img src={imgPath} className={css.image} alt={movieDetails.title} />

        <div className={css.desc}>
          <h1 className={css.title}>{movieDetails.title}</h1>

          <p>User rate: {vote}%</p>

          <h2>Overview</h2>

          <p>{movieDetails.overview}</p>

          <h2>Genres</h2>

          {movieDetails.genres.map((genre) => (
            <span key={genre.id}>{genre.name}</span>
          ))}
        </div>
      </div>

      <div className={css.aditionalInfo}>
        <div className={css.extra}>
          <nav className={css.subNav}>
            <h3>Additional information:</h3>

            <NavLink
              to={`/movies/${movieId}/cast`}
              className={css.subLink}
              state={location}
            >
              Cast
            </NavLink>

            <NavLink
              to={`/movies/${movieId}/review`}
              className={css.subLink}
              state={location}
            >
              Reviews
            </NavLink>
          </nav>
        </div>

        <Outlet />
      </div>
    </Suspense>
  );
};

export default MovieDetailsPage;

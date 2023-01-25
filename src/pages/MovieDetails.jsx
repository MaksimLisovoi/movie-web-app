import { getMovieById } from 'services/movieDbApi';
import { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  //   const location = useLocation();

  useEffect(() => {
    getMovieById(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return null;
  }

  console.log(movie);

  return (
    <>
      <h1>{movie.title}</h1>
    </>
  );
};

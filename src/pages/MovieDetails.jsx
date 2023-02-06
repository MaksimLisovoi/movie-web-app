import { getMovieById } from 'services/movieDbApi';
import { Suspense, useEffect, useState } from 'react';
import { useParams, useLocation, Outlet, Link } from 'react-router-dom';
import { MovieDescription } from 'components/MovieDescription';
import { Box } from 'components/Box';
import { MovieDetailsNav } from 'components/MovieDetailsNav';
import { Loader } from 'components/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    getMovieById(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return null;
  }

  console.log(location.state);

  return (
    <main>
      <Link to={backLinkHref}>Back to movies</Link>
      <MovieDescription movie={movie} />

      <Box pt={5} pb={5}>
        <Box as="h2" mb="4">
          Additional information
        </Box>
        <MovieDetailsNav />
      </Box>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;

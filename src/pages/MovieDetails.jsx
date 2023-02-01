import { getMovieById } from 'services/movieDbApi';
import { Suspense, useEffect, useState } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { MovieDescription } from 'components/MovieDescription';
import { Box } from 'components/Box';
import { MovieDetailsNav } from 'components/MovieDetailsNav';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  //   const location = useLocation();

  useEffect(() => {
    getMovieById(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return null;
  }

  return (
    <main>
      <MovieDescription movie={movie} />

      <Box pt={5} pb={5}>
        <Box as="h2" mb="4">
          Additional information
        </Box>
        <MovieDetailsNav />
      </Box>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;

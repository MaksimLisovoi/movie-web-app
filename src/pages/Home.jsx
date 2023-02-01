import { Box } from 'components/Box';
import { SharedMoviesList } from 'components/SharedMoviesList';
import { useEffect, useState } from 'react';

import { getTrendingMovie } from 'services/movieDbApi';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovie().then(setMovies);
  }, []);

  console.log(movies);

  return (
    <Box as="main">
      <SharedMoviesList movies={movies} />
    </Box>
  );
};

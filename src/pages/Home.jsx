import { Box } from 'components/Box';
import { MoviesItem } from 'components/MoviesItem';
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
      <Box
        as="ul"
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        mt={0}
        mb={0}
        mr={-4}
        ml={-4}
      >
        {movies.length > 0 &&
          movies.map(movie => <MoviesItem key={movie.id} movie={movie} />)}
      </Box>
    </Box>
  );
};

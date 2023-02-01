import { Box } from 'components/Box';
import { SharedMoviesList } from 'components/SharedMoviesList';
import { useEffect, useState } from 'react';

import { getTrendingMovie } from 'services/movieDbApi';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovie().then(setMovies);
  }, []);

  return (
    <Box as="main">
      <SharedMoviesList movies={movies} />
    </Box>
  );
};

export default Home;

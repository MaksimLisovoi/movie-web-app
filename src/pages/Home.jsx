import { Box } from 'components/Box';
import { SharedMoviesList } from 'components/SharedMoviesList';
import { useEffect, useState } from 'react';

import { getTrendingMovie } from 'services/movieDbApi';

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getTrendingMovie().then(setFilms);
  }, []);

  return (
    <Box as="main">
      <SharedMoviesList movies={films} />
    </Box>
  );
};

export default Home;

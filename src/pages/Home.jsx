import { Box } from 'components/Box';
import { SharedMoviesList } from 'components/SharedMoviesList';
import { useEffect, useState, useMemo } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getTrendingMovie } from 'services/movieDbApi';
import InfiniteScroll from 'react-infinite-scroll-component';

const Home = () => {
  const [films, setFilms] = useState([]);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const page = searchParams.get('page') ?? 1;

  // console.log(page);
  // console.log(typeof page);

  // const loadMore = () => {
  //   setSearchParams({ page: Number(page) + 1 });
  // };

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

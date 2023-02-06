import { Box } from 'components/Box';
import { SearchBar } from 'components/SearchBar';
import { SharedMoviesList } from 'components/SharedMoviesList';
import { useEffect } from 'react';
import { useState } from 'react';
import queryString from 'query-string';

import { getSearchedMovies } from 'services/movieDbApi';
import { useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  const [searhQuery, setSearhQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') ?? 1;

  // const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (location.pathname && location.search) {
      setSearhQuery(queryString.parse(location.search).query);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!searhQuery) {
      return;
    }

    const options = { searhQuery, page };
    const responsedMovies = getSearchedMovies(options);

    const fetchMovies = () => {
      responsedMovies.then(data => {
        setMovies(prevMovies => [...prevMovies, ...data]);
      });
    };

    fetchMovies();
  }, [page, searhQuery]);

  const onChangeQuery = query => {
    setSearhQuery(query);

    setSearchParams({ query: query });
    // setCurrentPage(1);
    setMovies([]);
  };

  const loadMore = () => {
    setSearchParams({ query: searhQuery, page: Number(page) + 1 });
  };

  return (
    <>
      <Box
        as="main"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <SearchBar onSubmit={onChangeQuery} />
        {movies.length > 0 && <SharedMoviesList movies={movies} />}
        <button onClick={loadMore}>Load more</button>
      </Box>
    </>
  );
};

export default Movies;

import { Box } from 'components/Box';
import { SearchBar } from 'components/SearchBar';
import { SharedMoviesList } from 'components/SharedMoviesList';
import { useEffect } from 'react';
import { useState } from 'react';
import { getSearchedMovies } from 'services/movieDbApi';

const Movies = () => {
  const [searhQuery, setSearhQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!searhQuery) {
      return;
    }

    const options = { searhQuery, currentPage };
    const responsedMovies = getSearchedMovies(options);

    const fetchMovies = () => {
      responsedMovies.then(data => {
        setMovies(prevMovies => [...prevMovies, ...data]);
        setCurrentPage(prevPage => prevPage + 1);
      });
    };

    fetchMovies();
  }, [searhQuery]);

  const onChangeQuery = query => {
    setSearhQuery(query);
    setCurrentPage(1);
    setMovies([]);
  };

  return (
    <>
      <Box as="main">
        <SearchBar onSubmit={onChangeQuery} />
        {movies.length > 0 && <SharedMoviesList movies={movies} />}
      </Box>
    </>
  );
};

export default Movies;

import { Box } from 'components/Box';
import { MoviesItem } from './MoviesItem';
import { getGenres } from 'services/movieDbApi';
import { useEffect, useState } from 'react';

export function SharedMoviesList({ movies }) {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getGenres().then(setGenres);
  }, []);

  console.log(genres);
  return (
    <Box
      as="ul"
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      mt={5}
      mb={0}
      mr={-4}
      ml={-4}
    >
      {movies.length > 0 &&
        movies.map(movie => (
          <MoviesItem key={movie.id} movie={movie} genres={genres} />
        ))}

      {/* {movies.length > 0 &&
              movies.map(movie => <MoviesItem key={movie.id} movie={movie} />)} */}
    </Box>
  );
}

import { Box } from 'components/Box';
import { MoviesItem } from './MoviesItem';

export const SharedMoviesList = ({ movies }) => {
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
        movies.map(movie => <MoviesItem key={movie.id} movie={movie} />)}
    </Box>
  );
};

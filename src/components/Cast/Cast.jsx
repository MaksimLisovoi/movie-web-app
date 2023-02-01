import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/movieDbApi';
import { Box } from '../Box';
import { CastCard } from './CastCard';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId).then(setCast);
  }, [movieId]);

  if (!cast) {
    return;
  }

  console.log(cast);

  return (
    <>
      <Box
        as="ul"
        display="flex"
        flexWrap="wrap"
        m={-3}
        justifyContent="center"
      >
        <CastCard cast={cast} />
      </Box>
    </>
  );
};

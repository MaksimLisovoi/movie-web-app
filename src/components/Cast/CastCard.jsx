import { Box } from 'components/Box';

export const CastCard = ({ cast }) => {
  return (
    <>
      {cast.map(({ id, profile_path, name }) => (
        <Box as="li" p="3" flex="0" key={id}>
          <img
            src={`https://image.tmdb.org/t/p/w342${profile_path}`}
            alt=""
            width="200"
            height="300"
          />
          <h3>{name}</h3>
        </Box>
      ))}
    </>
  );
};

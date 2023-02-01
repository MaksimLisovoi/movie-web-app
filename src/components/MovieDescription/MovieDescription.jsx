import { Box } from 'components/Box';
import {
  Genre,
  Overview,
  SubTitle,
  Title,
  DescrItem,
} from './MovieDescription.styled';

export const MovieDescription = ({ movie }) => {
  const { title, poster_path, overview, genres, vote_average } = movie;

  return (
    <Box display="flex" pt="4" pb="5" borderBottom="normal">
      <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt="" />
      <Box p="4" display="flex" flexDirection="column" maxWidth="600px">
        <DescrItem>
          <Title>{title}</Title>
          <p>User score: {vote_average}</p>
        </DescrItem>

        <DescrItem>
          <SubTitle>Overview</SubTitle>

          <Overview>{overview}</Overview>
        </DescrItem>

        <DescrItem>
          <SubTitle>Genres</SubTitle>
          <Box as="ul" display="flex">
            {genres.map(genre => (
              <Genre key={genre.name}>
                <span> {genre.name}</span>
              </Genre>
            ))}
          </Box>
        </DescrItem>
      </Box>
    </Box>
  );
};

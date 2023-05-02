import { ListItem } from '../pages/Home.styled';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { DescriptionTitle, MovieCard, TextBlock } from './MoviesItem.styled';

const NavItem = styled(NavLink)`
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  font-size: ${p => p.theme.fontSizes.s};
`;

export const MoviesItem = ({ movie, genres }) => {
  const { id, poster_path, title, release_date } = movie;
  const location = useLocation();

  console.log(genres);

  return (
    <ListItem>
      <NavItem to={`/movies/${id}`} state={{ from: location }}>
        <MovieCard>
          <img
            src={`https://image.tmdb.org/t/p/w342${poster_path}`}
            alt=""
            width="300"
            height="450"
          />
          <div>
            <TextBlock>
              <DescriptionTitle>{title}</DescriptionTitle>
              <span>{release_date.slice(0, 4)}</span>
            </TextBlock>
          </div>
        </MovieCard>
      </NavItem>
    </ListItem>
  );
};

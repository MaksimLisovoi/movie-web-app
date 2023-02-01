import { ListItem } from '../pages/Home.styled';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Box } from './Box';

const NavItem = styled(NavLink)`
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  font-size: ${p => p.theme.fontSizes.s};
`;

export const MoviesItem = ({ movie }) => {
  const { id, poster_path, title } = movie;
  return (
    <ListItem>
      <NavItem to={`movies/${id}`}>
        <Box width="300px">
          <img
            src={`https://image.tmdb.org/t/p/w342${poster_path}`}
            alt=""
            width="300"
          />
          <div>
            <h3>{title}</h3>
          </div>
        </Box>
      </NavItem>
    </ListItem>
  );
};

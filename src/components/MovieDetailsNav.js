import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Box } from './Box';

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[5]}px;
  border-radius: 4px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  &.active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.accent};
  }
`;

export const MovieDetailsNav = () => {
  return (
    <nav>
      <Box as="ul" display="flex">
        <li>
          <NavItem to="cast">Cast</NavItem>
        </li>
        <li>
          <NavItem to="reviews">Reviews</NavItem>
        </li>
      </Box>
    </nav>
  );
};

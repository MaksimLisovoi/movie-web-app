import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Box } from './Box';
import { Container } from 'pages/Home.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[5]}px;
  border-radius: 4px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  &.active {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.primary};
  }
`;

export const AppBar = () => {
  return (
    <Box as="header" p={4} borderBottom="1px solid black">
      <Container>
        <Box as="nav" display="flex">
          {navItems.map(({ href, text }) => (
            <NavItem to={href} key={href}>
              {text}
            </NavItem>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

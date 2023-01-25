import { Container } from 'pages/Home.styled';
import { Outlet } from 'react-router';
import { AppBar } from './AppBar';

import { Box } from './Box';

export const Layout = () => {
  return (
    <Box>
      <AppBar />
      <Container>
        <Outlet />
      </Container>
    </Box>
  );
};

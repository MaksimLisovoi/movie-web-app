import { Container } from 'pages/Home.styled';
import { Outlet } from 'react-router';
import { AppBar } from './AppBar';
import { Suspense } from 'react';

import { Box } from './Box';

export const Layout = () => {
  return (
    <Box>
      <AppBar />
      <Container>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </Container>
    </Box>
  );
};

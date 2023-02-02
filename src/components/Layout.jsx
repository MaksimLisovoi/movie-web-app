import { Container } from 'pages/Home.styled';
import { Outlet } from 'react-router';
import { AppBar } from './AppBar';
import { Suspense } from 'react';
import { Loader } from './Loader';

import { Box } from './Box';

export const Layout = () => {
  return (
    <Box>
      <AppBar />
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </Box>
  );
};

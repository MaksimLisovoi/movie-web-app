import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1344px;
  padding: 0 24px;
`;

export const ListItem = styled.li`
  padding: ${p => p.theme.space[4]}px;
`;

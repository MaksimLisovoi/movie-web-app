import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const SubTitle = styled.h2`
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Overview = styled.p`
  font-size: ${p => p.theme.fontSizes.lm};
`;

export const Genre = styled.span`
  &:not(:last-child) {
    margin-right: ${p => p.theme.space[3]}px;
  }
`;

export const DescrItem = styled.div`
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[6]}px;
  }
`;

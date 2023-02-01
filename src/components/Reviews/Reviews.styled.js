import styled from 'styled-components';

export const ReviewItem = styled.li`
  width: 80%;
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[5]}px;
  }
`;

export const TextContent = styled.p`
  line-height: 1.4;
`;

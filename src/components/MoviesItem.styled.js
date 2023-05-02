import styled from 'styled-components';

export const MovieCard = styled.div`
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 300px;
  box-shadow: 0 14px 28px rgba(160, 152, 152, 0.25),
    0 10px 10px rgba(160, 152, 152, 0.25);
  &:hover {
    transform: scale(1.04);
  }
`;

export const TextBlock = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0;
  margin-bottom: 0;

  padding: 0 5px 5px 5px;
`;

export const DescriptionTitle = styled.h3`
  font-family: Roboto;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  margin-bottom: 0;
  text-transform: uppercase;
  padding: 5px 5px 0px 5px;
`;

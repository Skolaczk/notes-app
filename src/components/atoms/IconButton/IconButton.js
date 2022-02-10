import styled from 'styled-components';

export const StyledIconButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  cursor: pointer;
`;

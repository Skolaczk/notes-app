import styled from 'styled-components';

export const StyledNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.text};
  padding: 10px 15px;
  border-bottom: 1px solid ${({ theme }) => theme.line};
`;

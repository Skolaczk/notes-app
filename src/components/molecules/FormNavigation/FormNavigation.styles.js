import styled from 'styled-components';

export const StyledFormNavigation = styled.div`
  padding: 10px 15px 11px;
  border-bottom: 1px solid ${({ theme }) => theme.line};
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    button:first-child {
      display: none;
    }
  }
`;

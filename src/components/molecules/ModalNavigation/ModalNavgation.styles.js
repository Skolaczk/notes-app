import styled from 'styled-components';

export const StyledModalNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.text};
  padding: 10px 15px;
  border-bottom: 1px solid ${({ theme }) => theme.line};

  @media (min-width: 425px) {
    padding: 15px 25px;
  }
`;

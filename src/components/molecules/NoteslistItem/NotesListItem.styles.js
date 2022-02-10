import styled from 'styled-components';

export const StyledNotesListItem = styled.div`
  color: ${({ theme }) => theme.text};
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;

  &:hover {
    background: ${({ theme }) => theme.hover};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.line};
  }
`;

export const StyledDescription = styled.p`
  color: ${({ theme }) => theme.lightText};
  font-size: 14px;
  margin-top: 5px;
`;

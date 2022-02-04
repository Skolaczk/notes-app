import styled from 'styled-components';

export const StyledInput = styled.input`
  color: ${({ theme }) => theme.text};
  background: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.lightText};
  width: 100%;
  padding: 8px 0;
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif;

  &:focus {
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.button};
  }

  &::placeholder {
    color: ${({ theme }) => theme.lightText};
  }
`;

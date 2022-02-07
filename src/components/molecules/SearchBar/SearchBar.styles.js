import styled from 'styled-components';

export const StyledSearchBar = styled.div`
  padding: 10px 15px;
  border-bottom: 1px solid ${({ theme }) => theme.line};
  color: ${({ theme }) => theme.text};

  input {
    background: none;
    border: none;
    margin-left: 10px;
    width: 90%;
    color: ${({ theme }) => theme.text};
    font-size: 15px;

    &:focus {
      outline: none;
    }

    &:focus::placeholder {
      color: ${({ theme }) => theme.text};
    }
  }
`;

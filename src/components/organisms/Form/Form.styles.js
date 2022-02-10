import styled from 'styled-components';

export const StyledForm = styled.form`
  padding: 10px;

  input,
  textarea {
    border: none;
    width: 100%;
    background-color: transparent;
    resize: none;
    color: ${({ theme }) => theme.text};
    padding: 5px;
    font-family: 'Roboto', sans-serif;
    outline: none;

    &::placeholder {
      ${({ theme }) => theme.lightText};
    }
  }

  input {
    font-size: 18px;
    margin-bottom: 10px;
  }

  textarea {
    min-height: 85vh;
    font-size: 16px;
    line-height: 1.5;
  }
`;

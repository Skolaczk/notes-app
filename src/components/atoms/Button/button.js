import styled from 'styled-components';

export const StyledButton = styled.button`
  background: ${({ theme }) => theme.button};
  color: white;
  border: none;
  border-radius: 25px;
  width: 47.5%;
  height: 35px;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
`;

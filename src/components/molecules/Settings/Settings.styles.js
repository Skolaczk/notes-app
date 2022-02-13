import styled from 'styled-components';

export const StyledSettings = styled.div`
  padding: 5px 15px 15px;

  button {
    background-color: ${({ theme }) => theme.button};
    border: none;
    text-align: center;
    color: white;
    border-radius: 25px;
    width: 100%;
    padding: 7px;
    font-size: 15px;
    margin-top: 25px;
    cursor: pointer;
    font-weight: 700;
  }
`;

export const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.lightText};
  margin: 10px 0 5px;
  font-size: 14px;
`;

export const StyledBox = styled.div`
  border: 1px solid ${({ theme }) => theme.line};
  padding: 8px;
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

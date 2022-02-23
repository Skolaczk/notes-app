import styled from 'styled-components';

export const StyledSettings = styled.div`
  padding: 5px 15px 15px;

  label {
    display: block;
    width: 95%;
  }

  button {
    background-color: ${({ theme }) => theme.button};
    border: none;
    text-align: center;
    color: white;
    border-radius: 25px;
    width: 48%;
    padding: 7px;
    font-size: 14px;
    margin-top: 25px;
    cursor: pointer;
    font-weight: 700;
  }

  @media (min-width: 425px) {
    padding: 5px 25px 25px;
  }
`;

export const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.lightText};
  margin: 15px 0 5px;
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

export const StyledBoxImage = styled(StyledBox)`
  padding: 3.5px 8px;

  img {
    height: 30px;
    border-radius: 50%;
  }
`;

export const StyledInfoParagraph = styled(StyledParagraph)`
  text-align: center;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

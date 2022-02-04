import styled from 'styled-components';

export const StyledUnauthenticatedApp = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.hover};

  h1,
  p {
    text-align: center;
  }

  h1 {
    font-size: 28px;
    font-weight: 400;
    margin-bottom: 15px;
    color: ${({ theme }) => theme.text};
  }

  p {
    color: ${({ theme }) => theme.lightText};
    font-size: 14px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.background};
  padding: 25px 20px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0 15px 0;
`;

export const StyledError = styled.p`
  color: red !important;
  margin: 10px 0;
`;

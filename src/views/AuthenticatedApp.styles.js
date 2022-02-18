import styled from 'styled-components';

export const StyledAuthenticatedApp = styled.div`
  background: ${({ theme }) => theme.background};
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Container = styled.div`
  width: 400px;
  border-right: 1px solid ${({ theme }) => theme.line};
`;

export const Box = styled.div`
  width: 85%;
`;

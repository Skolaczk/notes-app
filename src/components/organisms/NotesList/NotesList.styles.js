import styled from 'styled-components';

export const StyledNotesList = styled.div`
  position: relative;
  height: calc(100vh - 80px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 7px;
    background-color: ${({ theme }) => theme.line};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.lightText};
    border-radius: 5px;
  }
`;

export const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.lightText};
  text-align: center;
  margin: 5px 0;
`;

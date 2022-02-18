import styled from 'styled-components';

export const StyledNotesList = styled.div`
  overflow-y: ${({ value }) => (value > 10 ? 'scroll' : 'none')};
  height: calc(100vh - 40px);

  ::-webkit-scrollbar {
    width: 8px;
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

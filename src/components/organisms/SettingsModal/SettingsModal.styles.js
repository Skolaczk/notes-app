import styled from 'styled-components';
import ReactModal from 'react-modal';

export const StyledSettingsModal = styled(ReactModal)`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
`;

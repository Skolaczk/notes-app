import styled from 'styled-components';
import ReactModal from 'react-modal';

export const StyledSettingsModal = styled(ReactModal)`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: 425px) {
    width: 400px;
    height: 400px;
    border-radius: 10px;
  }
`;

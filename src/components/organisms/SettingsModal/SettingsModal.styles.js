import styled from 'styled-components';
import ReactModal from 'react-modal';

export const StyledSettingsModal = styled(ReactModal)`
  width: 300px;
  height: 400px;
  background-color: ${({ theme }) => theme.background};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;

  @media (min-width: 425px) {
    width: 400px;
  }
`;
